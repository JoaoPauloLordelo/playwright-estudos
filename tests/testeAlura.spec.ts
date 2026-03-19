import test, { expect } from "@playwright/test";

test.describe("Acessar Localhost", () => {
    test("Acessar pagina", async ({page}) => {
        await page.goto("http://localhost:4200")

        await expect(page).toHaveTitle("Jornada Milhas")

        const loc = page.locator("h2[data-testid='titulo-passagens']")
        await expect.soft(loc).toContainText("texto aleatorio")
        await expect(loc).toBeVisible()
        
        //ou outra maneira:
        //const tituloPassagens = page.getByRole("heading", {name: "Passagens"}))
        //await expect(tituloPassagens).toBeVisible()

        await expect(page.getByRole("heading", {name: "Promoções"})).toBeVisible()

        await expect(page.getByRole("heading", {name: "Depoimentos"})).toBeVisible()




    })
})