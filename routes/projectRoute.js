const router = require("express").Router();
const projectSchema = require('../models/projectModel');



// get projects
router.get("/project", async (req, res) => {
    try {
        const project = await projectSchema.find(req.body);
        res.json(project);
    } catch (err) {
        res.status(500).json({ msg:err})
    }
})



// add project
router.post("/project/", async (req, res) => {
    const { Product_id, Title, Description } = req.body
    try {
        const project = new projectSchema({
            Product_id,
            Title,
            Description
        })

        await project.save();
        res.json({ msg: "Project added" })

    } catch (err) {
        res.status(500).json({msg:err})
    }

})





// get specific project by id
router.get("/project/:id", async (req, res) => {
    try {

        let project = await projectSchema.findById(req.params.id)
        res.json(project)

    } catch (err) {
        res.status(500).json({ msg: err })
    }
})




// update project
router.put("/project/:id", async (req, res) => {
    const { Product_id, Title, Description } = req.body
    try {
        const project = await projectSchema.findByIdAndUpdate(req.params.id, {
            Product_id,
            Title,
            Description

        })
        await project.save();
        res.json({ msg: "Item updated" })

    } catch (err) {
        res.status(500).json({ msg: err })

    }
})

// delete project
router.delete("/project/:id", async (req, res) => {
    let project = await projectSchema.findByIdAndDelete(req.params.id);
    try {
        await project
        res.json({ msg: "Item deleted" })
    } catch (err) {
        res.status(500).json({ msg: err })
    }

})

module.exports = router;