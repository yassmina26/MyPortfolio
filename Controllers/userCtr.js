const userSchema = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findOne } = require('../models/userModel');

const userCtr = {

    // register
    registerUser: async (req, res) => {

        const { username, email, password } = req.body;

        try {

            const user = await userSchema.findOne({ email: email });
            if (user) {
                return res.status(400).json({ msg: "Email already exists" })
            }

            // create big password and then upadate the schema

            const passwordHash = await bcrypt.hash(password, 10);
            const newUser = new userSchema({
                username: username,
                email: email,
                password: passwordHash
            })

            await newUser.save();

            res.json({ msg: "registeration completed" })

        } catch (error) {
            return res.status(500).json({ msg: error.message })
        }

    },




    // login
    loginUser: async (req, res) => {
        try {

            const { email, password } = req.body;
            const user = await userSchema.findOne({ email: email })
            if (!user) {
                return res.status(400).json({ msg: 'User does not exist' })
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({ msg: "Incorrect password" })
            }

            // if login is succesful
            const payload = {
                id: user._id,
                name: user.username
            }

            const token = jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "1d" })

            res.json({ token })

            
        } catch (err) {

            return res.status(500).json({ msg: err.message })


        }
    },


    // verify 
    verifiedToken: async (req, res) => {
        res.send('verify user')
    }
}

module.exports = userCtr;