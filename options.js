function initializeOptions() {
    displaySavedOptions();
    setListeners();
}

function displaySavedOptions() {
    chrome.storage.sync.get('jenkins', function (data) {
        document.getElementById("job").value = data.jenkins.job;
        if (data.jenkins.username) {
            document.getElementById("username").value = data.jenkins.username;
        }
        if (data.jenkins.password) {
            document.getElementById("password").value = data.jenkins.password;
        }
    });

    chrome.storage.sync.get('config', function (data) {
        if (data.config) {
            document.getElementById("config").value = JSON.stringify(data.config);
        }
    });
}

function setListeners() {
    const saveOptionsButton = document.getElementById("saveOptions");
    saveOptionsButton.addEventListener('click', function () {
        updateOptions();
    });
}

function updateOptions() {
    const storage = {
        jenkins: {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            job: document.getElementById("job").value
        },
        config: JSON.parse(document.getElementById("config").value)
    };

    chrome.storage.sync.set(storage, function () {
        notify("Settings updated")
    });
}

function notify(message) {
    chrome.notifications.create(null, {
        type: "basic",
        iconUrl: "assets/images/icon128.png",
        title: "Image Flusher",
        message: message
    });
}

initializeOptions();
