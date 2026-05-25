//feature toggle buttons
const YTBlocker = document.getElementById("toggleYTBlockerBtn");
const bannerBlocker = document.getElementById("toggleBannerBtn");

//load saved settings
async function loadSettings() {
  const settings = await browser.storage.local.get([
    "YTBlocker",
    "bannerBlocker"
  ]);

  YTBlocker.checked = settings.YTBlocker ?? true;
  bannerBlocker.checked = settings.bannerBlocker ?? true;
}

//settings changed event listeners
YTBlocker.addEventListener("change", () => {
  browser.storage.local.set({
    YTBlocker: YTBlocker.checked
  });
});

bannerBlocker.addEventListener("change", () => {
  browser.storage.local.set({
    bannerBlocker: bannerBlocker.checked
  });
});


loadSettings();
