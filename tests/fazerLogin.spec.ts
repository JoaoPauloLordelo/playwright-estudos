import test from "@playwright/test";
import PaginaLogin from "./PageObjectModel/PaginaLogin";

test.describe("Pagina de Login", () => {
    test("Usar email e senha valido", async ({page}) => {
        const paginaLogin = new PaginaLogin(page);

        await paginaLogin.visitar()

        await paginaLogin.realizarLogin("guilherme@email.com","123456")
    })
})