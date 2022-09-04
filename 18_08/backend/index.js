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

// // DataBase 
// var mysql = require("mysql");
// var con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "js_08_01"
// });
// con.connect(function (err) {
//     if (err) {
//         console.log('Error connecting to Db');
//         return;
//     }
//     console.log('Connection established');
// });


app.use(cors());//browser sequirity issues, CORS help to skip it
app.use(bodyParser.urlencoded({
    extended: true
}));

//The app.get() method specifies a callback function that will be invoked whenever there is an HTTP GET request with a path ('/') relative to the site root. 
//The callback function takes a request and a response object as arguments, and calls send() on the response to return the string.
//when the callback is invoked the first argument will always be the request and the second will always be the response.

app.get('', (req, res) => {
    res.send('Server is running, status OK')
})

app.get('/get-allCustomer', (req, res) => { //app.get=run the page(req=require, res=response) shorter version of function(req,res) 
    fs.readFile('AllCustomers.json', 'utf8', (err, data) => { //. FileSystem. readFile-function, Three arguments ('AllCustomers.json'-file path ,'utf-8'-content type, (err-parametr,data)-function what to do after file is red)
        res.send(JSON.stringify({ 'status': 200, 'error': null, 'response': JSON.parse(data) })) //response send to server, parse-  form data  
    })
})

app.post('/add-customer', (req, res) => { //when we add new customer, it adds to AllCustomer.json file
    const newCustomer = {
        firstname: req.body.firstname,//it comes from html file names
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email
    };
    fs.readFile('AllCustomers.json', 'utf8', (err, data) => { //read a file after adding customer
        const customers = JSON.parse(data); //parse data from string to JSON(we transfer text file which we enter to js object in our nodejs file, js object)
        customers.customers.push(newCustomer);
        console.log(customers)
        //we write new file
        fs.writeFile('AllCustomers.json', JSON.stringify(customers, null, 3),//JSON.stringify-преобразует значение JavaScript в строку JSON.
            //(value-Значение, преобразуемое в строку JSON.[, replacer=null:all properties of the object are included in the resulting JSON string.[, space]])
            function (err) {
                if (!err) {
                    // res.status(201)
                    res.send(JSON.stringify({ 'status': 201, 'error': null, 'response': 'Customer is added' }))
                    // res.send('Customer is added') //send the response
                } else {
                    res.send(err)
                }
                //callback function, it check if there is an error in function .write file and transfer it like an object so we could work with it
            })
    })
})
app.listen(5000, () => { //port. starting the server
    console.log('Server is running on port 5000');
})

