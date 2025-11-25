import { Page,Locator, expect } from "@playwright/test";
export class Sdinventory{
    page:Page
    producttitle:Locator
     product1:Locator
    product2:Locator
    product3:Locator
    cartbadge:Locator
    cartlink:Locator

constructor(page:Page){
         this.page=page;
this.producttitle=page.locator('[data-test="title"]')
        this.product1=page.locator('[name="add-to-cart-sauce-labs-backpack"]')
        this.product2=page.locator('[name="add-to-cart-sauce-labs-bike-light"]')
        this.product3=page.locator('[name="add-to-cart-sauce-labs-bolt-t-shirt"]')
        this.cartbadge=page.locator('[data-test="shopping-cart-badge"]')
        this.cartlink=page.locator('[class="shopping_cart_link"]')

}
public async addproduct1(){
    await expect(this.producttitle).toHaveText('Products');
    let product1name= await this.page.locator('[class="inventory_item_name "]').nth(0).textContent()
    await this.product1.click();
    return product1name
}
public async addproduct2(){
    let product2name= await this.page.locator('[class="inventory_item_name "]').nth(1).textContent()
    await this.product2.click();
    return product2name
}
public async addproduct3(){
    let product3name= await this.page.locator('[class="inventory_item_name "]').nth(2).textContent()
    await this.product3.click();
    
    await expect(this.cartbadge).toHaveText('3');
    await this.cartlink.click();
    return product3name
}
}