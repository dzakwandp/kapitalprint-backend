const db = require('../models')
const Blog = db.blogs

exports.findAll = (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            res.statur(500).send({
                message: err.message || "error when getting data"
            })
        });
}

exports.create = (req, res) => {
    const item = new Blog({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author,
        image: req.body.image
    })
    
    item.save(item)
    .then ((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.status(409).send({
            message:err.message || "error while create items"
        })
    })
}

exports.findOne  = (req,res) =>{
    const id = req.params.id

    Blog.findById(id)
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        res.status(409).send({
            message:err.message || "error while show items"
        })
    })
}

exports.update = (req,res)=>{
    const id = req.params.id

    Blog.findOneAndUpdate(id, req.body)
    .then((result)=>{
        if(!result){
            res.status(404).send({
                message: "Items not found"
            })
        }

        res.send({
            message: "Items was updated!"
        })
    })
    .catch((err)=>{
        res.status(409).send({
            message:err.message || "error while update items"
        })
    })
}

exports.delete = (req,res)=>{
    const id = req.params.id

    Blog.findOneAndRemove(id)
    .then((result)=>{
        if(!result){
            res.status(404).send({
                message: "Items not found"
            })
        }

        res.send({
            message: "Items was deleted!"
        })
    })
    .catch((err)=>{
        res.status(409).send({
            message:err.message || "error while deleteing items"
        })
    })
}