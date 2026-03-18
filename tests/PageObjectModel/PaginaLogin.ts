import { expect, Locator, Page } from "@playwright/test";

export default class PaginaLogin{
    private readonly page : Page;
    private readonly botaoLogin: Locator;
    private readonly inputEmail: Locator;
    private readonly inputSenha: Locator;
    private readonly botaoAcessarConta: Locator;

    constructor(page: Page){
        this.page = page;
        this.botaoLogin = page.getByTestId("botao-login");
        this.inputEmail = page.getByTestId("input-email");
        this.inputSenha = page.getByTestId("input-senha");
        this.botaoAcessarConta = page.getByTestId('botao-acessar-conta');
    }

    async visitar(){
        await this.page.goto("http://localhost:4200/");
        await this.botaoLogin.click();


        await expect(this.page).toHaveURL("http://localhost:4200/auth/login")
    }

    async realizarLogin(email : string, senha: string){ 
        await this.preencherCamposLogin(email,senha);
        await this.botaoAcessarConta.click();
    }

    async verificaMensagemErro(menasgem : string){
        const elementoErro = this.page.getByText(menasgem);

        await expect(elementoErro).toBeVisible();
    }

    async preencherCamposLogin(email : string, senha: string){
        await this.inputEmail.fill(email);
        await this.inputEmail.blur()
        await this.inputSenha.fill(senha);
        await this.inputSenha.blur()
    }

    async validarLogin(){
        await expect(this.page).toHaveURL("http://localhost:4200/home")
    }
}