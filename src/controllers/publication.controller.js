const express= require("express")

const Publication = require("../models/publication.models")

const router= express.Router()

router.post("", async (req, res)=>{
    try {
        const publication= await Publication.create(req.body)
        return res.status(200).send({publication})
    } catch (error) {
        return res.status(500).send({message:error.message})
    }
})

module.exports= router