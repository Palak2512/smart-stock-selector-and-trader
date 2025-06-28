const { model } = require("mongoose");
const { UsersSchema } = require("../Schema/UsersSchema");

const UsersModel = new model("Users", UsersSchema);

module.exports = { UsersModel };
