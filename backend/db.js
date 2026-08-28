const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    //password: "Signup@12345",
    password: "",
    database: "signup_db"


});


db.connect((err) => {
    if(err){
        console.log("Database connection failed: ");
        console.log(err.message);
    }else{
        console.log("MySQL connected successfully!");
    }
});

module.exports = db;