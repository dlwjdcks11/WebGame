var timer = document.getElementById("timer");
var h = 0, m = 0, s = 0, ms = 0;

for(var i = 0; i < 25; i++) {
    if(document.getElementById(i + 1).innerHTML === "1") {
        var index = i + 1;
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

    timer.innerText = h + ":" + m + ":" + s + "." + ms;
    stopWatch();
}

function stopWatch() {
    var t = setTimeout(setTime, 10);
}

document.getElementById(index).addEventListener('click', stopWatch);