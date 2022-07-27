const router = require('express').Router();
const { response } = require('express');
const nodemailer = require('nodemailer');
const { route } = require('./userRoute');


router.get('/', (req, res) => {
    res.send('Contacted')

})

router.post('/', (req, res) => {

    let data = req.body;

    // smtp : for transporting messages 
    let smtpTransport = nodemailer.createTransport({

        service: 'Gmail',
        // The port of connection 
        port: 465,
        // For authentication
        auth: {
            user: 'boukariyassmine7@gmail.com',
            pass: 'password#2022#'
        }

    })

    let mailOptions = {
        from: data.email,
        to: 'boukariyassmine7@gmail.com',
        subject: `Message from ${data.name}`,
        html: `
        <h3>Informations<h3>
        <u1>
            <l1>name: ${data.name}</l1>
            <l1>email: ${data.email}</l1>
        </u1>
        <h3>Message</h3>
        <p>${data.message}</p>
        `


    }

    smtpTransport.sendMail(mailOptions, (err, response) =>{
        try {
            if(err) 
            return res.status(400).json({ msg: err })
            else 
            return res.status(200).json({ msg: `Message was sent.` })

        } catch(err) {
            res.status(500).json({ msg: err })
        }
    })
});




module.exports = router;