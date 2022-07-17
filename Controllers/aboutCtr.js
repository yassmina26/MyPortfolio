const aboutSchema = require("../models/aboutModel")

// get  about user
exports.getAbout = async (req, res) => {
    const about = await aboutSchema.find();
    try {
        res.json(about);
    
    }catch (error) {
        res.status(500).json({ msg: "Server problem" })
    } 
}


// add  about user
exports.addAbout = async (req, res) => {

    //Getting all the data that there is in the body 
    const { about } = req.body;

    try {   // we dont want the application to break
        const newAbout = new aboutSchema({
            about  // or we can do about:about or about:req.body.about
        })
        await newAbout.save(); //save the data
        res.json(newAbout); // see the data that has been saved

    } catch (error) {
        res.status(500).json({ msg: 'Server problem' })
    }

}


// get specific about user by id
exports.getAboutId = async (req, res) => {

    try {
        const about = await aboutSchema.findById(req.params.id);
    res.json(about);

    } catch (error) {
        res.status(500).json({ msg: 'Server problem' })
    }


}


// update specific  about user by id
exports.updateAboutId = async (req, res) => {
    const { about } = req.body;
    try {
        const newAbout = await aboutSchema.findByIdAndUpdate(req.params.id, {
            about
        });
        let results = await newAbout.save();
        await results;
        res.json({ msg: "Item updated" })

    } catch (error) {
        res.status(500).json({ msg: 'Server problem' })
    }
}


// delete  about user
exports.delAboutId = async (req, res) => {

    try {
        const about = await aboutSchema.findByIdAndDelete(req.params.id)
        about;
        res.json({ msg: "Item deleted" })

    } catch (error) {
        res.status(500).json({ msg: 'Server problem' })
    }

}



