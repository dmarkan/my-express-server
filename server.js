const express = require('express');

const app = express();

app.get("/", function (req, res) {
    res.send("Hello World!");
})

app.get("/contact", function (req, res) {
    res.send("Contact me: markandarko@yahoo.com");
})

app.get("/about", function (req, res) {
    res.send("My name is Darko Markan, I'm programmer");
})

app.get("/hobbies", function (req, res) {
    res.send("<ul><li>gameDev</li><li>movies</li><li>coffie</li>");
})

app.listen(3000, function () {
    console.log("Server started on port 3000");
});
