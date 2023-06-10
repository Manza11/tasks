const Category = require("./Category");
const Task = require("./Task");
const User = require("./User");


User.hasMany(Task)
Task.belongsTo(User)

Task.belongsTo(Category)
Category.hasMany(Task)