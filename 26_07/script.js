function myFunction() {
  let name = prompt("Please enter your name");
  let surname = prompt("Please enter your surname");
  if ((name, surname != null)) {
    document.getElementById("demo").innerHTML =
      "Hello " + name + " " + surname + "!";
  }
}

function multiplication() {
  let num1 = Number(prompt("First Number"));
  let num2 = Number(prompt("Second Number"));
  document.getElementById("result").innerHTML = num1 * num2;
}
function addition() {
  let num1 = Number(prompt("First Number"));
  let num2 = Number(prompt("Second Number"));
  document.getElementById("result").innerHTML = num1 + num2;
}
function subtraction() {
  let num1 = Number(prompt("First Number"));
  let num2 = Number(prompt("Second Number"));
  document.getElementById("result").innerHTML = num1 - num2;
}
function division() {
  let num1 = Number(prompt("First Number"));
  let num2 = Number(prompt("Second Number"));
  document.getElementById("result").innerHTML = num1 / num2;
}
