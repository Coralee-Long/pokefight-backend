const express = require('express')
const userRouter = express.Router()
const User = require('../models/User')
const verify = require('../middleware/verify')

userRouter.get("/", verify, async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    }
    catch (err) {
        res.status(404).send(err)
    }
})

userRouter.get("/:first_name", async (req, res) => {
    try {
        const oneUser = await User.findOne({ first_name: req.params.first_name })
        res.json(oneUser)
    }
    catch (err) {
        res.status(404).send(err)
    }
})

module.exports = userRouter