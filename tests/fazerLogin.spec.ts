import test from "@playwright/test";
import PaginaLogin from "./PageObjectModel/PaginaLogin";

test.describe("Pagina de Login", () => {

    let paginaLogin : PaginaLogin;

    test.beforeEach( async ({page}) => {
        paginaLogin = new PaginaLogin(page)
        paginaLogin.visitar()
    })

    test("Usar email e senha valido", async () => {
        await paginaLogin.realizarLogin("guilherme@email.com","123456")

        await paginaLogin.validarLogin()
    })

    test("Usar email e senha inválidos", async () => {
        await paginaLogin.realizarLogin("email@teste.com","111111");

        await paginaLogin.verificaMensagemErro("Você não está autorizado a acessar este recurso");
    })

    test("Usar email fora da formatação correta", async () =>{
        await paginaLogin.preencherCamposLogin("email","1111111")

        await paginaLogin.verificaMensagemErro("E-mail inválido")
    })

    test("Deixar um dos campos em branco", async () => {
        await paginaLogin.preencherCamposLogin("","");

        await paginaLogin.verificaMensagemErro("E-mail é obrigatório")
        await paginaLogin.verificaMensagemErro("Senha é obrigatória")
        
    })
})