import { Page,Locator } from "@playwright/test";
export class Draganddrop{
    page:Page
    dragme:Locator
    drophere:Locator

    constructor(page:Page){
        this.page=page;
        this.dragme=page.getByText('Drag me',{exact:true})
        this.drophere=page.locator('[id="simpleDropContainer"] [id="droppable"]')
    }
    public async draganddrop(){
        const source= this.dragme
        const destination= this.drophere
        await source.dragTo(destination);

    }

    

    
}