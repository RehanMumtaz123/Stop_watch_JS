
var min=0;
var sec=0;
var msec=0;
var minHeading=document.getElementById("min");
var secHeading=document.getElementById("sec");
var msecHeading=document.getElementById("msec");
var interval;
function timer(){
    msec++;
    msecHeading.innerHTML=msec;
    if(msec>=100){
        sec++;
        secHeading.innerHTML= sec;
        msec=0;
        if(sec>=5){
            min++;
            minHeading.innerHTML= min;
            sec=0;
        }
    }
}
function start(){
    interval=setInterval(timer,10);
    one.css.style.disa
}
function stop(){
    clearInterval(interval);
}
function reset(){
    msecHeading.innerHTML=0;
    secHeading.innerHTML=0;
    minHeading.innerHTML=0;
    // yhn pr stop function lagana prega taake wo ruke bh 0 hone k baad na ke chlti jaye
    stop();
}
