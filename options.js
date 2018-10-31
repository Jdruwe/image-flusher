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

    chrome.storage.sync.get('environments', function (data) {
        if (data.environments) {
            document.getElementById("environments").value = JSON.stringify(data.environments);
        }
    });

    chrome.storage.sync.get('fascias', function (data) {
        if (data.fascias) {
            document.getElementById("fascias").value = JSON.stringify(data.fascias);
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
        environments: JSON.parse(document.getElementById("environments").value),
        fascias: JSON.parse(document.getElementById("fascias").value)
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
