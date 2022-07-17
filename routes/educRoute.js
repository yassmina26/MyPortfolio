const { application } = require('express');
const { async } = require('rxjs');

const router = require('express').Router();
const { getEducation, getEducationId, updateEducationId, delEducationId, addEducation } = require('../Controllers/educCtr');


// get request in order to get the education 
router.get('/education', getEducation)

// add education user 
router.post('/education', addEducation)

// get specific user by ID
router.get('/education/:id', getEducationId)

// update specific user by ID
router.put('/education/update/:id', updateEducationId)

// delete specific user by ID
router.delete('/education/:id', delEducationId)

module.exports = router;