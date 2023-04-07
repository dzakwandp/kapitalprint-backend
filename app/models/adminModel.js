module.exports = (mongoose)=>{
    const schema = mongoose.Schema(
        {
            username: String,
            name: String,
            password: String,
            contact: String
        },
        { timestamps: true }
    )
    schema.method("toJSON", function(){
        const {__v, _id, ... object} = this.toObject()
        object.id = _id
        return object
    })

    const Admin = mongoose.model("admin", schema)
    return Admin
}