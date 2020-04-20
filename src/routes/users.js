const router = require("express").Router();
const {PrismaClient} = require('@prisma/client');
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();


router.post('/auth-user', (req, res) => {

    prisma.user.findOne({where: {email: req.body.email}}).then(result => {
        if (result.password === jwt.sign(req.body.password,"abaz5393")) {

            res.status(200).send({fullName:result.fullName,companyName:result.companyName,email:result.email,post:result.post,token: result.token});
        } else {
            res.status(400).send({token: null})
        }
    }).catch(err=>res.status(400).send({token: null}))
});

router.post('/register-user', (req, res) => {
    prisma.user.create({
        data: {
            fullName:req.body.fullName,
            companyName: req.body.companyName,
            email: req.body.email,
            post:req.body.post,
            password: jwt.sign(req.body.password, "abaz5393"),
            token: jwt.sign(req.body.email, "abaz5393")
        }
    }).then(result => res.status(200).send({fullName:result.fullName,companyName:result.companyName,email:result.email,post:result.post,token: result.token})).catch(err => {
        console.log(err);
        res.status(400).send();
    });


});

module.exports = router;
