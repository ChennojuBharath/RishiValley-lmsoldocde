import { rearrangingPage } from '../../Pages/rearranging.po';
import { sortingPage } from '../../Pages/sorting.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
let Rearranging: rearrangingPage
Rearranging = new rearrangingPage();
let taskPg: tasksPage
taskPg = new tasksPage();
let Sorting: sortingPage
Sorting = new sortingPage();
describe('Rearranging Tasks Creation', () => {
it('Verify tasks by performing click action on every class', () => {
    taskPg.ClickAllclasses();
});
it('Verify the tab click for Subject tabs', () => {
    taskPg.ClickAllsubjects();
});
it('Create Rearranging task with Images', () => {
    Rearranging.createRearrangingTaskwithImages();
});
it('Create Rearranging task with Text', () => {
    Rearranging.createRearrangingTaskwithText();
});
it('Update Rearranging task using link', () => {
    Rearranging.UpdateRearrangingtask();
});
it('Verify Delete Rearranging task functionality', () => {
    Rearranging.DeleteRearrangingtask();
});
it('Verify Delete options is working in Create page', () => {
    Rearranging.Deleteoptions();
});
it('Check Preview page back button', () => {
    Rearranging.Previewbackbutton();
});
it('Check Publish page back button', () => {
    Rearranging.Publishbackbutton();
});
it('Check Create page cancel icon is working', () => {
    Rearranging.Createcancelicon();
});
it('Check Create page cancel button is working', () => {
    Rearranging.Createcancelbutton();
});
it('Check Preview page cancel icon is working', () => {
    Rearranging.Previewcancelicon();
});
it('Check Publish page cancel icon is working', () => {
    Rearranging.Publishcancelicon();
});
})