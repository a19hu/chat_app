const mongoose= require('mongoose')

const messagemodel = mongoose.Schema({
    sender:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
    chat:{type:mongoose.Schema.Types.ObjectId,ref:"chat"},
    content:{type:String,trim:true 

    }
}
,
{
    timestamps:true
}
)

const Message= mongoose.model('Message',messagemodel)


module.exports=Message