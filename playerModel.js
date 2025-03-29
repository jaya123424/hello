
const mangoose = require('mongoose')

const player = mangoose.Schema({
    first_name:{
        type : String,
        required : true
    },
    last_name :{
        type : String,
        required : true
    },
    email :{
        type : String,
        required : true
    },
    phone:{
        type: Number,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    available:{
        type:Boolean,
        required:true
    }

})

module.exports = mangoose.model('player',player)