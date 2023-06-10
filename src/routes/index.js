const categoryRouter = require('./category.router');
const routerTask = require('./task.router');
const userRouter = require('./user.router') // la importamos
const express = require('express');
const router = express.Router();

// colocar tus rutas aquí
router.use("/users", userRouter); // la ejecutamos
router.use("/tasks", routerTask)
router.use("/categories", categoryRouter)
module.exports = router;