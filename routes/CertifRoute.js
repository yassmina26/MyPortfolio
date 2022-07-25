const { application } = require('express');
const { async } = require('rxjs');

const router = require('express').Router();
const { getCertif, addCertif, getCertifId, updateCertifId, delCertifId} = require('../Controllers/CertifCtr');


// get request in order to get the education 
router.get('/certif', getCertif)

// add education user 
router.post('/certif', addCertif)

// get specific user by ID
router.get('/certif/:id', getCertifId)

// update specific user by ID
router.put('/certif/update/:id', updateCertifId)

// delete specific user by ID
router.delete('/certif/:id', delCertifId)

module.exports = router;