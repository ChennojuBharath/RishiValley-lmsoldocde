import { browser, by, element, Key, WebElement, $ } from 'protractor';
import { BrowserUtils } from '../utils/browser.utils';
import { dataProvider } from '../TestData/dataprovider';
export class Reviewerview {
    keycloakusername() {
        return element(by.xpath("//input[@id='username']"));
    }
    keycloakpassword() {
        return element(by.xpath("//input[@id='password']"));
    }
    keycloakloginbtn() {
        return element(by.xpath("//input[@name='login']"));
    }
    Tasksearch() {
        return element(by.xpath("//div[@class='head-search-container']"));
    }
    clickOntappingMCQNextBtn() {
        return element(by.xpath("//span[contains(text(),'Next')]"))
    }
    saveMCQ() {
        return element(by.xpath("//span[text()='Save']"))
    }
    acceptSaveTaskPopUp() {
        return element(by.xpath("//button[text()='OK']"))
    }
    Taskcancelbtn() {
        return element(by.xpath("//span[text()='Cancel']"));
    }
    Telugu() {
        return element(by.xpath("//span[text()='TELUGU']"))
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
    SubmitForApproverbtn() {
        return element(by.xpath("//span[contains(text(),'Submit For Approver')]"));
    }
    Draftbtn() {
        return element(by.xpath("//span[contains(text(),'Draft')]"));
    }
    successmsgokbtn() {
        return element(by.xpath("//span[contains(text(),'OK')]"));
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
    Commentsediticon() {
        return element(by.xpath("//img[@src='assets/images/Union.svg']"));
    }
    Commentsdeleteicon() {
        return element(by.xpath("//img[@src='assets/images/delete.svg']"));
    }
    Keycloaklogin() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/CommonData/SubjectData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                BrowserUtils.enterText(by.xpath("//input[@id='username']"), record["ReviewerUsername"]);
                BrowserUtils.enterText(by.xpath("//input[@id='password']"), record["Reviewerpassword"]);
                this.keycloakloginbtn().click();
                browser.sleep(2000);
                this.Rivertext().isDisplayed().then(function (dis) {
                    expect(dis).toBe(true, 'Reviewer login is successful')
                })
            })
        }
    }
    Reviewtasks() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/ReviewData/ReviewData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                BrowserUtils.getTotalElementCount(by.xpath("//a[contains(text(),'" + record["Tasklinksort"] + "')]")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= gettasklinkCount; tasklinkCount++) {
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
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Submit For Approver ')]"));
                            this.SubmitForApproverbtn().click();
                            browser.sleep(1500);
                            this.successmsgokbtn().click();
                            this.Rivertext().isDisplayed().then(function (dis) {
                                expect(dis).toBe(true, 'Task review flow is successful')
                            })
                        }
                    }
                    else {
                        console.log("There are no tasks to review");
                    }

                })
            })
        }
    }
    Reviewtaskswithoutcomments() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/ReviewData/ReviewData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                BrowserUtils.getTotalElementCount(by.xpath("//a[contains(text(),'" + record["Tasklinksort"] + "')]")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= gettasklinkCount; tasklinkCount++) {
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
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Submit For Approver ')]"));
                            this.SubmitForApproverbtn().click();
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
    conformdraftreviewtasks() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/ReviewData/ReviewData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                BrowserUtils.getTotalElementCount(by.xpath("//a[contains(text(),'" + record["Tasklinksort"] + "')]")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= gettasklinkCount; tasklinkCount++) {
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
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Submit For Approver ')]"));
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
    canceldraftreviewtasks() {
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/ReviewData/ReviewData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                BrowserUtils.getTotalElementCount(by.xpath("//a[contains(text(),'" + record["Tasklinksort"] + "')]")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= gettasklinkCount; tasklinkCount++) {
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
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Submit For Approver ')]"));
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
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/ReviewData/ReviewData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                BrowserUtils.getTotalElementCount(by.xpath("//a[contains(text(),'" + record["Tasklinksort"] + "')]")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= gettasklinkCount; tasklinkCount++) {
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
                BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Submit For Approver ')]"));
                this.SubmitForApproverbtn().click();
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
        var dataRecs = dataProvider.getJsonDataFromFile('./TestData/ReviewData/ReviewData.json', null)
        if (dataRecs && dataRecs.length > 0) {
            dataRecs.forEach(record => {
                browser.ignoreSynchronization = true
                BrowserUtils.getTotalElementCount(by.xpath("//a[contains(text(),'" + record["Tasklinksort"] + "')]")).then((gettasklinkCount) => {
                    console.log("loc is:" + gettasklinkCount);
                    if (gettasklinkCount) {
                        for (let tasklinkCount = 1; tasklinkCount <= gettasklinkCount; tasklinkCount++) {
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
                            BrowserUtils.scrollIntoView(by.xpath("//span[contains(text(),'Submit For Approver ')]"));
                            this.SubmitForApproverbtn().click();
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