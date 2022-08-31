const { application } = require('express');
const { async } = require('rxjs');

const router = require('express').Router();
const { getCertif, addCertif, getCertifId, updateCertifId, delCertifId} = require('../Controllers/certifCtr');


// get request in order to get the education 
router.get('/certifications', getCertif)

// add education user 
router.post('/certifications', addCertif)

// get specific user by ID
router.get('/certifications/:id', getCertifId)

// update specific user by ID
router.put('/certifications/update/:id', updateCertifId)

// delete specific user by ID
router.delete('/certifications/:id', delCertifId)

module.exports = router;