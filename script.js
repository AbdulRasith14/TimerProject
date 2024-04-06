let interval;
let hr = 0;
let min = 0;
let sec = 0;

function stopTimer(){
    clearInterval(interval);
}
interval =setInterval(()=>{
   
sec++;
if(sec>59){
    sec = 0;
    min++;
}
if(sec<10){
    sec = "0"+sec;
}
if(min>59){
    min = 0;
    hr++;
}

if(hr>23){
    hr = 0;
    min = 0;
    sec = 0;
}
if(min==2){
    stopTimer();
    console.log("Timer Stopped")
}
console.log(`${hr<10?"0"+hr:hr}:${min<10?"0"+min:min}:${sec}`)
},100)
