"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const browser_utils_1 = require("../utils/browser.utils");
const dataprovider_1 = require("../TestData/dataprovider");
class kitDetails {
    Kitcreationlink() {
        return protractor_1.element(protractor_1.by.xpath("//div[@ng-reflect-router-link][contains(text(),'Kit Creation')]"));
    }
    CreatKitbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Create New Item')]"));
    }
    Classdropdown() {
        return protractor_1.element(protractor_1.by.xpath("//option[contains(text(),'Class 3')]"));
    }
    logoname() {
        return protractor_1.element(protractor_1.by.xpath("//input[@formcontrolname='logoName']"));
    }
    itemname() {
        return protractor_1.element(protractor_1.by.xpath("//input[@formcontrolname='itemName']"));
    }
    noofitems() {
        return protractor_1.element(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"));
    }
    addbtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Add +')]"));
    }
    savebtn() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Save')]"));
    }
    noncardstab() {
        return protractor_1.element(protractor_1.by.xpath("//div[contains(text(),'Non Cards')]"));
    }
    Aids() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'3D Aids')]"));
    }
    Ladder() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Ladders')]"));
    }
    Others() {
        return protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Others')]"));
    }
    Createcards() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[@ng-reflect-router-link][contains(text(),'Kit Creation')]"));
                this.Kitcreationlink().click();
                protractor_1.browser.sleep(2000);
                var Classselection = protractor_1.by.xpath("//option[contains(text(),'" + record["Class"] + "')]");
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.clickOnElement(Classselection);
                protractor_1.browser.sleep(1000);
                var subjectselection = protractor_1.by.xpath("//span[contains(text(),'" + record["Subject"] + "')]");
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.clickOnElement(subjectselection);
                protractor_1.browser.sleep(1000);
                this.CreatKitbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='logoName']"), record["logoname"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["itemname"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["noofitems"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//span[contains(text(),'Save')]"));
                this.savebtn().click();
                var checkkit = protractor_1.element(protractor_1.by.xpath("//td/mat-expansion-panel//span/mat-panel-title[contains(text(),'" + record["logoname"] + "')]"));
                checkkit.isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Task is created successfully');
                });
            });
        }
    }
    CreateAidsnoncards() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[@ng-reflect-router-link][contains(text(),'Kit Creation')]"));
                this.Kitcreationlink().click();
                protractor_1.browser.sleep(2000);
                this.noncardstab().click();
                protractor_1.browser.sleep(2000);
                var Classselection = protractor_1.by.xpath("//option[contains(text(),'" + record["Class"] + "')]");
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.clickOnElement(Classselection);
                protractor_1.browser.sleep(1000);
                var subjectselection = protractor_1.by.xpath("//span[contains(text(),'" + record["Subject"] + "')]");
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.clickOnElement(subjectselection);
                protractor_1.browser.sleep(1000);
                this.Aids().click();
                protractor_1.browser.sleep(1000);
                this.CreatKitbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Aidsitemname"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Aidsnoofitems"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                this.savebtn().click();
            });
        }
    }
    CreateLaddernoncards() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[@ng-reflect-router-link][contains(text(),'Kit Creation')]"));
                this.Kitcreationlink().click();
                protractor_1.browser.sleep(2000);
                this.noncardstab().click();
                protractor_1.browser.sleep(2000);
                var Classselection = protractor_1.by.xpath("//option[contains(text(),'" + record["Class"] + "')]");
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.clickOnElement(Classselection);
                protractor_1.browser.sleep(1000);
                var subjectselection = protractor_1.by.xpath("//span[contains(text(),'" + record["Subject"] + "')]");
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.clickOnElement(subjectselection);
                protractor_1.browser.sleep(1000);
                this.Ladder().click();
                protractor_1.browser.sleep(1000);
                this.CreatKitbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Ladderitemname"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Laddernoofitems"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                this.savebtn().click();
            });
        }
    }
    CreateOthersnoncards() {
        protractor_1.browser.ignoreSynchronization = true;
        var dataRecs = dataprovider_1.dataProvider.getJsonDataFromFile('./TestData/KitData/EnglishData.json', null);
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                protractor_1.browser.sleep(5000);
                browser_utils_1.BrowserUtils.scrollIntoView(protractor_1.by.xpath("//div[@ng-reflect-router-link][contains(text(),'Kit Creation')]"));
                this.Kitcreationlink().click();
                protractor_1.browser.sleep(2000);
                this.noncardstab().click();
                protractor_1.browser.sleep(2000);
                var Classselection = protractor_1.by.xpath("//option[contains(text(),'" + record["Class"] + "')]");
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.clickOnElement(Classselection);
                protractor_1.browser.sleep(1000);
                var subjectselection = protractor_1.by.xpath("//span[contains(text(),'" + record["Subject"] + "')]");
                protractor_1.browser.sleep(2000);
                browser_utils_1.BrowserUtils.clickOnElement(subjectselection);
                protractor_1.browser.sleep(1000);
                this.Others().click();
                protractor_1.browser.sleep(1000);
                this.CreatKitbtn().click();
                protractor_1.browser.sleep(1000);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='itemName']"), record["Othersitemname"]);
                browser_utils_1.BrowserUtils.enterText(protractor_1.by.xpath("//input[@formcontrolname='noOfItems']"), record["Othersnoofitems"]);
                this.addbtn().click();
                protractor_1.browser.sleep(1000);
                this.savebtn().click();
            });
        }
    }
}
exports.kitDetails = kitDetails;
