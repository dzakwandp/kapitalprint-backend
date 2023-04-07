module.exports = (mongoose) =>{
    const schema = mongoose.Schema(
        {
            title: String,
            body: String,
            author: String,
            image: String
        },
        { timestamps: true }
    )
    schema.method("toJSON", function(){
        const {__v, _id, ... object} = this.toObject()
        object.id = _id
        return object
    })

    const Blog = mongoose.model("blogs", schema)
    return Blog
}