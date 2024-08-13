const {z:zod}=require('zod');

const game_Schema=zod.object({
    title:zod.string().max(25).min(1),
    genre:zod.string().max(20).min(1),
    description:zod.string().max(200).min(1)
})

module.exports={game_Schema}