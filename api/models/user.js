const db = require("../db")

const UserSchema = new db.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    score: {
        type: Number,
        default: 0
    },
    lvl: {
        type: Number,
        default: 1
    }
})

const user = db.model("User", UserSchema)

module.exports = user