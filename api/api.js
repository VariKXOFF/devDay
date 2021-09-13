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
    await User(req.body).save();
});

router.post("/update", parser, async (req, res) => {
    await User.findOneAndUpdate(
        {email: req.body.email},
        {score: req.body.score, question: req.body.question, finish: req.body.finish},
        {useFindAndModify: false, new: true})
})

router.get("/", async (req, res) => {
    const data = await User.find({});
    res.json(data);
});

module.exports = router