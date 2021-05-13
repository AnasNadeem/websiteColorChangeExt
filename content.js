chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    document.body.style.backgroundColor = message.colTxt;
}