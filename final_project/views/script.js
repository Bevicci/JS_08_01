let currentUser = '';

function openMenu() {
    var x = document.getElementById("mobile-nav");
    if (x.style.display === 'none') {
        x.style.display = 'block'
        x.className = "dropdown-menu show"
    }
    else {
        x.style.display = 'none';
    }
}
function desc_mara() {
    var y = document.getElementById("Mara-mob");
    var x = document.getElementById("Mara");
    var pic = document.getElementById("spec");
    if ((x.style.display === 'none') && (y.style.display === 'none')) {
        if (window.innerWidth > 500) {
            x.style.display = 'block';
            pic.style.display = 'block';
        }
        else { y.style.display = 'block' };
        document.getElementById("maija").style.display = 'none';
        document.getElementById("martins").style.display = 'none';
        document.getElementById("kate").style.display = 'none';
        document.getElementById("maija-mob").style.display = 'none';
        document.getElementById("martins-mob").style.display = 'none';
        document.getElementById("kate-mob").style.display = 'none';
    }
    else {
        x.style.display = 'none';
        pic.style.display = 'none';
        y.style.display = 'none';
    }
}
function desc_maija() {
    var x = document.getElementById("maija");
    var y = document.getElementById("maija-mob");
    var pic = document.getElementById("spec");
    if ((x.style.display === 'none') && (y.style.display === 'none')) {
        if (window.innerWidth > 500) {
            x.style.display = 'block';
            pic.style.display = 'block';
        }
        else { y.style.display = 'block' };
        document.getElementById("Mara").style.display = 'none';
        document.getElementById("martins").style.display = 'none';
        document.getElementById("kate").style.display = 'none';
        document.getElementById("Mara-mob").style.display = 'none';
        document.getElementById("martins-mob").style.display = 'none';
        document.getElementById("kate-mob").style.display = 'none';
    } else {
        x.style.display = 'none';
        pic.style.display = 'none';
        y.style.display = 'none';
    }
}

function desc_martins() {
    var x = document.getElementById("martins");
    var y = document.getElementById("martins-mob");
    var pic = document.getElementById("spec");
    if ((x.style.display === 'none') && (y.style.display === 'none')) {
        if (window.innerWidth > 500) {
            x.style.display = 'block';
            pic.style.display = 'block';
        }
        else { y.style.display = 'block' };
        document.getElementById("Mara").style.display = 'none';
        document.getElementById("maija").style.display = 'none';
        document.getElementById("kate").style.display = 'none';
        document.getElementById("Mara-mob").style.display = 'none';
        document.getElementById("maija-mob").style.display = 'none';
        document.getElementById("kate-mob").style.display = 'none';
    } else {
        x.style.display = 'none';
        pic.style.display = 'none';
        y.style.display = 'none';
    }
}
function desc_kate() {
    var x = document.getElementById("kate");
    var y = document.getElementById("kate-mob");
    var pic = document.getElementById("spec");
    if ((x.style.display === 'none') && (y.style.display === 'none')) {
        if (window.innerWidth > 500) {
            x.style.display = 'block';
            pic.style.display = 'block';
        }
        else { y.style.display = 'block' };
        document.getElementById("Mara").style.display = 'none';
        document.getElementById("maija").style.display = 'none';
        document.getElementById("martins").style.display = 'none';
        document.getElementById("Mara-mob").style.display = 'none';
        document.getElementById("maija-mob").style.display = 'none';
        document.getElementById("martins-mob").style.display = 'none';
    } else {
        x.style.display = 'none';
        pic.style.display = 'none';
        y.style.display = 'none';
    }
}



const registerUser = () => {
    console.log('register user');
    const URL = 'http://localhost:3000/registration';
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const repeat = document.getElementById('repeat').value

    if (password !== repeat) return;
    let data = { email: email, password: password };

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    fetch(URL, {
        method: 'POST',
        mode: 'cors',
        headers: headers,
        body: JSON.stringify(data)
    })
        .then((response) => {
            console.log(response)
        });
}

const loginUser = () => {
    console.log('login user');
    const URL = 'http://localhost:3000/login';
    const email = document.getElementById('uname').value
    const password = document.getElementById('psw').value

    let data = { email: email, password: password };

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    fetch(URL, {
        method: 'POST',
        mode: 'cors',
        headers: headers,
        body: JSON.stringify(data)
    })
        .then((response) => {
            console.log(response)
            if (response === 'authorized') {
                currentUser = email
            }
        });
}

const setAppointment = () => {
    console.log(`user ${currentUser} sets appointment`);
    const URL = 'http://localhost:3000/booking';
    const startDate = document.getElementById('uname').value
    const startTime = document.getElementById('uname').value
    const duration = document.getElementById('psw').value // kak dolgo -> 90 min
    const subject = document.getElementById('psw').value
    const specialist = document.getElementById('psw').value
    // 20.05.2022
    // 19:40:00
    // 20.05.2022 19:40:00
    const start = new Date(startDate + ' ' + startTime) // timestamp 1982387298571

    const end = new Date(start + duration * 360) // duration v sec
    let data = {
        user: currentUser,
        start: start,
        end: end,
        subject: subject,
        specialist: specialist
    };

    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    fetch(URL, {
        method: 'POST',
        mode: 'cors',
        headers: headers,
        body: JSON.stringify(data)
    })
        .then((response) => {
            console.log(response)
            if (response.status == 201) {
                console.log('appointment created')
            }
        });
}

function setFromDiv(element, field, h5class) {
    const value = element.querySelector(h5class).innerHTML
    document.getElementById(field).innerHTML = value;
}
function setTime() {
    const date = document.getElementById("appointment").value;
    const time = document.getElementById("timepicker").value;
    document.getElementById("time").innerHTML = date + " " + time;
}
