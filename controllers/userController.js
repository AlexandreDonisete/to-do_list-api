const User = require("../models/userModel")


const getUsers = async (req, res) => {

    const users =  await User.findAll();
    res.status(200).json(users);
}

const getUser = async (req, res) =>{
 
    const user = await User.findOne({
        where:{
            id: req.params.id
        }
    })

    res.status(200).json(user);
}

const createUser = async (req, res) =>{
    const user = await User.create(req.params);
    res.status(201).json(user);
}

const updateUser = async(req, res) =>{


    const userId = parseInt(req.params.id);

    await User.update(
        req.body,
        {
          where: {
            id: userId,
          },
        },
    )
    
    res.status(200).json(user);
}


const deleteUser = async(req, res)=>{

    const userId = parseInt(req.params.id);

    const deletedUser = findOne(req, res);

    await User.destroy(
        {
            where: {
                id: userId
            },
        }
    )

    res.status(200).json(deletedUser)
        
}






module.exports = {getUsers, getUser, createUser, updateUser, deleteUser}