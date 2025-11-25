import { Page,Locator, expect } from "@playwright/test";
export class Textbox{
    page:Page
    fullname:Locator
    email:Locator
    currentaddress:Locator
    permanentaddress:Locator
    submit:Locator
    details:Locator
    constructor(page:Page){
        this.page=page;
        this.fullname=page.getByRole('textbox', { name: 'Full Name' });
        this.email=page.getByRole('textbox', { name: 'name@example.com' });
        this.currentaddress=page.getByRole('textbox', { name: 'Current Address' });
        this.permanentaddress=page.locator('[id="permanentAddress"]')
        this.submit=page.getByRole('button', { name:'Submit'})
        this.details=page.locator('[id="name"]')
    }
    public async textandclear (firstName:string, email:string, permanentaddress:any,currentaddress:any){
        await this.fullname.fill(firstName);//tohave value for exactmatch and editable filed
        await this.email.fill(email);
        await this.currentaddress.click();
        await this.currentaddress.fill(currentaddress);  
        await this.currentaddress.click();
        await this.page.keyboard.press('Control+A')  ;
         await this.page.keyboard.press('Control+C')  ;   
        await this.permanentaddress.click();
        await this.page.keyboard.press('Control+V')  ;
                //await this.permanentaddress.fill(permanentaddress);
      //  await this.fullname.clear()
      await this.submit.click();
      await expect(this.details).toContainText(firstName)//expect keyword for assertion, for sometext-non editable fields,then matching substring
      await expect(this.details).not.toContainText("hello")//negative assertion
       await expect(this.submit).toContainClass("btn btn-primary")
       await expect(this.submit).toHaveCSS('background-color','rgb(0, 105, 217)')
    }
}
