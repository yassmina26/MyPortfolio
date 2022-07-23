const router = require('express').Router();
const userCtr = require('../Controllers/userCtr');



// register
router.post('/register', userCtr.registerUser)

// login
router.post('/login', userCtr.loginUser)

 // verify
router.get('/verify', userCtr.verifiedToken)

 module.exports = router;