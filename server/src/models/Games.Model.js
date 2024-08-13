const {Schema,model}=require('mongoose');

const gameSchema=new Schema({
    title:{
          type:String,
          required:[true,"please give name of the game"],
          unique:[true,"Game with this name already exists"]
        },
    genre:{
        type:String,
        required:[true,"please give genre of the game"],
    },
    description:{
        type:String,
        required:[true,"please give description of the game"],
}},{timestamps:true})

const Game=new model('Game',gameSchema);
module.exports={Game};