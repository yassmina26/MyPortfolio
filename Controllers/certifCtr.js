const certifSchema = require('../models/certifModel');

// get  certif user
exports.getCertif = async (req, res) => {
    const certif = await certifSchema.find();
    try {
        res.json(certif);
    
    }catch (error) {
        res.status(500).json({ msg: "Server problem" })
    } 
}


// add certif user
exports.addCertif = async (req, res) => {

    //Getting all the data that there is in the body 
    const { certif } = req.body;

    try {   // we dont want the application to break
        const newCertif = new certifSchema({
            certif 
        })
        await newCertif.save(); //save the data
        res.json(newCertif); // see the data that has been saved

    } catch (error) {
        res.status(500).json({ msg: 'Server problem' })
    }

}


// get specific certif user by id
exports.getCertifId = async (req, res) => {

    try {
        const certif = await certifSchema.findById(req.params.id);
    res.json(certif);

    } catch (error) {
        res.status(500).json({ msg: 'Server problem' })
    }


}


// update specific  certif user by id
exports.updateCertifId = async (req, res) => {
    const { certif } = req.body;
    try {
        const newCertif = await certifSchema.findByIdAndUpdate(req.params.id, {
            certif
        });
        let results = await newCertif.save();
        await results;
        res.json({ msg: "Item updated" })

    } catch (error) { 
        res.status(500).json({ msg: 'Server problem' })
    }
}


// delete  certif user
exports.delCertifId = async (req, res) => {

    try {
        const certif = await certifSchema.findByIdAndDelete(req.params.id)
        certif;
        res.json({ msg: "Item deleted" })

    } catch (error) {
        res.status(500).json({ msg: 'Server problem' })
    }

}