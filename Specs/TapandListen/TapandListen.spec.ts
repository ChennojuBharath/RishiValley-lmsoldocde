import { tapandlistenPage } from '../../Pages/tapandlisten.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
let Tapandlisten: tapandlistenPage
Tapandlisten = new tapandlistenPage();
let taskPg: tasksPage
taskPg = new tasksPage();
describe('Tap and Listen task Creation Page', () => {

    it('Verify tasks by performing click action on every class', () => {
        taskPg.ClickAllclasses();
    });
    it('Verify the tab click for Subject tabs', () => {
        taskPg.ClickAllsubjects();
    });
    it('Create Tap and Listen task with Text with audio', () => {
        Tapandlisten.createTapandlistenTaskwithText();
    });
     it('Create Tap and Listen task picture with audio', () => {
        Tapandlisten.createTapandlistenTaskwithpicture();
    });
    it('Create Tap and Listen task with Picture and Text with audio', () => {
        Tapandlisten.createTapandlistenTaskwithPictureandText();
    });
    it('To Search data in list of tasks', () => {
        Tapandlisten.SearchTaskfromlist();
    });
    it('Closing the task popup using cancel button', () => {
        Tapandlisten.CancelTask();
    });
    it('Check for the content type search', () => {
        Tapandlisten.Contenttypesearch();
    });
    it('Check the task preview page breadcrumbs are working', () => {
        Tapandlisten.Previewcancelicon();
    });
    it('Check the task preview page back button', () => {
        Tapandlisten.Previewbackbutton();
    });
    it('Check the task publish page breadcrumbs are working', () => {
        Tapandlisten. Publishcancelicon();
    });
    it('Check the task publish page back button', () => {
        Tapandlisten.Publishbackbutton();
   })
})