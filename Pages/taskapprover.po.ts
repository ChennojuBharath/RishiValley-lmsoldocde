import { browser, by, element, Key, WebElement, $ } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider';
export class Approverview {
    keycloakusername() {
        return element(by.xpath("//input[@id='username']"));
    }
    keycloakpassword() {
        return element(by.xpath("//input[@id='password']"));
    }
    keycloakloginbtn() {
        return element(by.xpath("//input[@name='login']"));
    }
    Telugu() {
        return element(by.xpath("//span[text()='TELUGU']"))
    }
    tasklistPanelElement() {
        return element(by.xpath("//mat-panel-title[text()=' Tasks ']"));
    }
    Class1() {
        return element(by.xpath("//mat-list-item[@ng-reflect-router-link='/task/task-list']//div[text()='Class 1 ']"));
    }
    clickOnClassLinks() {
        return by.xpath('//mat-panel-title[text()=" Tasks "]/../../following-sibling::div//mat-list-item');
    }
    commentbutton() {
        return element(by.xpath("//span[contains(text(),'Add Comment')]"))
    }
    Commentcancelbtn() {
        return element(by.xpath("//span[contains(text(),'CANCEL')]"));
    }
    Commentsavebtn() {
        return element(by.xpath("//span[contains(text(),'SAVE')]"));
    }
    Approverbtn() {
        return element(by.xpath("//span[contains(text(),'Approve')]"));
    }
    Commentsediticon() {
        return element(by.xpath("//img[@src='assets/images/Union.svg']"));
    }
    Commentsdeleteicon() {
        return element(by.xpath("//img[@src='assets/images/delete.svg']"));
    }
    successmsgokbtn() {
        return element(by.xpath("//span[contains(text(),'OK')]"));
    }
    Draftbtn() {
        return element(by.xpath("//span[contains(text(),'Draft')]"));
    }
    Conformdraftbtn() {
        return element(by.xpath("//span[contains(text(),'CONFIRM')]"));
    }
    Canceldraftbtn() {
        return element(by.xpath("//span[contains(text(),'CANCEL')]"));
    }
    Previewbackbtn() {
        return element(by.xpath("//span[contains(text(),'Back')]"));
    }
    Rivertext() {
        return element(by.xpath("//span[contains(text(),'RiVER')]"));
    }
    Keycloaklogin() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.enterText(by.xpath("//input[@id='username']"), record["ApproverUsername"]);
                BrowserUtils.enterText(by.xpath("//input[@id='password']"), record["Approverpassword"]);
                this.keycloakloginbtn().click();
                browser.sleep(2000);
            })
        }
    }

    Approvetask() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/ApproverData/ApproverData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var subjectselection = by.xpath("//span[text()='" + record["Subject"] + "']");
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1500);
                BrowserUtils.getTotalElementCount(by.xpath("//a[contains(text(),'" + record["Tasklinksort"] + "')]")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= gettasklinkCount; tasklinkCount++) {
                            var loc = "(//a[contains(text(),'" + record["Tasklinksort"] + "')])[" + tasklinkCount + "]";
                            console.log(loc);
                            BrowserUtils.clickOnElement(subjectselection);
                            browser.sleep(1000);
                            var tasklinkselection = by.xpath(loc);
                            BrowserUtils.clickOnElement(tasklinkselection);
                            browser.sleep(2000);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                            this.commentbutton().click();
                            BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                            browser.sleep(500);
                            this.Commentsavebtn().click();
                            browser.sleep(1500);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Approve')]"));
                            this.Approverbtn().click();
                            browser.sleep(1500);
                            this.successmsgokbtn().click();
                            this.Rivertext().isDisplayed().then(function (dis) {
                                expect(dis).toBe(true, 'Task approve flow is successful')
                            })
                        }
                    }
                    else {
                        console.log("There are no tasks to approve");
                    }

                })

            })
        }

    }
    ClickAllclasses() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/ApproverData/ApproverData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.waitUntilReady(this.Class1());
                browser.sleep(1500);
                BrowserUtils.countAndClick(this.clickOnClassLinks());
                var editiconselection = by.xpath("//mat-list-item[@ng-reflect-router-link='/task/task-list']/div[text()='" + record["Class"] + "']");
                BrowserUtils.clickOnElement(editiconselection);
            })
        }
    }
    Approvetaskswithoutcomments() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/ApproverData/ApproverData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var subjectselection = by.xpath("//span[text()='" + record["Subject"] + "']");
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1500);
                BrowserUtils.getTotalElementCount(by.xpath("//a[contains(text(),'" + record["Tasklinksort"] + "')]")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= 1; tasklinkCount++) {
                            var loc = "(//a[contains(text(),'" + record["Tasklinksort"] + "')])[" + tasklinkCount + "]";
                            console.log(loc);
                            var tasklinkselection = by.xpath(loc);
                            BrowserUtils.clickOnElement(tasklinkselection);
                            browser.sleep(2000);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                            this.commentbutton().click();
                            BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                            browser.sleep(500);
                            this.Commentcancelbtn().click();
                            browser.sleep(1500);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Approve')]"));
                            this.Approverbtn().click();
                            browser.sleep(1500);
                            this.successmsgokbtn().click();
                            this.Rivertext().isDisplayed().then(function (dis) {
                                expect(dis).toBe(true, 'Task can be reviewed without comments')
                            })
                        }
                    }
                    else {
                        console.log("There are no tasks to check comments scenario");
                    }

                })
            })
        }
    }
    conformdraftapprovetasks() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/ApproverData/ApproverData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var subjectselection = by.xpath("//span[text()='" + record["Subject"] + "']");
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1500);
                BrowserUtils.getTotalElementCount(by.xpath("//a[contains(text(),'" + record["Tasklinksort"] + "')]")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= 1; tasklinkCount++) {
                            var loc = "(//a[contains(text(),'" + record["Tasklinksort"] + "')])[" + tasklinkCount + "]";
                            console.log(loc);
                            var tasklinkselection = by.xpath(loc);
                            BrowserUtils.clickOnElement(tasklinkselection);
                            browser.sleep(2000);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                            this.commentbutton().click();
                            BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                            browser.sleep(500);
                            this.Commentsavebtn().click();
                            browser.sleep(1500);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Approve')]"));
                            this.Draftbtn().click();
                            browser.sleep(1500);
                            this.Conformdraftbtn().click();
                            browser.sleep(1500);
                            this.Rivertext().isDisplayed().then(function (dis) {
                                expect(dis).toBe(true, 'Task can be drafted successfully')
                            })
                        }
                    }
                    else {
                        console.log("There are no tasks to draft");
                    }

                })
            })
        }
    }
    canceldraftapprovetasks() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/ApproverData/ApproverData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var subjectselection = by.xpath("//span[text()='" + record["Subject"] + "']");
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1500);
                BrowserUtils.getTotalElementCount(by.xpath("//a[contains(text(),'" + record["Tasklinksort"] + "')]")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= 1; tasklinkCount++) {
                            var loc = "(//a[contains(text(),'" + record["Tasklinksort"] + "')])[" + tasklinkCount + "]";
                            console.log(loc);
                            var tasklinkselection = by.xpath(loc);
                            BrowserUtils.clickOnElement(tasklinkselection);
                            browser.sleep(2000);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                            this.commentbutton().click();
                            BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                            browser.sleep(500);
                            this.Commentsavebtn().click();
                            browser.sleep(1500);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Approve')]"));
                            this.Draftbtn().click();
                            browser.sleep(1500);
                            this.Canceldraftbtn().click();
                            browser.sleep(1500);
                            this.Previewbackbtn().click();
                            browser.sleep(1500);
                            this.Rivertext().isDisplayed().then(function (dis) {
                                expect(dis).toBe(true, 'Draft can be cancelled successful')
                            })
                        }
                    }
                    else {
                        console.log("There are no tasks to check draft operation");
                    }

                })
            })
        }

    }
    editcomments() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/ApproverData/ApproverData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var subjectselection = by.xpath("//span[text()='" + record["Subject"] + "']");
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1500);
                BrowserUtils.getTotalElementCount(by.xpath("//a[contains(text(),'" + record["Tasklinksort"] + "')]")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= 1; tasklinkCount++) {
                            var loc = "(//a[contains(text(),'" + record["Tasklinksort"] + "')])[" + tasklinkCount + "]";
                            console.log(loc);
                            var tasklinkselection = by.xpath(loc);
                            BrowserUtils.clickOnElement(tasklinkselection);
                            browser.sleep(2000);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                            this.commentbutton().click();
                            BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                            browser.sleep(500);
                            this.Commentsavebtn().click();
                            browser.sleep(1500);
                            this.Commentsediticon().click();
                            BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                            browser.sleep(500);
                            this.Commentsavebtn().click();
                            browser.sleep(1500);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Approve')]"));
                            this.Approverbtn().click();
                            browser.sleep(1500);
                            this.successmsgokbtn().click();
                            browser.sleep(1500);
                            this.Rivertext().isDisplayed().then(function (dis) {
                                expect(dis).toBe(true, 'Comments edit is worrking successful')
                            })
                        }
                    }
                    else {
                        console.log("There are no tasks to edit comments");
                    }

                })
            })
        }
    }
    deletecomments() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/ApproverData/ApproverData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                var subjectselection = by.xpath("//span[text()='" + record["Subject"] + "']");
                BrowserUtils.clickOnElement(subjectselection);
                browser.sleep(1500);
                BrowserUtils.getTotalElementCount(by.xpath("//a[contains(text(),'" + record["Tasklinksort"] + "')]")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= 1; tasklinkCount++) {
                            var loc = "(//a[contains(text(),'" + record["Tasklinksort"] + "')])[" + tasklinkCount + "]";
                            console.log(loc);
                            var tasklinkselection = by.xpath(loc);
                            BrowserUtils.clickOnElement(tasklinkselection);
                            browser.sleep(2000);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Add Comment')]"));
                            this.commentbutton().click();
                            BrowserUtils.enterText(by.xpath("//textarea[@ng-reflect-name='commentData']"), record["Comment"]);
                            browser.sleep(500);
                            this.Commentsavebtn().click();
                            browser.sleep(1500);
                            this.Commentsdeleteicon().click();
                            browser.sleep(1500);
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Approve')]"));
                            this.Approverbtn().click();
                            browser.sleep(1500);
                            this.successmsgokbtn().click();
                            this.Rivertext().isDisplayed().then(function (dis) {
                                expect(dis).toBe(true, 'Delete review comment flow is successful')
                            })
                        }
                    }
                    else {
                        console.log("There are no tasks to Delete the comments");
                    }

                })
            })
        }
    }
    deletetasks() {
        browser.ignoreSynchronization = true
        browser.sleep(2000);
        BrowserUtils.getTotalElementCount(by.xpath("//i[text()='delete']")).then((getediticonCount) => {
            console.log("loc is:" + getediticonCount);
            if (getediticonCount) {
                for (let editiconCount = 1; editiconCount <= getediticonCount; editiconCount++) {
                    var loc = "(//i[text()='delete'])[" + editiconCount + "]";
                    console.log(loc);
                    var editiconselection = by.xpath(loc);
                    BrowserUtils.clickOnElement(editiconselection);
                    browser.sleep(2000);
                    this.successmsgokbtn().click();
                    browser.sleep(2000);
                    this.Rivertext().isDisplayed().then(function (dis) {
                        expect(dis).toBe(true, 'Delete tasks  is successful')
                    })
                }
            }
            else {
                console.log("There are no tasks to delete");
            }



        })
    }

}