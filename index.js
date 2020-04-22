const express = require('express');
const cors = require('cors');
const usersRoute = require("./src/routes/users");
const quizRoute = require("./src/routes/quiz");
const bodyParser = require("body-parser");
const app = express();
// const {PrismaClient} = require('@prisma/client');
// const prisma = new PrismaClient();
//
// prisma.user.findMany().then(re=>console.log(re));

app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(cors());

//app.use("/src", express.static('src'));

app.use("/user", usersRoute);
app.use("/quiz", quizRoute)


app.listen(8080, () => console.log("app is running"));
