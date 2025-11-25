import { Page,Locator } from "@playwright/test";
export class Mousehover{
    page:Page
    clickme:Locator
    linkbutton:Locator
constructor(page:Page){
        this.page=page;
        this.clickme=page.getByText('Click me');
        this.linkbutton=page.getByText('Link Button')
}
public async mousehover(){
    await this.clickme.hover()
    await this.page.waitForTimeout(5000)
    await this.linkbutton.hover()
    await this.page.evaluate(()=>{
        window.scrollBy(0,3000)//evaluate- method JS ,pagetitle helps to evaluate pixel value( wise scrolling)
    })
}
public async scrolling(){
  await this.page.evaluate(()=>{
        window.scrollBy(0,3000)
    })  
}
}