let clock = document.getElementById("clock");


function updateTime(){
    const time = new Date();
    let hour = time.getHours().toString().padStart(2,0);
    let minute = time.getMinutes().toString().padStart(2,0);
    let second = time.getSeconds().toString().padStart(2,0);
    let Milliseconds = time.getMilliseconds()
    let Timing = (`${hour}:${minute}:${second}:${String(Math.floor(Milliseconds/10)).padStart(2,0)}`);
    clock.textContent=Timing;
}
updateTime();
setInterval(updateTime,10);
