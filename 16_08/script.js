const elemDisplay = document.getElementById('display');

function addValue(field) {
    elemDisplay.innerHTML = elemDisplay.innerHTML + field.innerHTML
}

function delResult() {
    elemDisplay.innerHTML = ''
}

function getResult() {
    try {
        elemDisplay.innerHTML = math.evaluate(elemDisplay.innerHTML);
    } catch {
        alert('Invalid entry or operation')
        elemDisplay.innerHTML = ''
    }
}