const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userScheme=new Schema(
    {
    name:{ 
        type:String,
        required:true
    },
    id:{ 
        type:String,
        required:true
    },
   
    grade1:{ 
        type:String,
    },
    grade2:{ 
        type:String,
    },
    grade3:{ 
        type:String,
    },

},{timestamps:true});

const User=mongoose.model('User',userScheme);
module.exports=User;