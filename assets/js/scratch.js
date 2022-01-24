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

// gets either current time (0), future time (pos number), or past time (neg number)
const timeLogic = function (i) {
    let currentTime = moment();
    let date = currentTime.add(i, "hours").format("ha");
    return date;
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

        // adding answers to array
        let scheduleObj = {
            timeSlot: timeInput,
            eventName: eventText
        };
        saveSchedule(scheduleObj);
    })

    timeRowEl.append(timeDivElement);
    timeRowEl.append(textAreaDivEl);
    timeRowEl.append(iconDivEl);
    sectionAnchor.append(timeRowEl);
}

const loadSchedule = function() {
    schedule = JSON.parse(localStorage.getItem("schedule"));
    if (!schedule) {
        schedule = [];
    } else {
        schedule = JSON.parse(localStorage.getItem("schedule"));
        for (let i = 0; i < schedule.length; i++) {
            // find timeslot in document and set textarea equal to eventName
            let a = document.querySelector("#time" + schedule[i].timeSlot);
            a.textContent = schedule[i].eventName;
        }
    }
}

const saveSchedule = function(scheduleObj) {
    if (schedule.length === 0) {
        schedule.push(scheduleObj);
    } else { // schedule exists with previous values
        let dupCheck
        let dupId = 0;
        // loop over schedule, checking each timeslot
        for (let i = 0; i < schedule.length; i++) {
            if (schedule[i].timeSlot === scheduleObj.timeSlot) {
                dupCheck = true;
                console.log("duplicate found");
                dupId = i;
            }
        }
        
        // if dup is found, update dup index // else add object
        if (dupCheck) {
            let a = scheduleObj.eventName;
            schedule[dupId].eventName = a;
        } else {
            schedule.push(scheduleObj);
        }
    }

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

    loadSchedule();
}

dayScheduler();