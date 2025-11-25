import { Page,Locator, expect } from "@playwright/test";
export class Saucedemo{
    page:Page
    headertext:Locator
    uname:Locator
    pwd:Locator
    login:Locator
    titlewrap:Locator
    credentials:Locator
    passwordtitle:Locator
    passwordusers:Locator
    /*producttitle:Locator
     product1:Locator
    product2:Locator
    product3:Locator
    cartbadge:Locator
    cartlink:Locator*/
    //carttitle:Locator
    constructor(page:Page){
         this.page=page;
         this.headertext=page.getByText('Swag Labs')
         this.uname=page.locator("#user-name")
         this.pwd=page.locator("#password")
         this.login=page.locator("#login-button")
         this.titlewrap=page.getByRole('heading', { name: 'Accepted usernames are:' })
        this.credentials=page.locator('[data-test="login-credentials"]')
        this.passwordtitle=page.getByRole('heading',{name:'Password for all users:'})
        this.passwordusers=page.locator('[data-test="login-password"]')
       /* this.producttitle=page.locator('[data-test="title"]')
        this.product1=page.locator('[name="add-to-cart-sauce-labs-backpack"]')
        this.product2=page.locator('[name="add-to-cart-sauce-labs-bike-light"]')
        this.product3=page.locator('[name="add-to-cart-sauce-labs-bolt-t-shirt"]')
        this.cartbadge=page.locator('[data-test="shopping-cart-badge"]')
        this.cartlink=page.locator('[class="shopping_cart_link"]')*/
        //this.carttitle=page.locator('[data-test="title"]')
        }
   public async saucedemo(username:string,password:string){
     await expect (this.credentials).toContainText("standard_user")
     await expect (this.credentials).toContainText("locked_out_user")
     await expect (this.credentials).toContainText("problem_user")
     await expect (this.credentials).toContainText("performance_glitch_user")
    await expect (this.credentials).toContainText("error_user")
    await expect (this.credentials).toContainText("visual_user")
    await expect (this.passwordusers).toContainText("secret_sauce")
     await expect(this.uname).toBeVisible();
     await this.uname.fill(username);
     await this.pwd.fill(password);
     await expect(this.login).toBeVisible()
     await this.login.click();
    /*await expect(this.producttitle).toHaveText('Products');
    let product1name= await this.page.locator('[class="inventory_item_name "]').nth(0).textContent()
    await this.product1.click();
    let product2name= await this.page.locator('[class="inventory_item_name "]').nth(1).textContent()
    await this.product2.click();
    let product3name= await this.page.locator('[class="inventory_item_name "]').nth(2).textContent()
    await this.product3.click();
    await expect(this.cartbadge).toHaveText('3');
    await this.cartlink.click();*/
   /* await expect (this.carttitle).toHaveText('Your Cart')
    await expect (this.page.getByText(product1name)).toBeVisible()
    await expect (this.page.getByText(product2name)).toBeVisible()
    await expect (this.page.getByText(product3name)).toBeVisible()*/
}
}
