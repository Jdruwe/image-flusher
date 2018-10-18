chrome.runtime.onInstalled.addListener(function () {
    setInitialData();
    notify("Installation successful, please fill in the options.");
});

function setInitialData() {
    chrome.storage.sync.set({
        jenkins: {
            job: "http://jenkins.aws.intranet/view/AEM/job/flushCache"
        },
        config: {
            "prd001": {
                "asadventure": [
                    "https://www.asadventure.com",
                    "https://www.asadventure.nl",
                    "https://www.asadventure.co.uk",
                    "https://www.asadventure.fr",
                    "https://www.asadventure.lu",
                    "https://shop.asadventure.com",
                    "https://shop.asadventure.nl",
                    "https://shop.asadventure.co.uk",
                    "https://shop.asadventure.fr",
                    "https://shop.asadventure.lu",
                    "http://preview.asadventure.com"
                ],
                "juttu": [
                    "https://www.juttu.be",
                    "https://shop.juttu.be",
                    "http://preview.juttu.be"
                ],
                "yaya": [
                    "https://www.yaya.be",
                    "https://shop.yaya.be",
                    "http://preview.yaya.be"
                ],
                "runnersneed": [
                    "https://www.runnersneed.com",
                    "https://shop.runnersneed.com",
                    "http://preview.runnersneed.com"
                ],
                "bever": [
                    "https://www.bever.nl",
                    "https://shop.bever.nl",
                    "http://preview.bever.nl"
                ],
                "cyclesurgery": [
                    "https://www.cyclesurgery.com",
                    "https://shop.cyclesurgery.com",
                    "http://preview.cyclesurgery.com"
                ],
                "snowandrock": [
                    "https://www.snowandrock.com",
                    "https://shop.snowandrock.com",
                    "http://preview.snowandrock.com"
                ],
                "cotswold": [
                    "https://www.cotswoldoutdoor.com",
                    "https://www.cotswoldoutdoor.ie",
                    "https://www.cotswoldoutdoor.us",
                    "https://www.cotswoldoutdoor.com.au",
                    "https://shop.cotswoldoutdoor.com",
                    "https://shop.cotswoldoutdoor.ie",
                    "http://preview.cotswoldoutdoor.com"
                ],
                "mctrek": [
                    "https://www.mctrek.de",
                    "https://shop.mctrek.de"
                ]
            },
            "prp001": {
                "asadventure": [
                    "https://prp-asadventure-fr.foxandcat.eu",
                    "https://prp-asadventure-co-uk.foxandcat.eu",
                    "https://prp-asadventure-lu.foxandcat.eu",
                    "https://prp-asadventure-nl.foxandcat.eu",
                    "https://prp-asadventure-com.foxandcat.eu",
                    "https://prp-shop-asadventure-com.foxandcat.eu",
                    "https://prp-shop-asadventure-fr.foxandcat.eu"
                ],
                "juttu": [
                    "https://prp-juttu-be.foxandcat.eu",
                    "https://prp-shop-juttu-be.foxandcat.eu"
                ],
                "yaya": [
                    "https://prp-yaya-be.foxandcat.eu",
                    "https://prp-shop-yaya-be.foxandcat.eu"
                ],
                "runnersneed": [
                    "https://prp-runnersneed-com.foxandcat.eu",
                    "https://prp-shop-runnersneed-com.foxandcat.eu"
                ],
                "bever": [
                    "https://prp-bever-nl.foxandcat.eu",
                    "https://prp-shop-bever-nl.foxandcat.eu"
                ],
                "cyclesurgery": [
                    "https://prp-cyclesurgery-com.foxandcat.eu",
                    "https://prp-shop-cyclesurgery-com.foxandcat.eu"

                ],
                "snowandrock": [
                    "https://prp-snowandrock-com.foxandcat.eu",
                    "https://prp-shop-snowandrock-com.foxandcat.eu"

                ],
                "cotswold": [
                    "https://prp-cotswoldoutdoor-ie.foxandcat.eu",
                    "https://prp-cotswoldoutdoor-com.foxandcat.eu",
                    "https://prp-shop-cotswoldoutdoor-com.foxandcat.eu",
                    "https://prp-shop-cotswoldoutdoor-ie.foxandcat.eu"

                ],
                "mctrek": [
                    "https://prp-mctrek-de.foxandcat.eu",
                    "https://prp-shop-mctrek-de.foxandcat.eu"
                ]
            },
            "acc001": {
                "asadventure": [
                    "https://acc-asadventure-fr.foxandcat.eu",
                    "https://acc-asadventure-co-uk.foxandcat.eu",
                    "https://acc-asadventure-lu.foxandcat.eu",
                    "https://acc-asadventure-nl.foxandcat.eu",
                    "https://acc-asadventure-com.foxandcat.eu",
                    "https://acc-shop-asadventure-fr.foxandcat.eu",
                    "https://acc-shop-asadventure-com.foxandcat.eu"
                ],
                "juttu": [
                    "https://acc-juttu-be.foxandcat.eu",
                    "https://acc-shop-juttu-be.foxandcat.eu"
                ],
                "yaya": [
                    "https://acc-yaya-be.foxandcat.eu",
                    "https://acc-shop-yaya-be.foxandcat.eu"
                ],
                "runnersneed": [
                    "https://acc-runnersneed-com.foxandcat.eu",
                    "https://acc-shop-runnersneed-com.foxandcat.eu"
                ],
                "bever": [
                    "https://acc-bever-nl.foxandcat.eu",
                    "https://acc-shop-bever-nl.foxandcat.eu"
                ],
                "cyclesurgery": [
                    "https://acc-cyclesurgery-com.foxandcat.eu",
                    "https://acc-shop-cyclesurgery-com.foxandcat.eu"
                ],
                "snowandrock": [
                    "https://acc-snowandrock-com.foxandcat.eu",
                    "https://acc-shop-snowandrock-com.foxandcat.eu"
                ],
                "cotswold": [
                    "https://acc-cotswoldoutdoor-ie.foxandcat.eu",
                    "https://acc-cotswoldoutdoor-com.foxandcat.eu",
                    "https://acc-shop-cotswoldoutdoor-ie.foxandcat.eu",
                    "https://acc-shop-cotswoldoutdoor-com.foxandcat.eu"
                ],
                "mctrek": [
                    "https://acc-mctrek-de.foxandcat.eu",
                    "https://acc-shop-mctrek-de.foxandcat.eu"
                ]
            },
            "tst001": {
                "asadventure": [
                    "https://tst-asadventure-nl.foxandcat.eu",
                    "https://tst-asadventure-com.foxandcat.eu"
                ],
                "juttu": [
                    "https://tst-juttu-be.foxandcat.eu"
                ],
                "yaya": [
                    "https://tst-yaya-be.foxandcat.eu"
                ],
                "runnersneed": [
                    "https://tst-runnersneed-com.foxandcat.eu"
                ],
                "bever": [
                    "https://tst-bever-nl.foxandcat.eu"
                ],
                "cyclesurgery": [
                    "https://tst-cyclesurgery-com.foxandcat.eu"
                ],
                "snowandrock": [
                    "https://tst-snowandrock-com.foxandcat.eu"
                ],
                "cotswold": [
                    "https://tst-cotswoldoutdoor-com.foxandcat.eu"
                ],
                "mctrek": [
                    "https://tst-mctrek-de.foxandcat.eu"
                ]
            }
        }
    });
}

chrome.contextMenus.create({
    id: "flush-image",
    title: "Flush Image",
    contexts: ["image"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (isFlushImageItemClicked(info)) {
        flushImage(info, tab);
    }
});

function isFlushImageItemClicked(info) {
    return info.menuItemId === "flush-image";
}

function flushImage(info, tab) {
    const match = matchToBeFlushedImage(info);
    if (isValidMatch(match)) {
        const url = new URL(tab.url);
        prepareImageFlush(url, match);
    } else {
        notify("You can't flush this image.")
    }
}

function isValidMatch(match) {
    return (match != null) && (typeof match[1] !== "undefined");
}

function matchToBeFlushedImage(info) {
    const pattern = ".*(\/content\/dam\/.*?.(jpeg|jpg|png|gif)).*";
    return info.srcUrl.match(pattern);
}

function prepareImageFlush(url, matchedImage) {
    chrome.storage.sync.get(["jenkins", "config"], function (data) {
        const environment = getEnvironment(url);
        const fascia = getFascia(url);
        if (environment && fascia) {
            const domains = getDomains(environment, fascia, data.config);
            const flushUrl = buildFlushUrl(domains, matchedImage);
            executeFlushJob(data.jenkins, environment, flushUrl);
        } else {
            notify("Could not retrieve the environment or fascia from the image.");
        }
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

function getEnvironment(url) {
    if (url.hostname.startsWith("tst-")) {
        return "tst001";
    }

    if (url.hostname.startsWith("acc-")) {
        return "acc001";
    }

    if (url.hostname.startsWith("prp-")) {
        return "prp001";
    }

    if (url.hostname.startsWith("www.")) {
        return "prd001";
    }
}

function getFascia(url) {
    const fascias = ["asadventure", "bever", "cotswold", "cyclesurgery", "juttu", "mctrek", "runnersneed", "snowandrock", "yaya"];
    for (let i = 0; i < fascias.length; i++) {
        if (isFascia(url, fascias[i])) {
            return fascias[i];
        }
    }
}

function isFascia(url, fascia) {
    return containsText(url.hostname, fascia);
}

function containsText(context, text) {
    return context.indexOf(text) !== -1;
}

function getDomains(environment, fascia, config) {
    if (environment && fascia) {
        const envConfig = config[environment];
        return envConfig[fascia];
    }
}

function buildFlushUrl(domains, matchedImage) {
    return domains
        .map(domain => `${domain}${matchedImage[1]}`)
        .join("|");
}

function executeFlushJob(jenkinsInfo, environment, flushUrl) {
    let flushRequest = buildFlushRequest(jenkinsInfo);
    flushRequest.onreadystatechange = () => handleFlushStateChange(flushRequest.readyState, flushRequest.status);
    flushRequest.send(`delay=0sec&environment=${environment}&url=${flushUrl}`);
}

function buildFlushRequest(jenkinsInfo) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", `${jenkinsInfo.job}/buildWithParameters`, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Authorization", "Basic " + btoa(jenkinsInfo.username + ":" + jenkinsInfo.password));
    return xhr;
}

function handleFlushStateChange(readyState, status) {
    if (readyState === XMLHttpRequest.DONE && status === 201) {
        notify("Image flush job called successfully.");
        playFlushSound();
    } else if (readyState === XMLHttpRequest.DONE && status === 401) {
        notify("Jenkins authentication error, please check your credentials in the options.");
    } else if (readyState === XMLHttpRequest.DONE) {
        notify("Something went wrong, please contact Jeroen at druwe.jeroen@gmail.com.");
    }
}

function playFlushSound() {
    const myAudio = new Audio();
    myAudio.src = chrome.extension.getURL("assets/music/flush.mp3");
    myAudio.play();
}