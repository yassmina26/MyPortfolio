const router = require('express').Router();
const projectSchema = require("../models/projectModel");
// const { getProject, addProject, getProjectId, updateProjectId, delProjectId} = require('../Controllers/projectCtr');


// get request in order to get the project  
router.get('/project', async (req,res)=>{
    try {
        const project = await projectSchema.find(req.body);
        res.json(project);
    
    } catch (err) {
        res.status(500).json({msg:err})
    }
})

// add project   user 
 router.post('/project', async (req, res)=>{
    const {title, product_id, description, images} = req.body
    try {
        const project = new projectSchema({
            Product_id,
            Title,
            Description
        })
        await project.save();
        res.json({msg:"Project added"})
        
    } catch (err) {
        res.status(500).json({msg:err})
        
    }
 })

// // get specific user by ID
// router.get('/project/:id', getProjectId)

// // update specific user by ID
// router.put('/project/update/:id', updateProjectId)

// // delete specific user by ID
// router.delete('/project/:id', delProjectId)

module.exports = router;