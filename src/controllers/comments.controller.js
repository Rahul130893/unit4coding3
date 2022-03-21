const express= require("express")

const Comment = require("../models/comment.models")

const router= express.Router()

router.post("", async (req, res)=>{
    try {
        const comment= await Comment.create(req.body)
        return res.status(200).send({comment})
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports= router