const projectSchema = require('../models/projectModel');

// get  project 
exports.getProject = async (req, res) => {
    const project = await rojectSchema.find();
    try {
        res.json(project);
    
    }catch (error) {
        res.status(500).json({ msg: "Server problem" })
    } 
}


// add project 
    exports.addProject = async (req, res) => {

    //Getting all the data that there is in the body 
    const { project } = req.body;

    try {   // we dont want the application to break
        const newProject = new projectSchema({
            project 
        })
        await newProject.save(); //save the data
        res.json(newProject); // see the data that has been saved

    } catch (error) {
        res.status(500).json({ msg: 'Server problem' })
    }

}


// get specific project  by id
exports.getProjectId = async (req, res) => {

    try {
        const project = await projectSchema.findById(req.params.id);
    res.json(project);

    } catch (error) {
        res.status(500).json({ msg: 'Server problem' })
    }


}


// update specific  project  by id
exports.updateProjectId = async (req, res) => {
    const { project } = req.body;
    try {
        const newProject = await projectSchema.findByIdAndUpdate(req.params.id, {
            project
        });
        let results = await newProject.save();
        await results;
        res.json({ msg: "Item updated" })

    } catch (error) { 
        res.status(500).json({ msg: 'Server problem' })
    }
}


// delete  project 
exports.delProjectId = async (req, res) => {

    try {
        const project = await projectSchema.findByIdAndDelete(req.params.id)
        project;
        res.json({ msg: "Item deleted" })

    } catch (error) {
        res.status(500).json({ msg: 'Server problem' })
    }

}