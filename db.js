
const mangoose = require('mongoose')

const connectdb = async ()=>{
    try{
        await mangoose.connect('mongodb+srv://jayakrishnajk56:EqtlrOcD43J5A2GH@cluster0.ytrac.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log('db connected')
    }catch(err){
        console.log(err)
    }
}


module.exports = connectdb