const { application } = require('express');
const { async } = require('rxjs');

const router = require('express').Router();
//const {getAbout, getAboutId, updateAboutId, delAboutId, addAbout} = require('../Controllers/aboutCtr');

const aboutSchema = require('../models/aboutModels');

//....about....in order to test this part, I do it on postman 

// get request in order to get the about 
router.get('/about',  async (req,res)=>{
    
    const about = await aboutSchema.find();

    res.json(about);
})
 
// add about user 
router.post('/about', (req,res)=> {
    res.send('hello from post router')
})

// get specific user by ID
router.get('/about/:id', (req,res)=> {
    res.send('hello from specific  post router')
})

// update specific user by ID
router.put('/about/update/:id', (req,res)=> {
    res.send('hello from updated  post router')
})

// delete specific user by ID
router.delete('/about/:id', (req,res)=> {
    res.send('hello from delete  post router')
})

module.exports = router;