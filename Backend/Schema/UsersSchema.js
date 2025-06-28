const { Schema } = require("mongoose");
const bcrypt = require("bcryptjs");

const UsersSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "Username is required"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    balance: Number,
    createdAt: {
        type: Date,
        default: new Date(),
    }
});

UsersSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
});

module.exports = { UsersSchema };