const express = require('express');
const cors = require('cors');
const usersRoute = require("./src/routes/users");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(cors());
//app.use("/src", express.static('src'));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use("/user",usersRoute);


app.listen(8080, () => console.log("app is running"));
