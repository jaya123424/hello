
const playerModel = require('../models/playerModel')
const player = require('../models/playerModel')

const getPlayers = async(req,res)=>{

        try{
            const data = await player.find({})

            res.status(200).send({
                success : true,
                message: 'Data of players',
                data
            })
        }catch(err){
            res.status(404).send({
                success : false,
                message : 'internal error',
                err
            })
        }

}

const addPlayers = async(req,res)=>{

      try{

          const {first_name, last_name, email, phone, role, available} = req.body;

         //if(!first_name || !last_name || !email || !phone || !role|| !availble){
           //   return res.status(600).send({
             //    success:false,
               //  message:'each field is mandtory'
              //})
          //}

          await player({
              first_name,
              last_name,
              email,
              phone,
              role,
              available,
          }).save()
          
            res.status(200).send({
                success : true,
                message: 'Data added successfully'
            })

           
      }catch(err){
         console.log(err)
            res.status(404).send({
                success : false,
                message : 'internal error',
                err
            })
        }  


}

const updatePlayers = async(req,res)=>{

   try{
     const player_id = req.params.id;

     await player.updateOne({_id:player_id},{$set:req.body})

     res.status(200).send({
        success:true,
        message:"player updated successfully"
     })


   }catch(err){
         console.log(err)
            res.status(404).send({
                success : false,
                message : 'internal error',
                err
            })
        }  

}

const deletePlayers = async(req,res)=>{

    try{
        const player_id = req.params.id;

        await player.deleteOne({_id:player_id})

        res.status(200).send({
            success: true,
            message: 'player deleted successfully'
        })

    }catch(err){
         console.log(err)
            res.status(404).send({
                success : false,
                message : 'internal error',
                err
            })
        }  


}

module.exports = {getPlayers,addPlayers,updatePlayers,deletePlayers}