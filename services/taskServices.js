const Task = require('../models/taskModel')


const getTaskById = async (id) => {
    const task = await Task.findOne(
        {
            where: { id: id }
        }
    );

    return { 
        status: !!task ? 200 : 404, 
        task: task,
        message: !!task ? "" : `Task with id ${id} not found.`
    }
}


module.exports = { 
    getTaskById
}