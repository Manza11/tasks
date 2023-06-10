const catchError = require('../utils/catchError');
const User = require('../models/User');
const Task = require('../models/Task');
const Category = require('../models/Category');

const getAll = catchError(async(req, res) => {
    const users = await User.findAll({include: [{model: Task,
        include: [Category]
    }]})
    return res.json(users)
});

const create = catchError(async(req, res) => {
    const {first_name, last_name, email, password, birthday, image_url} = req.body
    const user = await User.create({
        first_name,
        last_name,
        email,
        password,
        birthday,
        image_url
    })
    return res.json(user)
});

const getOne = catchError(async(req, res) => {
    const {id} = req.params
    const user = await User.findByPk(id, {include: [{model: Task,
        include: [Category]
    }]})
    return res.json(user)
});

const remove = catchError(async(req, res) => {
    const {id} = req.params
    const user = await User.destroy({where: {id}})
    return res.sendStatus(204)
})

const update = catchError(async(req, res) =>{
    const {id} = req.params
    const {first_name, last_name, email, password, birthday, image_url} = req.body
    const user = await User.update(
        {first_name, last_name, email, password, birthday, image_url},
        {where: {id}, returning: true}
    )
    return res.status(201).json(user[1][0])
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}