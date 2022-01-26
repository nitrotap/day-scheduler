/*
js script file for day-scheduler
 */

let sectionAnchor = $("#sectionAnchor");


// set header date
const setHeaderDate = function() {
    let currentDayEl = document.querySelector("#currentDay");
    let currentTime = moment();
    currentDayEl.textContent = currentTime.format("dddd, MMMM DD");
}

const timeElement = function(timeInput, color) {
    let date = timeInput;
    
    let timeRowEl = document.createElement("div");
    // timeRowEl.className = "container row border border-dark border-5" // time element row styles
    timeRowEl.className = "container row " // time element row styles

    // time element
    let timeDivElement = document.createElement("div");
    timeDivElement.textContent = date;
    timeDivElement.className = "time-div d-flex justify-content-end align-items-center col border-bottom border-right border-dark border-5";
    // data attribute or id
    
    // text area element
    let textAreaDivEl = document.createElement("div");
    let textAreaInputEl = document.createElement("textarea");
    textAreaInputEl.setAttribute("id", "time" + date);
    textAreaInputEl.setAttribute("rows", "4");
    textAreaInputEl.type = "textarea";
    if (color === "red") {
        textAreaInputEl.className = "bg-red text-light form-control-lg";
    } else if (color === "grey") {
        textAreaInputEl.className = "bg-grey text-light form-control-lg";
    } else {
        textAreaInputEl.className = "bg-green text-light form-control-lg";
    }
    
    // .attr() in jQuery to adding attribute to element
    
    /*
    // event listener as blur
    textAreaInputEl.addEventListener("blur", function() {
        console.log("blur");
        let eventText = textAreaInputEl.value;
        events = [];
        times = [];
        events.push(eventText);
        times.push(timeInput);
        
        
        for (let i = 0; i < timeInput.length; i++) {
            schedule[timeInput] = eventText;
        }
        
        saveSchedule();
    })*/
    
    textAreaDivEl.className = "d-flex col-6 col-sm-8 col-lg-10 align-items-center text-area-div";
    textAreaDivEl.append(textAreaInputEl);
    
    // icon element
    let iconDivEl = document.createElement("div");
    iconDivEl.className = "col d-flex justify-content-center align-items-center icon-div-el border-left border-bottom border-dark border-5";
    let iconEl = document.createElement("i");
    iconEl.className = "bi bi-save icon-el";
    iconDivEl.append(iconEl);
    
    iconDivEl.addEventListener("click", function () {
        let eventText = textAreaInputEl.value;
        events = [];
        times = [];
        events.push(eventText);
        times.push(timeInput);

        for (let i = 0; i < timeInput.length; i++) {
            schedule[timeInput] = eventText;
        }
        saveSchedule();
    })
    
    timeRowEl.append(timeDivElement);
    timeRowEl.append(textAreaDivEl);
    timeRowEl.append(iconDivEl);
    sectionAnchor.append(timeRowEl);
}

const loadSchedule = function() {
    schedule = JSON.parse(localStorage.getItem("schedule"));
    
    if (schedule != null) {
        let times = Object.keys(schedule);

        for (const time of times) { // takes time as each element of "times" - same as spelt out for loop (for each loop)
            let keyText = document.querySelector("#time" + time); // a single key, want value inside time variable, but want # in front of string
            let keyValue = schedule[time];
            keyText.value = keyValue;
        }
    } else {
        schedule = {};
    }
}

const saveSchedule = function() {
    localStorage.setItem("schedule", JSON.stringify(schedule));
}

const dayScheduler = function() {
    setHeaderDate();
    
    let currentTime = moment();
    let nineAM = moment('9:00am', 'h:mma');
    let tenAM = moment('10:00am', 'h:mma');
    let elevenAM = moment('11:00am', 'h:mma');
    let twelvePM = moment('12:00pm', 'h:mma');
    let onePM = moment('1:00pm', 'h:mma');
    let twoPM = moment('2:00pm', 'h:mma');
    let threePM = moment('3:00pm', 'h:mma');
    let fourPM = moment('4:00pm', 'h:mma');
    let fivePM = moment('5:00pm', 'h:mma');

    // push timeslots into array and loop through the array, and add if condition into array
    // let timeTextArray = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm"];

    let timeArray = [{timeSlot: nineAM, timeText: "9am"}, {timeSlot: tenAM, timeText: "10am"}, {timeSlot: elevenAM, timeText: "11am"},
        {timeSlot: twelvePM, timeText: "12pm"}, {timeSlot: onePM, timeText: "1pm"}, {timeSlot: twoPM, timeText: "2pm"},  {timeSlot: threePM, timeText: "3pm"},
        {timeSlot: fourPM, timeText: "4pm"}, {timeSlot: fivePM, timeText: "5pm"}];

    for (let i = 0; i < timeArray.length - 1; i++) {
        if (currentTime.isBetween(timeArray[i].timeSlot, timeArray[i + 1].timeSlot)) {
            let color = "red";
            timeElement(timeArray[i].timeText, color);
        } else if (currentTime.isBefore(timeArray[i])) {
            let color = "green";
            timeElement(timeArray[i].timeText, color);
        } else {
            let color = "grey";
            timeElement(timeArray[i].timeText, color);
        }

    }

    loadSchedule();
}

dayScheduler();