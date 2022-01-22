/*
js script file for day-scheduler
 */

let sectionAnchor = document.querySelector("#sectionAnchor");






const setHeaderDate = function() {
// set header date
    let currentDayEl = document.querySelector("#currentDay");
    let currentTime = moment();
    let currentDay = currentTime.format("dddd, MMMM DD");
    currentDayEl.textContent = currentDay;
}

const timeElement = function() {
    let currentTime = moment();
    let timeEl = document.createElement("div");
    // get text for current time
    let date = currentTime.add(1, "hour").format("ha");
    timeEl.textContent = date;
    // todo set current line current color
    sectionAnchor.append(timeEl);
}









setHeaderDate();
timeElement();