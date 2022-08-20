const { application } = require('express');
const { async } = require('rxjs');

const router = require('express').Router();
const { getAbout, getAboutId, updateAboutId, delAboutId, addAbout } = require('../Controllers/aboutCtr');

//const aboutSchema = require('../models/aboutModels');


// get request 
router.get('/about', getAbout)

// add about user 
router.post('/about', addAbout)

// get specific user by ID
router.get('/about/:id', getAboutId)

// update specific user by ID
router.put('/about/update/:id', updateAboutId)

// delete specific user by ID
router.delete('/about/:id', delAboutId)

module.exports = router;