const {validateSchema}=require('../middlewares/validation_mw.js');

const {game_Schema}=require('../validations/game_Schema.js');
const {delete_game_Schema}=require('../validations/del_game_Schema.js');
const {title_to_update_Schema}=require('../validations/title_to_update_Schema.js');
const { update_game_Schema } = require('../validations/update_game_Schema.js');

const {game_post_handler,games_get_handler,game_del_handler, game_update_handler}=
require('../controllers/Game.Controller.js');

const express=require('express');
const Router=express.Router();

Router.post('/game', validateSchema(game_Schema,null,null), game_post_handler);
Router.get('/games',games_get_handler);
Router.delete('/game/:title',validateSchema(null,null,delete_game_Schema),game_del_handler);
Router.put('/game',validateSchema(update_game_Schema,title_to_update_Schema,null),game_update_handler)

module.exports=Router;