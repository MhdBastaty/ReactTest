const express = require('express');
const router = express.Router();
const Signup = require('../model/register')
// const {upload} = require('../helpers/fileHelper');
const multer = require('multer')
const upload = multer()


// router.post('/register',upload.fields([{ name: 'file', maxCount: 3 }]),  async(req,res) => {
router.post('/register',upload.single('file'), async(req,res) => {
    
    //const url = req.protocol + '://' + req.get('host')
    // console.log(file)
    // const newUser = new Signup({
    //     name:req.body.name,
    //     contact:req.body.contact,
    //     remark:req.body.remark,
    //     file: req.files['file'][0].path
        
    // })
    const newUser = new Signup({
        name:req.body.name,
        contact:req.body.contact,
        remark:req.body.remark,
        file: req.files
        
    })
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
        return savedUser
    } catch (error) {        
        res.status(500).json(error)
    }
});



router.get("/users", async (req, res) => {
    const query = req.query.new;                              // to add specific users number from URL
    try {
        const users = query
        ? await user.find().sort ({_id: -1}).limit (5) : await Signup.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;