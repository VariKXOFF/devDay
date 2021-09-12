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
    finish: {
        type: Date,
        default: 0
    }
},
    {
        timestamps: true
    })

const user = db.model("User", UserSchema)

module.exports = user