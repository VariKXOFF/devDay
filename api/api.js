const router = require("express").Router();
const User = require("./models/user");
const parser = require("body-parser").json();

router.post("/", parser, async (req, res) => {
    console.log(req.body);
    await User(req.body).save();
    res.json({"msg": "ok"});
});

module.exports = router