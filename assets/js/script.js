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
    // todo change this to 9-5
}

const timeElement = function(timeInput, color) {
    let date = timeInput;
    
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
        textAreaInputEl.className = "bg-red text-light form-control-lg";
    } else if (color === "grey") {
        textAreaInputEl.className = "bg-grey text-light form-control-lg";
    } else {
        textAreaInputEl.className = "bg-green text-light form-control-lg";
    }
    
    
    textAreaDivEl.className = "d-flex col-8 align-items-center";
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
    

    //todo if time is before current time, color is grey
    // if time is current time, set to red
    // if time is after current time, set to green

    let currentTime = moment();
    //let date = currentTime.add(i, "hours").format("ha");
    // return date;
    

    
    let color = "green";
    let nineAM = moment('9:00am', 'h:mma');
    let tenAM = moment('10:00am', 'h:mma');
    let elevenAM = moment('11:00am', 'h:mma');
    let twelvePM = moment('12:00pm', 'h:mma');
    let onePM = moment('1:00pm', 'h:mma');
    let twoPM = moment('2:00pm', 'h:mma');
    let threePM = moment('3:00pm', 'h:mma');
    let fourPM = moment('4:00pm', 'h:mma');
    let fivePM = moment('5:00pm', 'h:mma');



    // 9am
    if (currentTime.isBetween(nineAM, tenAM)) {
        let color = "red";
        timeElement("9am", color);
    } else if (currentTime.isBefore(nineAM)) {
        let color = "green";
        timeElement("9am", color);
    } else {
        let color = "grey";
        timeElement("9am", color);
    }
    
    // 10am
    if (currentTime.isBetween(tenAM, elevenAM)) {
        let color = "red";
        timeElement("10am", color);
    } else if (currentTime.isBefore(tenAM)) {
        let color = "green";
        timeElement("10am", color);
    } else {
        let color = "grey";
        timeElement("10am", color);
    }

    // 11am
    if (currentTime.isBetween(elevenAM, twelvePM)) {
        let color = "red";
        timeElement("11am", color);
    } else if (currentTime.isBefore(elevenAM)) {
        let color = "green";
        timeElement("11am", color);
    } else {
        let color = "grey";
        timeElement("11am", color);
    }
    
    //12pm
    if (currentTime.isBetween(twelvePM, onePM)) {
        let color = "red";
        timeElement("12pm", color);
    } else if (currentTime.isBefore(twelvePM)) {
        let color = "green";
        timeElement("12pm", color);
    } else {
        let color = "grey";
        timeElement("12pm", color);
    }
    
    //1pm
    if (currentTime.isBetween(onePM, twoPM)) {
        let color = "red";
        timeElement("1pm", color);
    } else if (currentTime.isBefore(onePM)) {
        let color = "green";
        timeElement("1pm", color);
    } else {
        let color = "grey";
        timeElement("1pm", color);
    }

    //2pm
    if (currentTime.isBetween(twoPM, threePM)) {
        let color = "red";
        timeElement("2pm", color);
    } else if (currentTime.isBefore(twoPM)) {
        let color = "green";
        timeElement("2pm", color);
    } else {
        let color = "grey";
        timeElement("2pm", color);
    }
    
    //3pm
    if (currentTime.isBetween(threePM, fourPM)) {
        let color = "red";
        timeElement("3pm", color);
    } else if (currentTime.isBefore(threePM)) {
        let color = "green";
        timeElement("3pm", color);
    } else {
        let color = "grey";
        timeElement("3pm", color);
    }
    
    //4pm
    if (currentTime.isBetween(fourPM, fivePM)) {
        let color = "red";
        timeElement("4pm", color);
    } else if (currentTime.isBefore(fourPM)) {
        let color = "green";
        timeElement("4pm", color);
    } else {
        let color = "grey";
        timeElement("4pm", color);
    }
    
    
    
    
}







dayScheduler();