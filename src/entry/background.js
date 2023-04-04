chrome.action.onClicked.addListener(function (tab) {
  console.log("ok");
  var url = chrome.runtime.getURL("options.html");
  console.log(url);
  chrome.tabs.create({ url: url, active: true });
});
