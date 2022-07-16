const { application } = require('express');
const { async } = require('rxjs');

const router = require('express').Router();
//const {getAbout, getAboutId, updateAboutId, delAboutId, addAbout} = require('../Controllers/aboutCtr');

const aboutSchema = require('../models/aboutModels');

//....about....in order to test this part, I do it on postman 

// get request in order to get the about 
router.get('/about',  async (req,res)=>{
    
    const about = await aboutSchema.find();

    res.json(about);
})
 
// add about user 
router.post('/about', async (req,res)=> {

        //Getting all the data that there is in the body 
        const {about} = req.body;

    try {   // we dont want the application to break
        
        const newAbout = new aboutSchema({
            about  // or we can do about:about or about:req.body.about
       
        })

        await newAbout.save(); //save the data
        res.json(newAbout); // see the data that has been saved

    } catch (error) {
        res.status(500).json({msg:'Server problem'})
    }
    
})

// get specific user by ID
router.get('/about/:id', async (req,res)=> {
   
    try {
        const about = await aboutSchema.findById(req.params.id);
        res.json(about);

        
    } catch (error) {

        res.status(500).json({msg:'Server problem'})
    }
    

})

// update specific user by ID
router.put('/about/update/:id', async (req,res)=> {
    
    try {
        const {about} = req.body;
        const newAbout = await aboutSchema.findByIdAndUpdate(req.params.id, {
     
         about
     
        });
        let results = await newAbout.save();
        await results;
        res.json({msg:"Item updated"})
        
    } catch (error) {
        res.status(500).json({msg:'Server problem'})
    }
})

// delete specific user by ID
router.delete('/about/:id', async (req,res)=> {
  
   
    try {
        const about = await aboutSchema.findByIdAndDelete(req.params.id)
        about;
        res.json({msg:"Item deleted"})
        
    }catch (error) {
        res.status(500).json({msg:'Server problem'})
    }

})
module.exports = router;