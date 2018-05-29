var timer = document.getElementById("timer");
var start = document.getElementById("1");
var h = 0, m = 0, s = 0, ms = 0;

function setTime() {
    ms++;
    if(ms >= 100) {
        ms = 0;
        s++;

        if(s >= 60) {
            s = 0;
            m++;

            if(m >= 60) {
                m = 0;
                h++;
            }
        }
    }

    timer.innerText = h + ":" + m + ":" + s + "." + ms;
    stopWatch();
}

function stopWatch() {
    var t = setTimeout(setTime, 10);
} stopWatch();

start.onclick = stopWatch;