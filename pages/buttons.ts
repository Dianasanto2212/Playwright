import { Page,Locator, expect } from "@playwright/test";
export class Buttons{
    page:Page
    doubleclickme:Locator
    rightclickme:Locator
    clickme:Locator
    clickmemessage:Locator
    constructor(page:Page){
        this.page=page;
        this.doubleclickme=page.getByRole('button',{name:'Double click me'});
        this.rightclickme=page.getByRole('button',{name:'right click me'});
        this.clickme=page.getByRole('button',{ name: 'Click Me', exact: true });
        this.clickmemessage=page.locator('[id="dynamicClickMessage"]')
}
public async buttonclick(){
    await expect(this.clickme).toBeVisible()//button should be visisble
    await this.clickme.click()
    await expect(this.clickmemessage).toContainText("You have done a dynamic click")
    await this.doubleclickme.dblclick()
    await this.rightclickme.click({button:"right"})
    
}
}
