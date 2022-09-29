const express = require('express'); //Load express module, import of module.(A module is a JavaScript library/file that you can import into other code using Node's require() function.)
var path = require('path');
const app = express(); //express app creation
//First we invoke the require() function, specifying the name of the module as a string ('express'), and calling the returned object to create an Express application. 
//We can then access the properties and functions of the application object.

const fs = require('fs'); //fs=fileSystem
const cors = require('cors');
const bodyParser = require('body-parser'); //to parser the body, apply body-parser. Firstly install body parser "npm install body-parser", 
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}))

// DataBase  MySQL
let mysql = require("mysql");
let con = mysql.createConnection({ //define connection to database
    host: "localhost",
    user: "root",
    password: "",
    database: "js_08_01"
});
con.connect(function (err) {
    if (err) {
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});
//Now we have access to database, we can run sql query

//The app.get() method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root. 
//The callback function takes a request and a response object as arguments, and calls send() on the response to return the string.
//when the callback is invoked the first argument will always be the request and the second will always be the response.

app.get('', (req, res) => {
    res.send('Server is running, status OK')
})

app.get('/get-allCustomer', (req, res) => { //for the GET request we do not have body, open any browser and type link=get request
    const sqlQuery = "SELECT * FROM customers";
    con.query(sqlQuery, (error, results) => {
        if (error)
            throw error;
        res.send(JSON.stringify({ 'status': 200, 'error': null, 'response': { customers: results } }))
    })
})

app.post('/add-customer', (req, res) => {
    console.log(req.body)
    const newCustomer = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
        vip: req.body.vip == "Yes" ? 1 : 0
    };

    const sqlQuery = "INSERT INTO customers (firstname, lastname, email, phone, vip) VALUES (?,?,?,?,?)";
    con.query(sqlQuery, [newCustomer.firstname, newCustomer.lastname, newCustomer.email, newCustomer.phone, newCustomer.vip], 
        (error, results) => {
        if (error)
            throw error;
        res.send(JSON.stringify({
            'status': 200,
            'error': null,
            'response': 'Customer ID: ' + results.insertId + ' created!'
        }));
    })

})
app.listen(5000, () => { //port. starting the server
    console.log('Server is running on port 5000');
})

