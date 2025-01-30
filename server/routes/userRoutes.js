const express = require('express')
const { addUser, getAllUsers } = require('../controller/userController')
const userRouter = express.Router()

//add user
userRouter.post('/add-user', addUser)
//get all users
userRouter.get('/all-users', getAllUsers)

module.exports = userRouter