import test from "@playwright/test";
import PaginaPrincipal from "./PageObjectModel/PaginaPrincipal";

test.describe("Buscar passagens", ()=>{

    let paginaPrincipal : PaginaPrincipal

    test.beforeEach(async ({page})=>{
        paginaPrincipal = new PaginaPrincipal(page);

        await paginaPrincipal.visitar()
    })

    test("Buscar passagens só de ida", async () =>{
        await paginaPrincipal.definirSomenteIda();

        await paginaPrincipal.abrirModalPasasgeiros();

        await paginaPrincipal.definirNumeroAdultos(3);
        await paginaPrincipal.definirNumeroCriancas(2);
        await paginaPrincipal.definirNumeroBebes(1);

        await paginaPrincipal.fecharModalPassageiros()

        await paginaPrincipal.definirOrigemEDestino("Sergipe","Minas Gerais");

        await paginaPrincipal.definirData(new Date())

        await paginaPrincipal.buscarPassagens()
    })




})