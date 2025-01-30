const UserModel = require('../model/userModel')

//add user
const addUser = async (req, res) => {
    try {

        const userExists = await UserModel.findOne({email: req.body.email})

        if (userExists) {
            return res.send({
                success: false,
                message: "User already exists!"
            })
        }

        const newUser = new UserModel(req.body)
        await newUser.save()

        res.send({
            success: true,
            message: "User added successfully"
        })
        
    } catch (error) {
        return res.send({
            success: false,
            message: error
        })
    }
}

//get all users
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await UserModel.find()

        res.send({
            success: true,
            message: allUsers
        })
    } catch (error) {
        
    }
}

module.exports = {
    addUser,
    getAllUsers
}