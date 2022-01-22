document.getElementById("upper-case").addEventListener("click",fun);
function fun(){
    let str= document.getElementById("text-area").value;
    document.getElementById("text-area").value =str.toUpperCase();
}

document.getElementById("lower-case").addEventListener("click",funN);
function funN(){
    let str= document.getElementById("text-area").value;
    document.getElementById("text-area").value =str.toLowerCase();
}

document.getElementById("proper-case").addEventListener("click",proCase);
function proCase() {
    let str = document.getElementById("text-area").value;
    document.getElementById("text-area").value =str.toProperCase();
}

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

document.getElementById("sentence-case").addEventListener("click",senCase);
function senCase() {
    let str = document.getElementById("text-area").value;
    document.getElementById("text-area").value =sentCase(str);
}

function sentCase(str) {
    let temp_arr = str.split('.');
    for (let i = 0; i < temp_arr.length; i++) {
        temp_arr[i]=temp_arr[i].trim();
        temp_arr[i] = temp_arr[i].charAt(0).toUpperCase() + temp_arr[i].substr(1).toLowerCase();
    }
    str=temp_arr.join('. ');
    return str.trim();
}

document.getElementById("save-text-file").addEventListener("click",download);

function download() {
    let text = document.getElementById("text-area").value;

    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', "text.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}