//PASSWORD MANAGER with react for the frontend and nodejs and express for the backend 
//let's call our express module
const express = require('express');
//create the app
const app = express();
//call sql module
const mysql = require('mysql');
//to allow connect between front and back
const cors = require('cors');
//set the port your app will listen to
const PORT = 3306;

const { encrypt, decrypt} = require("./EncryptionHandler");

//to pass json format received from the fron
app.use(express.json());
//to allow connection between servers
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: false, //to enable cookies
}));

//connect our express server to the DB, define the usual set of properties
const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "Moneyfarm239",
    database: "PasswordManagerDB"
});

//with body you pass variables from front to back
//we structure it with const with pwd and title as properties
app.post("/addpassword", (req,res) => {
   const {password, title} = req.body;
   const hashedPassword = encrypt(password);

   db.query(
       "INSERT INTO passwords (password, title, iv) VALUES (?,?, ?)", 
        [hashedPassword.password, title, hashedPassword.iv],
        (err, result) => {
            if (err){
           console.log(err)
            } else {
           res.send("success")
            }
        }
   );
});
//route to return the passwords in our db
//call back function after the query
app.get('/showpasswords', (req,res) => {
    db.query('SELECT * FROM passwords;', (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
//req.body is equal to password and iv in const decryptPassword in app in server, very simple endpoint
//it receives the password and iv and it returns the decrypted value for those
app.post('/decryptpassword', (req,res) => {
    res.send(decrypt(req.body));
});


//let's set our first route to the the api, let's send data as responde of api call
//app.get("/", (req,res) => {
   // res.send("Hello World");
//});

app.listen(PORT, () => {
    console.log("Server is running");
});
