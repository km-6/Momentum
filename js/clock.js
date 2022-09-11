const clock = document.querySelector("h2#clock");
const today = document.querySelector("h3#day");

// 년월일요일
const todayDate = new Date();
function getWeek( weekNo ) {
    if(weekNo == 0){week = "Sun";}
    else if(weekNo == 1){week = "Mon";}
    else if(weekNo == 2){week = "Tue";}
    else if(weekNo == 3){week = "Wed";}
    else if(weekNo == 4){week = "Thu";}
    else if(weekNo == 5){week = "Fri";}
    else if(weekNo == 6){week = "Sat";}
    return week;
}
const year = String(todayDate.getFullYear());
const month = String(todayDate.getMonth() + 1).padStart(2,"0");
const date = String(todayDate.getDate()).padStart(2,"0");
const day = getWeek (todayDate.getDay() );
today.innerHTML = `${year}.${month}.${date} (${day})`

// 시계
function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock()
setInterval(getClock, 1000);