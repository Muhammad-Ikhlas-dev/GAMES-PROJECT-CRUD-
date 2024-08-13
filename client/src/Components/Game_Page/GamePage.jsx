import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Logo from '../logo.jsx';
import Header from '../Header.jsx';
import AddGame from './AddGame.jsx';
import Games from './Games.jsx';
import LogoutBtn from '../LogoutBtn.jsx';
import toast, { Toaster } from 'react-hot-toast';

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
  async function deleteGame(title, event) {
    event.preventDefault();
    try {
      let response = await axios.delete('http://localhost:8000/game/' + title)
      toast.success(response.data.message, {
        position: 'top-right',
        style: {
          height: "60px",
          border: '1px solid green'
        },
      })
      triggerRefresh(); //change state calluseEffect oR we can say 
      //run useEffect indirectly 
    }
    catch (error) {
      console.log(error)
      if (error?.response?.data?.issue) { //error response came from zod
        console.log(error.response.data.issue)
        toast.error(error.response.data.issue[0].message + ' at ' + error.response.data.issue[0].path)
          , {
          position: 'top-right',
          style: {
            height: "60px",
            border: '1px solid green'
          },
        }
      }
      else if (error?.response?.data?.message) { //error response from manual validations
        // console.log(error)
        toast.error(error.response.data.message)
          , {
          position: 'top-right',
          style: {
            height: "60px",
            border: '1px solid green'
          },
        }
      }
      else { //axios related error
        toast.error(error.message)
          , {
          position: 'top-right',
          style: {
            height: "60px",
            border: '1px solid green'
          },
        }
      }
    }
  }

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
      <AddGame onGameAdded={triggerRefresh} />

      {/* Games Display */}
      <Games games={games} clicked={deleteGame} />
      <Toaster />
    </div>
  )
}

export default gamePage;