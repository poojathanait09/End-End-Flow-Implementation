const express = require("express");
const bcrypt = require("bcrypt");

const router = express.Router();
const db = require("../db");

router.post("/", async (req , res) => {
    const {
        firstName,
        lastName,
        email,
        phone,
        password,
        pincode

    } = req.body;

    if(
        !firstName ||
        !lastName ||
        !phone ||
        !email ||
        !password ||
        !pincode
    ) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    if(!/^[A-Za-z]+$/.test(firstName)){
        return res.status(400).json({
            message: "First name should contain only alphabets"
        });
    }

    if(!/^[A-Za-z]+$/.test(lastName)){
        return res.status(400).json({
            message: "last name should contain only alphabets"
        });
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){

        return res.status(400).json({
            message: "Please enter a valid email"
        });
    }

    if(!/^(?:\+[1-9]\d{12}|[1-9]\d{9})$/.test(phone)){

        return res.status(400).json({
            message: "Please enter a valid phone number"
        });
    }

    if( !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$&!*]).{6,}$/.test(password)){

        return res.status(400).json({
            message: "Password must have at least 6 characters, one alphabet, one number and one special character(@#$&!*)"
        });
    }

    try {

        const [pincodeResult] = await db 
        .promise()
        .query(
            "select * from pincodes where pincode = ?", [pincode]
        );

        if(pincodeResult.length === 0){
            return res.status(400).json({
            message: "Invalid Pincode"
        });

        }

        
        const [existingUser] = await db 
        .promise()
        .query(
            "select id from users where email = ?", [email]
        );

        if(existingUser.length > 0){
            return res.status(400).json({
            message: "Email is already registered"
        });

        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const [result] = await db
        .promise()
        .query(
                `insert into users (first_name,last_name,email,phone,password,pincode) values (?,?,?,?,?,?)`,
                [
                    firstName,
                    lastName,
                    email,
                    phone,
                    hashedPassword,
                    pincode
                ]
        );

        res.status(201).json({
            message: "Registration successful",
            userId: result.insertId
        });
       

    }

    catch (error){
        console.error(error);

        res.status(500).json({
            message: "Server error"
        });
    }

});

router.get("/:id",async (req,res) => {
    const {id} = req.params;

    try {
        const [users] = await db
            .promise()
            .query(
                `select id,first_name, last_name,email, phone, pincode from users where id = ?`, [id] 
            );

            if(users.length === 0){
                return res.status(404).json({
                    message: "User not found"
                });
            }

            res.status(200).json(users[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "server error"
        });
    }
});

module.exports = router;
