import { focuscardsPage } from '../../Pages/focuscards.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
let focuscards: focuscardsPage
focuscards = new focuscardsPage();
let taskPg: tasksPage
taskPg = new tasksPage();
describe('Focuscards Tasks Creation', () => {
it('Verify tasks by performing click action on every class', () => {
    taskPg.ClickAllclasses();
 });
 it('Verify the tab click for Subject tabs', () => {
    taskPg.ClickAllsubjects(); 
  }); 
it('Create task flow check for focuscards task', () => {
    focuscards.createfocuscardsTask();
});
// it('Create task flow check for multiple focuscards task', () => {
//   focuscards.createmultiplefocuscards();
// });
// it('Check focus cards can be deleted', () => {
//   focuscards.Addanddeletefocuscards();
// });
})