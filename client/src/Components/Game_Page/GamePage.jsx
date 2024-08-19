import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from '../logo.jsx';
import Header from '../Header.jsx';
import AddGame from './AddGame.jsx';
import Games from './Games.jsx';
import LogoutBtn from '../LogoutBtn.jsx';

const gamePage = () => {
  const [games, setGames] = useState([])
  const [calluseEffect, setcalluseEffect] = useState(false)

  //we will want to run this useEffect whenever we want to get cards of games like 
  //after every post request or delete request or update request and on first render 
  //ofcourse
  useEffect(() => {
    // console.log("use Effect chala")
    axios.get('http://localhost:8000/games').then((response) => {
      console.log("games fetched:", response.data.games)
      setGames(response?.data?.games)
    }).catch((error) => {
      console.log(error)
    })
  }, [calluseEffect]) //run on first render(as on first render //also calluseEffect
  //  changes)  and run when calluseEffect changes

  function triggerRefresh() {
    // console.log("refresh chala")
    setcalluseEffect(!calluseEffect) //note: here true false doesn't matter all matters
    //is the state changing or not, every time this function will run the state will
    //change and the useEffect will execute instead of whole page
  }
                                    //Delete function

  return (
    <div className='min-h-[100%] bg-[#40670C]
        flex flex-col items-center gap-8 pb-12'>
      {/* Top Display */}
      <div className="flex justify-between px-[2px] items-center w-full">
        <Logo />
        <Header />
        {/* <div className='ml-28'></div> */}
        <LogoutBtn />
      </div>

      {/* AddGame */}
      <AddGame triggerRefresh={triggerRefresh} />

      {/* <div className="bg-black w-96 h-52 flex justify-center items-center flex-col
      gap-12">
        <p>Do you want to delete the game?</p>
             <div className='flex gap-12'>
                 <button className="bg-green-500 px-4 hover:bg-green-700">Yes</button>
                 <button className='bg-red-500 px-4 hover:bg-red-700'>No</button>
             </div>
           </div> */}
           
      {/* {Update Game} */}
      {/* <UpdateGame onGameUpdated={triggerRefresh} /> */}
      {/* Games Display */}
      <Games games={games} triggerRefresh={triggerRefresh}/>
    </div>
  )
}

export default gamePage;