let clock = document.getElementById("clock");

function displayTime() {
    var meridiem = "AM"
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (hours === 0) {
        hours = 12;
    }
    if (hours > 12) {
        hours = hours - 12;
        meridiem = "PM";
    }
    clock.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
}

displayTime();
setInterval(displayTime, 1000)