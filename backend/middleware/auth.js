const jwt = require('jsonwebtoken');
const userModel = require('../model/user.js');
const bcrypt = require('bcrypt');
const userModel = require('../model/user.model');
const emailValidator = require('email-validator'); 

// Middleware to check user authorization
exports.jwtAuth = (req, res, next) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ error: 'User not authorized' });
    }

    try {
        const payload = jwt.verify(token, process.env.SECRET);
        // Attach the user ID to the request object for further processing
        req.user = { userId: payload.userId }; 
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};


exports.loginDataValidate = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // check if user exists
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({
                success: false,
                message: 'User does not exist with email'
            });
        }

        // check if password is correct
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({
                success: false,
                message: 'Incorrect password'
            });
        }

        next();
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};


exports.signupDataValidate = async (req, res, next) => {
    const {name, email, password} = req.body;

    // check if user miss any field
    if(!(name && email && password)) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        })
    }

    // validate name
    if(name.length < 3) {
        return res.status(400).json({
            success: false,
            message: 'Name must be atleast 3 char'
        })
    }
    if(name.length > 16) {
        return res.status(400).json({
            success: false,
            message: 'Name must be less than 16 char'
        })
    }

    // validate email
    if(!(emailValidator.validate(email))) {
        return res.status(400).json({
            success: false,
            message: 'Invalid email format'
        })
    }

    // check if user has already signup with the same email
    const existingUser = await userModel.findOne({email});
    if(existingUser) {
        return res.status(400).json({
            success: false,
            message: 'User already signup with the same email'
        })
    }

    // validate password
    if(password.length < 3) {
        return res.status(400).json({
            success: false,
            message: 'password must be atleast 3 char'
        })
    }
    if(password.length > 9) {
        return res.status(400).json({
            success: false,
            message: 'password must be less than 10 char'
        })
    }

    next();
    
}