const router = require("express").Router();
const {PrismaClient} = require('@prisma/client');
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();


router.post('/submit-quiz', (req, res) => {
    const quizName = req.body.quizName;

    let user = {};
    prisma.user.findOne({where: {email: req.body.email}}).then(result => {
        user = result;
        if (user.token === req.headers.auth) {

            switch (quizName) {
                case "pp2":
                    prisma.user.update({
                        where: {email: req.body.email},
                        data: {pp1Result: Number.parseFloat(req.body.quizResult)}
                    }).then(r => res.send(r))
                    break;
                case "pp3":
                    prisma.user.update({
                        where: {email: req.body.email},
                        data: {pp2Result: Number.parseFloat(req.body.quizResult)}
                    }).then(r => res.send(r));
                    break;
                case "eq":
                    prisma.user.update({
                        where: {email: req.body.email},
                        data: {EquipmentResult: Number.parseFloat(req.body.quizResult)}
                    }).then(r => res.send(r))
                    break;

            }
        }
    })


});


module.exports = router;
