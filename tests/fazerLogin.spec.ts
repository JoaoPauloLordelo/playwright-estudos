import {test} from "./PageObjectModel/PaginaLogin"

test.describe("Pagina de Login", () => {

    test("Usar email e senha valido", async ({paginaLogin}) => {
        await paginaLogin.realizarLogin("guilherme@email.com","123456")

        await paginaLogin.validarLogin()
    })

    test("Usar email e senha inválidos", async ({paginaLogin}) => {
        await paginaLogin.realizarLogin("email@teste.com","111111");

        await paginaLogin.verificaMensagemErro("Você não está autorizado a acessar este recurso");
    })

    test("Usar email fora da formatação correta", async ({paginaLogin}) =>{
        await paginaLogin.preencherCamposLogin("email","1111111")

        await paginaLogin.verificaMensagemErro("E-mail inválido")
    })

    test("Deixar um dos campos em branco", async ({paginaLogin}) => {
        await paginaLogin.preencherCamposLogin("","");

        await paginaLogin.verificaMensagemErro("E-mail é obrigatório")
        await paginaLogin.verificaMensagemErro("Senha é obrigatória")
        
    })
})