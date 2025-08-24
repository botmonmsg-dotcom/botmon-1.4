const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function showSection(value) {

    switch (value) {
        case "subscription": {
            uncollpase("access")
            uncollpase("product")
            uncollpase("indicator")

            break;
        }
        case "access": {
            uncollpase("subscription")
            uncollpase("product")
            uncollpase("indicator")
            break;
        }
        case "indicator": {
            uncollpase("subscription")
            uncollpase("access")
            uncollpase("product")
            break;
        }
        case "product": {
            uncollpase("subscription")
            uncollpase("access")
            uncollpase("indicator")
            break;
        }
    }
    refreshAnchor(value)
}

function refreshAnchor(value) {
    let elements = document.getElementsByClassName("anchor-define");

    for (let i = 0; i < elements.length; i++) {
        let element = elements[i]
        if (element.classList.contains("isInactive")) { continue; }
        if (element.classList.contains("isActive")) {
            element.classList.remove("isActive")
            element.setAttribute("href", "#get_" + value)
        }
        else if (!element.classList.contains("isActive")) {
            element.classList.add("isActive")
            element.setAttribute("href", "#products_info")
        }
    }

}

function uncollpase(value) {
    let element = document.getElementById(value)
    if (element.classList.contains("show")) {
        document.getElementById("get_" + value).click()
    }
}

function showCanvas(value) {
    document.getElementById(value).classList.add("show")
}
function unshowCanvas(value) {
    document.getElementById(value).classList.remove("show")
}

function clickViewBoard() {
    let viewBoard = document.getElementsByClassName("viewBoardCard")[0]
    viewBoard.click()

}

var simpleModal = new bootstrap.Modal(document.getElementById('simpleModal'), {})
simpleModal.show()

function showModal(value) {
    new bootstrap.Modal(document.getElementById(value), {}).show()
}