const router = require("express").Router();
const User = require("./models/user");
const parser = require("body-parser").json();

sendJSON = (res, status, data) => {
    res.status(status)
    res.json(data)
    console.log(data)
}
sendError = (res, status, err) => {
    res.status(status)
    res.json(err)
    console.log(err)
}

router.post("/", parser, async (req, res) => {
    console.log(req.body);
    await User(req.body).save();
    res.json({"msg": req.body});
});

router.post("/update", parser, async (req, res) => {
    await User.findOneAndUpdate(
        {email: req.body.email},
        {score: req.body.score},
        {useFindAndModify: false, new: true})
    res.json({"msg": req.body});
})

module.exports = router