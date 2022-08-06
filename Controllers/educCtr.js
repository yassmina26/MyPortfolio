
const educationSchema = require('../models/educModel');

// get  education 
exports.getEducation = async (req, res) => {
    const education = await educationSchema.find();
    try {
        res.json(education);
    
    }catch (error) {
        res.status(500).json({ msg: "Server problem" })
    } 
}


// add education 
exports.addEducation = async (req, res) => {

    //Getting all the data that there is in the body 
    const { education } = req.body;

    try {   // we dont want the application to break
        const newEducation = new educationSchema({
            education 
        })
        await newEducation.save(); //save the data
        res.json(newEducation); // see the data that has been saved

    } catch (error) {
        res.status(500).json({ msg: 'Server problem' })
    }

}


// get specific education  by id
exports.getEducationId = async (req, res) => {

    try {
        const education = await educationSchema.findById(req.params.id);
    res.json(education);

    } catch (error) {
        res.status(500).json({ msg: 'Server problem' })
    }


}


// update specific  education  by id
exports.updateEducationId = async (req, res) => {
    const { education } = req.body;
    try {
        const newEducation = await educationSchema.findByIdAndUpdate(req.params.id, {
            education
        });
        let results = await newEducation.save();
        await results;
        res.json({ msg: "Item updated" })

    } catch (error) {
        res.status(500).json({ msg: 'Server problem' })
    }
}


// delete  about 
exports.delEducationId = async (req, res) => {

    try {
        const education = await educationSchema.findByIdAndDelete(req.params.id)
        education;
        res.json({ msg: "Item deleted" })

    } catch (error) {
        res.status(500).json({ msg: 'Server problem' })
    }

}



