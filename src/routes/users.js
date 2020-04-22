const router = require("express").Router();
const {PrismaClient} = require('@prisma/client');
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();


router.post('/auth-user', (req, res) => {

    prisma.user.findOne({where: {email: req.body.email}}).then(result => {
        if (result.password === jwt.sign(req.body.password,"abaz5393")) {

            res.status(200).send({fullName:result.fullName,companyName:result.companyName,email:result.email,post:result.post,token: result.token,pp2Result:result.pp1Result,pp3Result:result.pp2Result,eqResult:result.EquipmentResult});
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
router.post("/get-user",(req,res)=>{
    prisma.user.findOne({where:{email:req.body.email},select:{email:true,fullName:true,companyName:true,post:true,pp1Result:true,pp2Result:true,EquipmentResult:true,token:true}}).then(user=>{

        if (user.token===req.headers.auth){
            res.status(200).send(user);
        }
        else {res.status(403).send({token:null});}
    }).catch(e=>{
        console.log(e);
        res.status(404).send({token:null})
    })
});

module.exports = router;
