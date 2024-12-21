let clock = document.getElementById("clock");


function updateTime(){
    const time = new Date();
    let hour = time.getHours().toString().padStart(2,0);
    let minute = time.getMinutes().toString().padStart(2,0);
    let second = time.getSeconds().toString().padStart(2,0);
    let Milliseconds = time.getMilliseconds().toString().padStart(3,0);
    let Timing = (`${hour}:${minute}:${second}`);
    clock.textContent=Timing;
}
updateTime();
setInterval(updateTime,1);
