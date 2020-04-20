import { matchtheFollowingPage } from '../../Pages/matchtheFollowing.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
let matchtheFollowing: matchtheFollowingPage
matchtheFollowing = new matchtheFollowingPage();
let taskPg: tasksPage
taskPg = new tasksPage();
describe('MatchtheFollowing Tasks Creation', () => {
it('Verify tasks by performing click action on every class', () => {
    taskPg.ClickAllclasses();
 });
it('Verify the tab click for Subject tabs', () => {
    taskPg.ClickAllsubjects(); 
  }); 
it('Create task flow check for Matchthefollowing for Image to Image selection', () => {
    matchtheFollowing.createMatchthefollowingImagetoImageTask();
});
it('Create task flow check for Matchthefollowing for Text to Image selection', () => {
    matchtheFollowing.createMatchthefollowingTexttoImageTask();
});
it('Create task flow check for Matchthefollowing for Text to Text selection', () => {
    matchtheFollowing.createMatchthefollowingTexttoTextTask();
});
it('Create task flow check for Matchthefollowing for Image to Text selection', () => {
    matchtheFollowing.createMatchthefollowingImagetoTextTask();
});
it('Verify Add options button is working', () => {
    matchtheFollowing.Addoptions();
});
it('Verify Options can be deleted', () => {
    matchtheFollowing.Deleteoptions();
});
it('To Search data in list of tasks', () => {
    matchtheFollowing.SearchTaskfromlist();
});
it('Closing the task popup using cancel button', () => {
    matchtheFollowing.CancelTask();
});
it('Check for the content type search', () => {
    matchtheFollowing.Contenttypesearch();
});
it('Check the task preview page breadcrumbs are working', () => {
    matchtheFollowing.Previewcancelicon();
});
it('Check the task preview page back button', () => {
    matchtheFollowing.Previewbackbutton();
});
it('Check the task publish page breadcrumbs are working', () => {
    matchtheFollowing. Publishcancelicon();
});
it('Check the task publish page back button', () => {
    matchtheFollowing.Publishbackbutton();
})

})
