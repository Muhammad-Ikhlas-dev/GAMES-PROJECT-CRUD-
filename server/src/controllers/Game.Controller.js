const { Game } = require("../models/Games.Model");

async function game_post_handler(req,res){
    try{
        const {body}=req;
        const {title,genre,description}=body;
        const isTitleDuplicate=await Game.findOne({title})
        if(isTitleDuplicate){
            return res.status(400).json({
                message:"game with this title already exists",
                success:false
            })
        }
        const game=await Game.create({title,genre,description});
        console.log("the gamme added is:",game);
        return res.status(200).json({
            message:"the game has beed added successfully",
            success:true
        })
    }
    catch(error){
        console.log("error chala: ",error)
        return res.status(500).json({
            error,
            success:false,
        })
    }
}
async function games_get_handler(req,res){
    try{
            const games=await Game.find({})
        if(!games){
            return res.status(400).json({
                message:"currently no games found",
                success:true
            })
        }
        return res.status(200).json({
            games,
            success:true
        })        
}
    catch(error){
        return res.status(500).json({
            error,
            success:false
    })
    }
}

async function game_del_handler(req, res) {
    try {
        const { params } = req;
        const { title } = params;

        // Find and delete the game with the given title
        const deletedGame = await Game.deleteOne({ title });

        if (deletedGame.deletedCount === 0) {
            return res.status(400).json({
                message: "The game not found",
                success: false
            });
        }
        console.log("deletedGame is: ",deletedGame)
         //else
        return res.status(200).json({
            message: "The game has been deleted successfully",
            success: true
        });
    } catch (error) {
        return res.status(500).json({
            error,
            success: false
        });
    }
}
async function game_update_handler(req,res){
    try{
const {query,body}=req;
const {title}=query;
const {updated_title,updated_description,updated_genre}=body;
const game=await Game.findOne({title})
if(!game){
    return res.status(400).json({
        messasge:"The game with this title is not found!!!",
        success:false
    })
}
//update the game
game.title=updated_title,
game.description=updated_description,
game.genre=updated_genre
//save the updated game
await game.save()

return res.status(200).json({
    success: true,
    message: "Game updated successfully",
    game
});
    }
    catch(error){
         res.status(500).json({
            error,
            success:false
         })
    }
}

module.exports={game_post_handler,games_get_handler,game_del_handler,game_update_handler};