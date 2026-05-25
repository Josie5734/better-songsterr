console.log("Better-Songsterr addon loaded");

//close the youtube blocker popup
function closeYTBlockerPopup() {
  document.querySelector("._2e9mvq_popup.w_eHuW_popupRedesign .w_eHuW_continueLink a")?.click(); //check for popup div, click continue button if it exists
}

//delete the banner add
function closeBannerAd() {
  document.getElementById("showroom").remove(); //target banner add section and just delete 
} //avoids the popup that tries to offer the subscription

//run all functions
function runAll() {
  closeYTBlockerPopup();
  closeBannerAd();
}

function startup() {

  //run on startup for things that are already there
  runAll();


  //observer for page change 
  const observer = new MutationObserver(() => {
    runAll();
  });

  //start observer
  observer.observe(document.getElementById("apptab"), {
    childList: true,
    subtree: true
  });
}

//wait for document.body to exist before startup
if (document.body) {
  startup();
} else {
  window.addEventListener("DOMContentLoaded", startup);
}

