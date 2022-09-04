function getResult() {
    const NaNError = 'The values provided should be the numbers';
    const resultElement = document.getElementById('result');
    const num1 = $('#number1').val(); //document.getElementById('number1').value;
    const num2 = $('#number2').val(); //document.getElementById('number2').value;
    const operation = $('#operation').val(); //document.getElementById('operationSelected').value;

    switch (operation) {
        case '+':
            if (isNaN(num1) && isNaN(num2))
                resultElement.innerText = NaNError;
            else
                resultElement.innerText = Number(num1) + Number(num2);
            break;
        case '-':
            if (!isNaN(num1) && !isNaN(num2))
                resultElement.innerText = Number(num1) - Number(num2);
            else
                resultElement.innerText = NaNError;
            break;
        case '*':
            if (!isNaN(num1) && !isNaN(num2))
                resultElement.innerText = Number(num1) * Number(num2);
            else
                resultElement.innerText = NaNError;
            break;
        case '/':
            if (!isNaN(num1) && !isNaN(num2))
                resultElement.innerText = Number(num1) / Number(num2);
            else
                resultElement.innerText = NaNError;
            break;
    }

}
function clearAllInputs() {
    const inputs = document.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}
// function setOperatorSelected(e, operation) {
//     document.getElementById('operationSelected').value = operation;
//     const allButtons = document.getElementsByClassName('btn-primary');
//     for (let i = 0; i < allButtons.length; i++)
//         allButtons[i].classList.remove;
//     e.currentTarget.classList.add('btn-primary');
// }
