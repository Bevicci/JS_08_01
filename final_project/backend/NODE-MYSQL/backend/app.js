const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const cors = require("cors");

dotenv.config({ path: './.env' });

const app = express();
app.use(cors())

const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

app.use(express.json())

db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('MYSQL Connected')
    }
})

//Define Routes
app.use('/', require('../routes/pages'));
app.use('/auth', require('../routes/auth'));

app.get('/health', (req, res) => {
    res.send('Server is running, status OK')
})

app.get('/booking', (req, res) => {
    console.log('GET booking')
    const sqlQuery = "SELECT * FROM booking";
    db.query(sqlQuery, (error, results) => {
        if (error)
            throw error;
        res.send(results)
    })
})

app.post('/booking', (req, res) => {
    console.log('POST booking with data: ' + JSON.stringify(req.body))
    const { userId, start, end, specialist, subject } = req.body;
    db.query(`SELECT * FROM booking WHERE start < ${start} OR end < ${end}`, (error, results) => {
        if (error)
            throw error;
        const keys = Object.keys(results).length;
        if (keys != 0) {
            console.log('create booking')
            const sqlQuery = `INSERT INTO \`booking\`(\`userId\`, \`start\`, \`end\`, \`specialist\`, \`subject\`) VALUES ('${userId}','${start}','${end}','${specialist}','${subject}')`;
            db.query(sqlQuery, (error, results) => {
                if (error)
                    throw error;
                res.status = 201;
                res.send(results)
            })
        } else {
            console.log('invalid time entry')
        }
    })

})

app.post('/registration', (req, res) => {
    console.log('POST users with data: ' + JSON.stringify(req.body))
    const { email, password } = req.body;
    const sqlQuery = `INSERT INTO \`users\`(\`email\`, \`password\`) VALUES ('${email}','${password}')`;
    db.query(sqlQuery, (error, results) => {
        if (error)
            throw error;
        res.send(results)
    })
})

app.post('/login', (req, res) => {
    console.log('user login')
    const { email, password } = req.body
    const sqlQuery = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;
    db.query(sqlQuery, (error, results) => {
        if (error)
            throw error;

        const keys = Object.keys(results).length;
        if (keys != 0) {
            console.log('authorized')
            res.status = 200;
            res.send('user passed authorization')
        } else {
            console.log('unauthorized')
            res.status = 401;
            res.send('user is not authorized')
        }
    })
})

app.get('/user', (req, res) => {
    console.log('GET user')
    const { email } = req.body
    const sqlQuery = `SELECT * FROM users WHERE email = '${email}'`;
    db.query(sqlQuery, (error, results) => {
        if (error)
            throw error;
        res.send(results)
    })
})

app.listen(3000, () => {
    console.log('Server started on Port 3000');
})