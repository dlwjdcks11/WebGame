var timer = document.getElementById("timer");
var h = 0, m = 0, s = 0, ms = 0;
var t;

for(var i = 0; i < 25; i++) {
    if(document.getElementById(i + 1).innerHTML === "1") {
        var index_start = i + 1;
    }
    if(document.getElementById(i + 26).innerHTML === "50") {
        var index_end = i + 26;
    }
    if(index_start !== undefined && index_end !== undefined) {
        break;
    }
}

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

    timer.innerHTML = h + ":" + m + ":" + s + "." + ms;
    stopWatch();
}

function stopWatch() {
    t = setTimeout(setTime, 10);
}

function done() {
    clearTimeout(t);
}

document.getElementById(index_start).addEventListener('click', stopWatch);
document.getElementById(index_end).addEventListener('click', done);