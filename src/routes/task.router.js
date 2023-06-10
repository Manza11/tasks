const { getAll, create, getOne, remove, update } = require('../controllers/task.controllers');
const express = require('express');

const routerTask = express.Router();

routerTask.route('/')
    .get(getAll)
    .post(create);

routerTask.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerTask;