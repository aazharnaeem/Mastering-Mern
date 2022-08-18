const  mongoose  = require("mongoose");


const mongosoe = requrie('mongoose');

const Schema = mongoose.Schema;

const blogSchema = Schema({
    user:{
        type:Schema.Types.ObjectId,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        // requried:true
    }
},{
    timeStamps:true
});


const blog = mongoose.model('blog',blogSchema);

module.exports= blog;