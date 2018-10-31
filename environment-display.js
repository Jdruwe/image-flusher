function initializeEnvironmentDisplay() {
    fetchData("getAuthoringInformation", function (data) {
        handleAuthoringInformation(data);
    });
}

function fetchData(type, callback) {
    chrome.runtime.sendMessage({type: type}, (response) => {
        callback(response);
    });
}

function handleAuthoringInformation(data) {
    const location = window.location.toString();
    const authoringInfo = data.find(info => location.startsWith(info.url));
    if (authoringInfo) {
        displayEnvironmentInfo(authoringInfo);
    }
}

function displayEnvironmentInfo(authoringInfo) {
    displayAemEnvironmentInfo(authoringInfo);
    displayCrxEnvironmentInfo(authoringInfo);
}

function displayAemEnvironmentInfo(authoringInfo) {
    addStyleString(`
        .coral-Shell-header {
            background-color: ${authoringInfo.color};
        }
    `);
}

function displayCrxEnvironmentInfo(authoringInfo) {
    addStyleString(
        `.crx-switcher.crx-delite {
            background-color: ${authoringInfo.color};
            background-blend-mode: multiply;
        }
    `);
}

function addStyleString(styling) {
    const node = document.createElement('style');
    node.innerHTML = styling;
    document.body.appendChild(node);
}

initializeEnvironmentDisplay();