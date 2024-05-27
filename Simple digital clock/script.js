function displayTime(){
    let dayTime = new Date();
    let hrs = dayTime.getHours();
    let min = dayTime.getMinutes();
    let sec = dayTime.getSeconds();
    let sessions = document.getElementById('session');


    if(hrs >= 12){
        sessions.innerHTML = 'PM';
    }else{
        sessions.innerHTML = 'AM';
    }

    if(hrs > 12){
        hrs = hrs -12;
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);