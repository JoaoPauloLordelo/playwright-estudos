import { Locator, Page } from "@playwright/test";

export default class PaginaPrincipal {
    private readonly page: Page;
    private readonly botaoSomenteIda: Locator;
    private readonly botaoAbrirModalPassageiros: Locator;
    private readonly botaoIncrementarAdultos: Locator;
    private readonly botaoIncrementarCriancas: Locator;
    private readonly botaoIncrementarBebes: Locator;
    private readonly botaoFecharModalPassageiros: Locator;
    private readonly campoDropdownOrigem: Locator;
    private readonly campoDropdownDestino: Locator;
    private readonly campoDataIda: Locator;
    private readonly botaoBuscarPassagens: Locator;
  private readonly textoIdaVolta: Locator;
  private readonly containerOrigem: Locator;
  private readonly containerDestino: Locator;
  private readonly botaoComprar: Locator;
  
  constructor(page: Page) {
    this.page = page;
    this.botaoSomenteIda = page.getByTestId('botao-somente-ida');
    
    this.botaoAbrirModalPassageiros = page.getByTestId('abrir-modal-passageiros');
    this.botaoIncrementarAdultos = page.getByTestId('seletor-passageiro-adultos').getByRole('button', { name: 'adição' });
    this.botaoIncrementarCriancas = page
    .getByTestId('seletor-passageiro-criancas')
      .getByRole('button', { name: 'adição' });
    this.botaoIncrementarBebes = page
      .getByTestId('seletor-passageiro-bebes')
      .getByRole('button', { name: 'adição' });

    this.botaoFecharModalPassageiros = page.getByTestId('fechar-modal-passageiros');

    this.campoDropdownOrigem = page
    .getByTestId('campo-dropdown-origem')
      .getByLabel('Origem');
    this.campoDropdownDestino = page
    .getByTestId('campo-dropdown-destino')
      .getByLabel('Destino');
      
      this.campoDataIda = page.getByTestId('campo-data-ida');
      this.botaoBuscarPassagens = page.getByTestId('botao-buscar-passagens');

    this.textoIdaVolta = page.getByTestId('texto-ida-volta');
    this.containerOrigem = page.getByTestId('container-origem');
    this.containerDestino = page.getByTestId('container-destino');
    this.botaoComprar = page.getByTestId('botao-comprar');
}

async visitar() {
    await this.page.goto('http://localhost:4200/');
}


async fecharModalPassageiros() {
    await this.botaoFecharModalPassageiros.click()
}
async definirNumeroAdultos(quant : number) {
    for(let i = 1; i < quant; i++){
        await this.botaoIncrementarAdultos.click()
    }
}
async definirNumeroCriancas(quant : number) {
    for(let i = 0; i < quant; i++){
        await this.botaoIncrementarCriancas.click()
    }
}
async definirNumeroBebes(quant : number) {
    for(let i = 0; i < quant; i++){
        await this.botaoIncrementarBebes.click()
    }
}
async abrirModalPasasgeiros() {
    await this.botaoAbrirModalPassageiros.click()
}
async definirSomenteIda() {
    await this.botaoSomenteIda.click()
}

async definirOrigemEDestino( origem : string, destino: string){
    await this.campoDropdownOrigem.fill(origem);
    await this.campoDropdownOrigem.press("Enter")
    await this.campoDropdownDestino.fill(destino);
    await this.campoDropdownDestino.press("Enter")
}


async definirData(data : Date){
    const dataFormatada = data.toLocaleString("en-US", {dateStyle : 'short'});
    await this.campoDataIda.fill(dataFormatada)
}

async buscarPassagens(){
    await this.botaoBuscarPassagens.click()
}
}