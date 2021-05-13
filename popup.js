let selectedColor = document.getElementById('colorInputId')
selectedColor.addEventListener('input', function setColor() {
    selectedColorValue = selectedColor.value
    let params = {
        active: true,
        currentWindow: true
    }
    chrome.tabs.query(params, gotTabs);
    function gotTabs(tabs) {
        let message = selectedColorValue;
        let msg = {
            colTxt: message
        };
        chrome.tabs.sendMessage(tabs[0].id, msg);
    }
})
