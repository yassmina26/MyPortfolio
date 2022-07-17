const projectsSchema = require('../models/projectsModel');

// get  projects user
exports.getProjects = async (req, res) => {
    const projects = await projectsSchema.find();
    try {
        res.json(projects);
    
    }catch (error) {
        res.status(500).json({ msg: "Server problem" })
    } 
}


// add projects user
exports.addProjects = async (req, res) => {

    //Getting all the data that there is in the body 
    const { projects } = req.body;

    try {   // we dont want the application to break
        const newProjects = new projectsSchema({
            projects 
        })
        await newProjects.save(); //save the data
        res.json(newProjects); // see the data that has been saved

    } catch (error) {
        res.status(500).json({ msg: 'Server problem' })
    }

}


// get specific projects user by id
exports.getProjectsId = async (req, res) => {

    try {
        const projects = await projectsSchema.findById(req.params.id);
    res.json(projects);

    } catch (error) {
        res.status(500).json({ msg: 'Server problem' })
    }


}


// update specific  projects user by id
exports.updateProjectsId = async (req, res) => {
    const { projects } = req.body;
    try {
        const newProjects = await projectsSchema.findByIdAndUpdate(req.params.id, {
            projects
        });
        let results = await newProjects.save();
        await results;
        res.json({ msg: "Item updated" })

    } catch (error) {
        res.status(500).json({ msg: 'Server problem' })
    }
}


// delete  projects user
exports.delProjectsId = async (req, res) => {

    try {
        const projects = await projectsSchema.findByIdAndDelete(req.params.id)
        projects;
        res.json({ msg: "Item deleted" })

    } catch (error) {
        res.status(500).json({ msg: 'Server problem' })
    }

}