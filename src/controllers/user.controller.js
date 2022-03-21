const express =require("express")

const User= require("../models/user.models")

const router= express.Router()

const { body, validationResult } = require('express-validator');


router.post("",
 async (req, res)=>{
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        const user= await User.create(req.body)
        return res.status(200).send({user})
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports= router