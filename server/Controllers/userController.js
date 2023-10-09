const express = require("express");
const bcrypt = require("bcrypt");
const {UserModel} = require("../Models/user.model.js");
const userRouter = express.Router();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const jwt = require("jsonwebtoken");

userRouter.get('/', (req, res) => {
  res.send('user route works');
})

userRouter.post("/register", async (req, res) => {
  try {
    const { name, email, location, contact, password } = req.body;
    if (!name || !email || !location || !contact || !password) {
      return res.status(400).send("All fields are required");
    }
   
    if (email) {
      const existUser = await UserModel.findOne({email});
      if (existUser) {
        return res.status(400).json({ message: "Email already used" });
      }
    }
 
    // hash the password
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new UserModel({
      name,
      email,
      location,
      contact,
      password: hashPassword,
    });
    await newUser.save();
    return res.status(201).json({ message: "User Registered Successfully" });
  } catch (error) {
    res.status(500).send(error, "Server Error");
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({ error: "Please fill all fields" });
    }
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res
        .status(404)
        .send({ message: "User or password is incorrect." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(401)
        .send({ message: "Username or password is incorrect." });
    }

    // geneate token
    const token = jwt.sign(
      {
        userId: user._id,
        name: user.name,
        email,
        location: user.location,
        contact: user.contact,
      },
      JWT_SECRET_KEY,
      { expiresIn: "100h" }
    );

    return res.status(200).send({ message: "Login success.", user, token });
  } catch (error) {
    res.status(500).send(error, "Server Error");
  }
});

module.exports = {userRouter};