const express = require("express")
const parser = require("body-parser").json()
const app = express()

const port = process.env.PORT || 5000

app.use(express.urlencoded(true));
app.use(express.json());
app.use(parser);
app.use(express.static("./public"));
app.use("/", require("./server/router"));
app.use("/api", require("./api/api"));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set("views", "./server/templates");

app.listen(port);