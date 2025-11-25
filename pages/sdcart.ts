import { Page,Locator, expect } from "@playwright/test";
import { Sdinventory } from "./sdinventory";
export class Sdcart{
    page:Page
    carttitle:Locator

    constructor(page:Page){
         this.page=page;
         this.carttitle=page.locator('[data-test="title"]')
}
public async sdcart(product1name:any,product2name:any,product3name:any){
    await expect (this.carttitle).toHaveText('Your Cart')
    await expect (this.page.getByText(product1name)).toBeVisible()
    await expect (this.page.getByText(product2name)).toBeVisible()
    await expect (this.page.getByText(product3name)).toBeVisible()
}
}

