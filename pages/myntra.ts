import { Page,Locator, expect } from "@playwright/test";
export class Myntra{
    page:Page
    product1:Locator
    product2:Locator
    size3:Locator
    constructor (page:Page){
        this.page=page
        this.product1=page.locator('[class="product-discountedPrice"]').nth(0)
        this.product2=page.locator('[class="product-discountedPrice"]').nth(1)
        this.size3=page.locator('[class="size-buttons-unified-size"]').nth(2)
    }

public async Myntra(){
   const page2promise= this.page.waitForEvent('popup')
    
      await this.product1.click();
      const page2=await page2promise;
      await page2.waitForURL('https://www.myntra.com/**')//not sure which url should be there so add**
return page2
}
public async Selectsize(){
await this.size3.waitFor({state:"visible"})//till the element is visible in the UI it will wait
    await this.size3.click()
await this.page.waitForLoadState('load')//domcontentedload+ui will get loads
    await this.page.waitForTimeout(10000)//after 10s only next action will be performed
}
}