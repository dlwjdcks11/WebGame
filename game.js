var list = [];
var list_beneath = [];
var t = 0;
var t_beneath = 0;
var boxes = [];
var boxes_beneath = [];

while (true) {
    var tmp = Math.floor(Math.random() * 25) + 1;
    var tmp_beneath = Math.floor(Math.random() * 25) + 26;

    if (list.indexOf(tmp) === -1) {
        list[t] = tmp;
        t++;
    }
    if(list_beneath.indexOf(tmp_beneath) === -1) {
        list_beneath[t_beneath] = tmp_beneath;
        t_beneath++;
    }
    if (t === 25 && t_beneath === 25) {
        break;
    }
}

for (var index = 0; index < 25; index++) {
    boxes[index] = document.getElementById(index + 1);
    boxes[index].innerHTML = list[index];
    boxes[index].onclick = getClick;
    boxes_beneath[index] = document.getElementById(index + 26);
    boxes_beneath[index].innerHTML = list_beneath[index];
    boxes_beneath[index].onclick = getClick_beneath;
}

var check = 1;
function getClick() {
    var num = this.innerHTML;

    for(var i = 0; i < 25; i++) {
        if(num === boxes[i].innerHTML && num === String(check)) {
            boxes[i].style.visibility = "hidden";
            check++;
        }
    }

    if(check === 26) {
        document.getElementsByClassName("above")[0].style.display = "none";
    }
}

function getClick_beneath() {
    var num = this.innerHTML;

    for(var i = 0; i < 25; i++) {
        if(num === boxes_beneath[i].innerHTML && num === String(check)) {
            boxes_beneath[i].style.visibility = "hidden";
            check++;
        }
    }

    if(check === 51) {
        alert("done!");
    }

}
