import { Page,Locator } from "@playwright/test";
export class Accountcreation{
    page:Page
    firstname:Locator
    lastname:Locator
    email:Locator
    gendermale:Locator
    genderfemale:Locator
    genderother:Locator
    mobile:Locator
    dob:Locator
    subjects:Locator
    hobbiessports:Locator
    hobbiesreading:Locator
    hobbiesmusic:Locator
    picture:Locator
    currentaddress:Locator
    state:Locator
    city:Locator
    submit:Locator

    constructor(page:Page){
        this.page=page;
        this.firstname=page.locator('[id="firstName"]')
        this.lastname=page.locator('[id="lastName"]')
        this.email=page.locator('[id="userEmail"]')
        this.gendermale=page.locator('[id="gender-radio-1"]')
        this.genderfemale = page.locator('[id="gender-radio-2"]');
        this.genderother = page.locator('[id="gender-radio-3"]');
        this.mobile=page.locator('[placeholder="Mobile Number"]')
       this.dob=page.locator ('[id="dateOfBirthInput"]')
      this.subjects=page.locator('[class="subjects-auto-complete__value-container subjects-auto-complete__value-container--is-multi css-1hwfws3"]')
      this.hobbiessports=page.locator('[id="hobbies-checkbox-1"]')
      this.hobbiesreading=page.locator('[id="hobbies-checkbox-2"]')
      this.hobbiesmusic=page.locator('[id="hobbies-checkbox-3"]')
      this.picture=page.locator('[id="uploadPicture"]')
      this.currentaddress=page.locator('[placeholder="Current Address"]')
      this.city=page.locator('[id="city"]')
      this.state=page.locator('[id="state"]')
      this.submit=page.locator('[id="submit"]')

    }
}