console.log("Better-Songsterr addon loaded");

//close the youtube blocker popup
async function closeYTBlockerPopup() {
  const settings = await browser.storage.local.get("YTBlocker"); //get settings state

  //exit if set to false
  if (settings.YTBlocker === false) {
    return;
  }

  setTimeout(() => {

    document.querySelector("._2e9mvq_popup.w_eHuW_popupRedesign .w_eHuW_continueLink a")?.click(); //check for popup div, click continue button if it exists
  }, 200);
}

//delete the banner add
async function closeBannerAd() {
  const settings = await browser.storage.local.get("bannerBlocker");

  //exit if set to false
  if (settings.bannerBlocker === false) {
    return;
  }


  const banner = document.getElementById("showroom"); //get the entire banner ad section
  if (banner) { //if got it
    banner.style.display = "none";
  }
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

