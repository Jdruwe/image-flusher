const ID_BUTTON_REDIRECT = "aem-chrome-tools-crx-redirect";
let toolbar;
let observer;

function initializeComponentRedirect() {
    findToolbar();
    setupToolbarObserver();
}

function findToolbar() {
    toolbar = document.getElementById("EditableToolbar");
}

function setupToolbarObserver() {
    observer = new MutationObserver(handleMutations);
    observer.observe(toolbar, {
        attributes: true
    });
}

function handleMutations() {
    if (!redirectButtonExists()) {
        addRedirectButtonToToolbar();
    }
}

function addRedirectButtonToToolbar() {
    const lastButton = getLastToolbarButton();
    if (lastButton) {
        const path = lastButton.getAttribute("data-path");
        const redirectButton = createRedirectButton();
        setRedirectListener(redirectButton, path);
        toolbar.appendChild(redirectButton);
    }
}

function getLastToolbarButton() {
    return toolbar.lastElementChild;
}

function redirectButtonExists() {
    return document.getElementById(ID_BUTTON_REDIRECT);
}

function createRedirectButton() {
    const actionButton = document.createElement("button");
    actionButton.className = "coral-Button coral-Button--quiet cq-editable-action";
    actionButton.setAttribute("id", ID_BUTTON_REDIRECT);
    actionButton.setAttribute("title", "CRX");
    actionButton.setAttribute("type", "button");

    const icon = document.createElement("coral-icon");
    icon.className = "coral-Icon--actions coral-Icon coral-Icon--sizeS";
    icon.setAttribute("aria-label", "actions");

    actionButton.appendChild(icon);
    return actionButton;
}

function setRedirectListener(redirectButton, path) {
    redirectButton.addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        window.open(`${location.protocol + '//' + location.host}/crx/de/index.jsp#${path.replace(":", "%3A")}`);
    });
}

initializeComponentRedirect();
