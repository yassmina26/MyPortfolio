const router = require("express").Router();
const projectSchema = require('../models/projectModel');


// get project
router.get("/projects", async (req, res) => {
    try {
        const project = await projectSchema.find(req.body);
        res.json(project);
    } catch (err) {
        res.status(500).json({msg:err})
    }
})



// add project
router.post('/projects/', async (req, res) => {
    const { product_id, title, description, images } = req.body;
    try {
        const project = new projectSchema({
            product_id,
            title,
            description,
            images
        })

        await project.save();
        res.json({msg:"Project added"})

    } catch (err) {
        res.status(500).json({msg:err})
    }

})





// get specific project by id
router.get("/projects/:id", async (req, res) => {
    try {

        let project = await projectSchema.findById(req.params.id)
        res.json(project)

    } catch (err) {
        res.status(500).json({msg:err})
    }
})




// update project
router.put("/projects/:id", async (req, res) => {
    const { product_id, title, description, images } = req.body
    try {
        const project = await projectSchema.findByIdAndUpdate(req.params.id, {
            product_id,
            title,
            description,
            images

        })
        await project.save();
        res.json({ msg: "Item updated" })

    } catch (err) {
        res.status(500).json({ msg: err })

    }
})


// delete project
router.delete("/projects/:id", async (req, res) => {
    let project = await projectSchema.findByIdAndDelete(req.params.id);
    try {
        await project
        res.json({ msg: "Item deleted" })
    } catch (err) {
        res.status(500).json({ msg: err })
    }

})

module.exports = router;