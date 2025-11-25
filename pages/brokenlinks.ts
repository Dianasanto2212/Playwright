import { Page,Locator,expect } from "@playwright/test";
export class Brokenlinks{
    page:Page
    headertext:Locator
    subheader1:Locator
    //image:Locator
    subheader2:Locator
   // brokenimage:Locator
    textvalidlink:Locator
    validlink:Locator
    textbrokenlink:Locator
    brokenlink:Locator
constructor(page:Page){
    this.page=page;
    this.headertext=page.locator('[class="text-center"]')
    this.subheader1=page.getByText('Valid image')
   this.subheader2=page.getByText('Broken image')
   this.textvalidlink=page.getByText('Valid Link', { exact: true })
   this.validlink=page.getByRole('link',{name:'Click Here for Valid Link'})
   this.textbrokenlink=page.getByText('Broken Link', { exact: true })
   this.brokenlink=page.getByRole('link',{name:'Click Here for Broken Link'})
}

public async brokenlinks(){
     await expect(this.validlink).toBeVisible()
    //await this.validlink.click();
    await expect(this.brokenlink).toBeVisible()
   // await this.brokenlink.click();
   
}
}