import { browser, element, by, ExpectedConditions } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider'
export class kitDetails {

    Kitcreationlink() {
        return element(by.xpath("//div[@ng-reflect-router-link][contains(text(),'Kit Creation')]"));
    }
    CreatKitbtn() {
        return element(by.xpath("//span[contains(text(),'Create New Item')]"));
    }
    Classdropdown() {//div[@_ngcontent-kms-c23]//span[@class='select-class']/../span/select
        return element(by.xpath("//option[contains(text(),'Class 3')]"));
    }
    logoname() {
        return element(by.xpath("//input[@formcontrolname='logoName']"));
    }
    itemname() {
        return element(by.xpath("//input[@formcontrolname='itemName']"));
    }
    noofitems() {
        return element(by.xpath("//input[@formcontrolname='noOfItems']"));
    }
    addbtn() {
        return element(by.xpath("//span[contains(text(),'Add +')]"));
    }
    savebtn() {
        return element(by.xpath("//span[contains(text(),'Save')]"));
    }
    noncardstab(){
        return element(by.xpath("//div[contains(text(),'Non Cards')]"));
    }
    Aids(){
        return element(by.xpath("//span[contains(text(),'3D Aids')]"));
    }
    Ladder(){
        return element(by.xpath("//span[contains(text(),'Ladders')]"));
    }
    Others(){
        return element(by.xpath("//span[contains(text(),'Others')]"));
    }
    Createcards() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//div[@ng-reflect-router-link][contains(text(),'Kit Creation')]"));
                this.Kitcreationlink().click();
                browser.sleep(2000);
                var Classselection = by.xpath("//option[contains(text(),'" + record["Class"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(Classselection);
                browser.sleep(1000);
                var subjectselection = by.xpath("//span[contains(text(),'" + record["Subject"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1000);
                this.CreatKitbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='logoName']"), record["logoname"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["itemname"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems"]);
           this.addbtn().click();
           browser.sleep(1000);
           BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Save')]"));
           this.savebtn().click();
           var checkkit = element(by.xpath("//td/mat-expansion-panel//span/mat-panel-title[contains(text(),'" + record["logoname"] + "')]")); 
           checkkit.isDisplayed().then(function (dis) {
            expect(dis).toBe(true, 'Task is created successfully')
         })
            })
        }

    }
    CreateAidsnoncards() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//div[@ng-reflect-router-link][contains(text(),'Kit Creation')]"));
                this.Kitcreationlink().click();
                browser.sleep(2000);
                this.noncardstab().click();
                browser.sleep(2000);
                var Classselection = by.xpath("//option[contains(text(),'" + record["Class"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(Classselection);
                browser.sleep(1000);
                var subjectselection = by.xpath("//span[contains(text(),'" + record["Subject"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1000);
                this.Aids().click();
                browser.sleep(1000);
                this.CreatKitbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems"]);
                this.addbtn().click();
                browser.sleep(1000);
                this.savebtn().click();
            })
        }
    }
    CreateLaddernoncards() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//div[@ng-reflect-router-link][contains(text(),'Kit Creation')]"));
                this.Kitcreationlink().click();
                browser.sleep(2000);
                this.noncardstab().click();
                browser.sleep(2000);
                var Classselection = by.xpath("//option[contains(text(),'" + record["Class"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(Classselection);
                browser.sleep(1000);
                var subjectselection = by.xpath("//span[contains(text(),'" + record["Subject"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1000);
                this.Ladder().click();
                browser.sleep(1000);
                this.CreatKitbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems"]);
                this.addbtn().click();
                browser.sleep(1000);
                this.savebtn().click();
            })
        }
    }
    CreateOthersnoncards() {
        browser.ignoreSynchronization = true
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.sleep(5000);
                BrowserUtils.scrollIntoView(by.xpath("//div[@ng-reflect-router-link][contains(text(),'Kit Creation')]"));
                this.Kitcreationlink().click();
                browser.sleep(2000);
                this.noncardstab().click();
                browser.sleep(2000);
                var Classselection = by.xpath("//option[contains(text(),'" + record["Class"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(Classselection);
                browser.sleep(1000);
                var subjectselection = by.xpath("//span[contains(text(),'" + record["Subject"] + "')]");
                browser.sleep(2000);
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1000);
                this.Others().click();
                browser.sleep(1000);
                this.CreatKitbtn().click();
                browser.sleep(1000);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname"]);
                BrowserUtils.enterText(by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems"]);
                this.addbtn().click();
                browser.sleep(1000);
                this.savebtn().click();
            })
        }
    }
}