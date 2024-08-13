import React from 'react';
import Game from './Game.jsx';

const gamesDisplayer=(props)=>{

    let allGames=props.games.map((game,index)=>( 
        <Game title={game.title} key={index} clicked={(event)=>{props.clicked(game.title,event)}} 
        description={game.description} genre={game.genre}/>
    ))
    
    return(
    <div className='grid grid-cols-5 gap-12 items-start'>
       {allGames}
    </div>
)
}

export default gamesDisplayer;