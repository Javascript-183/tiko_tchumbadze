let specialElem = document.getElementById("special");
    specialElem.style.backgroundColor = "#f5f10e";


let classAlert = document.querySelectorAll(".alert");
classAlert.forEach((element) => {
    element.style.border = "1px solid gray";
});

let alertStopClass = document.querySelectorAll(".alert.stop");
alertStopClass.forEach((element) => {
    element.style.backgroundColor = "red";
});

let alertGoClass = document.querySelectorAll(".alert.go");
alertGoClass.forEach((element) => {
    element.style.backgroundColor = "#17b619";
});