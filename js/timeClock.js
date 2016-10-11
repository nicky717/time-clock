function timeClock () {

var currentTime = new Date(), 
hours = currentTime.getHours(),
minutes = currentTime.getMinutes(),
seconds = currentTime.getSeconds(),
placement = document.getElementById('clock'), 
amPm = (hours >= 12) ? 'PM' : 'AM'; 
hours %= 12; 
hours = hours ? hours : 12;
minutes = (minutes < 10)? '0' + minutes : minutes;
seconds = (seconds < 10)? '0' + seconds : seconds; 
placement.innerHTML = hours + " : " + minutes + " : " + seconds + " " + amPm;

}



var startClock = setInterval(timeClock, 1000);





