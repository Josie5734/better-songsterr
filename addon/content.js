console.log("popup addon loaded");

//close the popup
function closePopup() {
  document.querySelector("._2e9mvq_popup.w_eHuW_popupRedesign .w_eHuW_continueLink a")?.click(); //check for popup div, click continue button if it exists
}


function startup() {

  //run on startup incase popup is already there
  closePopup();


  //observer for page change 
  const observer = new MutationObserver(() => {
    closePopup();
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

