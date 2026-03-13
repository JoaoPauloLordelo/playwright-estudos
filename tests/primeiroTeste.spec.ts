import test, { expect } from "@playwright/test";

test.describe("Primeiro Teste", () =>{
    test("Abrir o google", async ({page}) =>{
        await page.goto("https://www.google.com");

        await expect(page).toHaveTitle("Google");
    })
})