const express = require("express")
const parser = require("body-parser").json()
const app = express()

app.use(express.urlencoded(true));
app.use(express.json());
app.use(parser);
app.use(express.static("./public"));
app.use("/", require("./server/router"));
app.use("/api", require("./api/api"));

// app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set("views", "./server/templates");

app.listen(5000);