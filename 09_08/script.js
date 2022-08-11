function sum() {
    x = document.getElementById("fNumber").value;
    y = document.getElementById("sNumber").value;
    document.getElementById("result").value = Number(x) + Number(y);
}
function sub() {
    x = document.getElementById("fNumber").value;
    y = document.getElementById("sNumber").value;
    document.getElementById("result").value = Number(x) - Number(y);
}
function mult() {
    x = document.getElementById("fNumber").value;
    y = document.getElementById("sNumber").value;
    document.getElementById("result").value = Number(x) * Number(y);
}
function div() {
    x = document.getElementById("fNumber").value;
    y = document.getElementById("sNumber").value;
    document.getElementById("result").value = Number(x) / Number(y);
}