const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("../Models/user.model.js");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, location, contact, password } = req.body;

    
    if (!name || !email || !location || !contact || !password) {
        return res.status(400).send("All fields are required");
    }
    if (email) {
        const existUser = await UserModel.findOne({email});
        if (existUser) {
            return res.status(400).json ({message: "Email already used"});
        }
    }
    bcrypt.hash(password, 5, (err, encryptedPassword) => {
      UserModel.create({
        name,
        email,
        location,
        contact,
        password: encryptedPassword,
      }).then(() => {
        res.status(201).send("Registration Completed");
      });
    });
  } catch (error) {
    res.status(500).send(error, "Server Error");
  }
});
