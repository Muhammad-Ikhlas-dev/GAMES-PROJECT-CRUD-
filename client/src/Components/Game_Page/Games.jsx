import React,{useState} from 'react';
import Game from './GameFolder/Game/Game.jsx';
import toast,{Toaster} from 'react-hot-toast';
import axios from 'axios'; 

const gamesDisplayer=(props)=>{

    let allGames=props.games.map((game,index)=>(
        <Game title={game.title} key={index}
        triggerRefresh={props.triggerRefresh} 
        description={game.description} genre={game.genre}
        update_click_handler={(event)=>{update_click_handler(event)}}
        />
    ))
    
    return(
      <>
    <div className='grid grid-cols-5 gap-12 items-start'>
       {allGames}
    </div>
       <Toaster/>
      </>
)
}

export default gamesDisplayer;