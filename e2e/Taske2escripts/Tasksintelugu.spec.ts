import { fillintheblanksPage } from '../../Pages/fillintheblanks.po';
import { rearrangingPage } from '../../Pages/rearranging.po';
import { trueorfalsePage } from '../../Pages/trueorfalse.po';
import { tasksPage } from '../../Pages/multiplechoicePage.po';
import { sortingPage } from '../../Pages/sorting.po';
import { tapandlistenPage } from '../../Pages/tapandlisten.po';
import { matchtheFollowingPage } from '../../Pages/matchtheFollowing.po';
let fillintheblanks: fillintheblanksPage
fillintheblanks = new fillintheblanksPage();
let Rearranging: rearrangingPage
Rearranging = new rearrangingPage();
let trueorfalsePg: trueorfalsePage
trueorfalsePg = new trueorfalsePage();
let taskPg: tasksPage
taskPg = new tasksPage();
let Sorting: sortingPage
Sorting = new sortingPage();
let Tapandlisten: tapandlistenPage
Tapandlisten = new tapandlistenPage();
let matchtheFollowing: matchtheFollowingPage
matchtheFollowing = new matchtheFollowingPage()
describe('Run the LMS scripts end to end', () => {
  it('Verify tasks by performing click action on every class', () => {
    taskPg.ClickAllclasses();
  });
  it('Create fill in the blanks task with telugu subject', () => {
    fillintheblanks.Fibtaskwithtelugudata();
  })
  it('Create Rearranging task with Images with telugu subject', () => {
    Rearranging.createRearrangingTaskwithImagestelugu();
  });
  it('Create Rearranging task with Text with telugu subject', () => {
    Rearranging.createRearrangingTaskwithTexttelugu();
  });
  it('Check for the task with text can be created with telugu subject', () => {
    trueorfalsePg.createTrueorfalsetaskwithtexttelugu();
  });
  it('Check for the task with pictureandtext can be created with telugu subject', () => {
    trueorfalsePg.createTrueorfalsetaskwithpictureandtexttelugu();
  });
  it('Create task flow check for TapingMCQ with Text to Text', () => {
    taskPg.createTappingMCQTasktelugu();
  });
  it('Create Sorting task with Text with telugu subject', () => {
    Sorting.createTextSortingTaskenglish();
  });
  it('Create Sorting task with Image with telugu subject', () => {
    Sorting.createImageSortingTaskenglish();
  });
  it('Create Tap and Listen task with Text with audio with telugu subject', () => {
    Tapandlisten.createTapandlistenTaskwithTexttelugu();
  });
  it('Create Tap and Listen task picture with audio with telugu subject', () => {
    Tapandlisten.createTapandlistenTaskwithpicture();
  });
  it('Create Tap and Listen task with Picture and Text with audio with telugu subject', () => {
    Tapandlisten.createTapandlistenTaskwithPictureandTexttelugu();
  });
  it('Create task flow check for Matchthefollowing for Image to Image selection with telugu subject', () => {
    matchtheFollowing.createMatchthefollowingImagetoImageTask();
  });
  it('Create task flow check for Matchthefollowing for Text to Image selection with telugu subject', () => {
    matchtheFollowing.createMatchthefollowingTexttoImageTasktelugu();
  });
  it('Create task flow check for Matchthefollowing for Text to Text selection with telugu subject', () => {
    matchtheFollowing.createMatchthefollowingTexttoTextTasktelugu();
  });
  it('Create task flow check for Matchthefollowing for Image to Text selection with telugu subject', () => {
    matchtheFollowing.createMatchthefollowingImagetoTextTasktelugu();
  });
})