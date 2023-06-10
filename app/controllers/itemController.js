const db = require('../models')
const Item = db.items

exports.findAll = (req, res) => {
    Item.find()
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
    const item = new Item({
        title: req.body.title,
        desc: req.body.desc,
        image: req.body.image
    })
    
    item.save(item)
    .then ((result)=>{
        res.send({message: "New item was added!"})
    })
    .catch((err)=>{
        res.status(409).send({
            message:err.message || "error while create items"
        })
    })
}

exports.findOne  = (req,res) =>{
    const id = req.params.id

    Item.findById(id)
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

    Item.updateOne({_id:id}, req.body)
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

    Item.deleteOne({_id:id})
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