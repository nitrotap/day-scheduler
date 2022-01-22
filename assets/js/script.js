/*
js script file for day-scheduler
 */

let sectionAnchor = document.querySelector("#sectionAnchor");






const setHeaderDate = function() {
// set header date
    let currentDayEl = document.querySelector("#currentDay");
    let currentTime = moment();
    currentDayEl.textContent = currentTime.format("dddd, MMMM DD");
}

// gets either current time (0), future time (pos number), or past time (neg number)
const timeLogic = function (i) {
    let currentTime = moment();
    let date = currentTime.add(i, "hours").format("ha");
    return date;
}

const timeElement = function(timeFromCurrent, color) {
    // let currentTime = moment();
    // get text for current time
    // let date = currentTime.format("ha");
    
    let date = timeFromCurrent;
    
    let timeRowEl = document.createElement("div");
    timeRowEl.className = "container row border border-dark border-5" // time element row styles
    
    // time element
    let timeDivElement = document.createElement("div");
    timeDivElement.textContent = date;
    timeDivElement.className = "time-div col d-flex justify-content-center align-items-center";
    
    // text area element
    let textAreaDivEl = document.createElement("div");
    let textAreaInputEl = document.createElement("input");
    textAreaInputEl.type = "textarea";
    
    if (color === "red") {
        textAreaInputEl.className = "bg-danger text-light form-control-lg";
    } else if (color === "grey") {
        textAreaInputEl.className = "bg-grey text-light form-control-lg";
    } else {
        textAreaInputEl.className = "bg-green text-light form-control-lg";
    }
    
    
    textAreaDivEl.className = "d-flex align-items-center";
    textAreaDivEl.append(textAreaInputEl);
    
    // icon element
    let iconDivEl = document.createElement("div");
    iconDivEl.className = "col d-flex justify-content-center align-items-center icon-div-el";
    let iconEl = document.createElement("i");
    iconEl.className = "bi bi-save icon-el";
    
    iconDivEl.append(iconEl);


    
    timeRowEl.append(timeDivElement);
    timeRowEl.append(textAreaDivEl);
    timeRowEl.append(iconDivEl);
    sectionAnchor.append(timeRowEl);
}


const dayScheduler = function() {
    setHeaderDate();
    
    for (let i = -2; i <0; i++) {
        let d = timeLogic(i);
        timeElement(d, "grey");
    }
    
    let a = timeLogic(0);
    timeElement(a, "red");
    
    for (let i = 1; i < 8; i++) {
        let c = timeLogic(i);
        timeElement(c, "green")
    }
    
    
    
}







dayScheduler();