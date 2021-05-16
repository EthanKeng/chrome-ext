console.log("bg is running")
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  // The user clicked the button!
  // 'tab' is an object with information about the current open tab
  console.log("clicked!")
  console.log(tab)	
   // Do something!
}
