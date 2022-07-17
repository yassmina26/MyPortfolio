const { application } = require('express');
const { async } = require('rxjs');

const router = require('express').Router();
const { getProjects, addProjects, getProjectsId, updateProjectsId, delProjectsId} = require('../Controllers/projectsCtr');


// get request in order to get the education 
router.get('/projects', getProjects)

// add education user 
router.post('/projects', addProjects)

// get specific user by ID
router.get('/projects/:id', getProjectsId)

// update specific user by ID
router.put('/projects/update/:id', updateProjectsId)

// delete specific user by ID
router.delete('/projects/:id', delProjectsId)

module.exports = router;