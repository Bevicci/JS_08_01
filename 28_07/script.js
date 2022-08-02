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

function calc() {
    let operator = document.getElementById("operator").value;
    switch (operator) {
        case "+":
            x = document.getElementById("fNumberV2").value;
            y = document.getElementById("sNumberV2").value;
            document.getElementById("resultV2").value = Number(x) + Number(y);
            break;
        case "-":
            x = document.getElementById("fNumberV2").value;
            y = document.getElementById("sNumberV2").value;
            document.getElementById("resultV2").value = Number(x) - Number(y);
            break;
        case "*":
            x = document.getElementById("fNumberV2").value;
            y = document.getElementById("sNumberV2").value;
            document.getElementById("resultV2").value = Number(x) * Number(y);
            break;
        case "/":
            x = document.getElementById("fNumberV2").value;
            y = document.getElementById("sNumberV2").value;
            document.getElementById("resultV2").value = Number(x) / Number(y);
            break;
        default:
            document.getElementById("resultV2").value = "";
            document.getElementById("operator").value = "";
            alert("Incorrect operator");
    }
}

function validateNumber(field) {
    console.log(this);
    console.log(field);
    let value = field.value;
    if (typeof value == "string") {
        alert("value is string!");
        return (field.value = "");
    }
}
