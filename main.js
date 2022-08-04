const express = require("express");
const app = express();

app.listen(8088, () => {
    console.log("listening on 8088")
});

app.get("/chan", (req, res) => {
    res.send("찬을 만날 수 있는 페이지입니다.")
});

app.get("/ham", (req, res) => {
    res.send("2을 만날 수 있는 페이지입니다.")
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});