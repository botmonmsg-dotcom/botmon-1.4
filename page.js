const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function showSection(value) {

    switch (value) {
        case "subscription": {
            uncollpase("access")
            uncollpase("product")
        }
        case "access": {
            uncollpase("subscription")
            uncollpase("product")
        }
        case "product": {
            uncollpase("subscription")
            uncollpase("access")
        }
    }
}

function uncollpase(value) {
    let element = document.getElementById(value)
    if (element.classList.contains("show")) {
        document.getElementById("get_"+value).click()
    }
}

function clickViewBoard() {
    let viewBoard = document.getElementsByClassName("viewBoardCard")[0]
    viewBoard.click()
}