const db = require('../models')
const Admin = db.admin
const bcrypt = require('bcrypt')


exports.register = (req,res)=>{
    const admin = new Admin({
        username: req.body.username,
        name: req.body.name,
        password: req.body.password,
        contact: req.body.contact,
        image: req.body.image
    })
    Admin.findOne({username: admin.username})
    .then((result)=>{
        if (result){
            res.status(409).send({
                message:result.message || "Username sudah digunakan"
            }) 
        }
        else{
            bcrypt.hash(admin.password, salt=10, cb=(err, hash)=>{
                if (err){
                    res.status(409).send({
                        message:err.message || "some error occured"
                    })
                }
                else{
                    admin.password = hash
                    Admin.create(admin)
                    .then((result)=>{
                        res.send(result)
                    })
                    .catch((err)=>{
                        res.status(409).send({
                            message:err.message || "error while create admin"
                        })
                    })
                }
            })
        }
    })
    .catch((err)=>{
        res.status(409).send({
            message:err.message || "error while create admin"
        })
    })
}

exports.login = (req,res)=>{
    const admin = new Admin({
        username: req.body.username,
        name: req.body.name,
        password: req.body.password,
        contact: req.body.contact,
        image: req.body.image
    })
    Admin.findOne({
        username: admin.username
    })
    .then((result)=>{
        if(result){
            if(bcrypt.compareSync(admin.password, result.password)){
                res.send(result)
            }
            else{
                res.status(409).send({
                    message:result.message || "Password salah"
                }) 
            }
        }
        else{
            res.status(409).send({
                message: "Username tidak terdaftar"
            }) 
        }
    })
}