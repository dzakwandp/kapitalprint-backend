module.exports = (mongoose) =>{
    const schema = mongoose.Schema(
        {
            title: String,
            desc: String,
            image: String
        },
        { timestamps: true }
    )
    schema.method("toJSON", function(){
        const {__v, _id, ... object} = this.toObject()
        object.id = _id
        return object
    })

    const Item = mongoose.model("items", schema)
    return Item
}