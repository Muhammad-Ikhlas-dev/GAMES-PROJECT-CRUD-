import React,{useState} from 'react';
import Game from './GameFolder/Game/Game.jsx';

const gamesDisplayer=(props)=>{
  console.log("games re-rendered")
  let sortedGames=[...props.games]
                      /* SORT GAMES ACCORDING TO DATE THROUGH MANUAL LOGIC */
  for(let i=0;i<sortedGames.length;i++)
  {
      for(let j=i+1;j<sortedGames.length;j++){
        if(new Date(sortedGames[j].createdAt)>new Date(sortedGames[i].createdAt)){
        let temp=sortedGames[i];
        sortedGames[i]=sortedGames[j];
        sortedGames[j]=temp
      }
    }
  }
                      /* SORT GAMES ACCORDING TO DATE THROUGH BUILT-IN */
    // sortedGames.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  console.log("original games array:",props.games)
  console.log("sorted games: ",sortedGames)
    let allGames=sortedGames.map((game,index)=>{
      return(
        <Game title={game.title} key={game.title}
        description={game.description} genre={game.genre}
        />
      )
})
    
    return(
      <>
    <div className='grid grid-cols-5 gap-12 items-start'>
       {allGames}
    </div>
      </>
)
}

export default gamesDisplayer;