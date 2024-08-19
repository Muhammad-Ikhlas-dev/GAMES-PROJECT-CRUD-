import React,{useState} from 'react';
import Game from './GameFolder/Game/Game.jsx';
import toast,{Toaster} from 'react-hot-toast';
import axios from 'axios'; 

const gamesDisplayer=(props)=>{
    const [updateClicked,setUpdateClicked]=useState(false);
    
    async function update_click_handler(event){
        event.preventDefault();
        setUpdateClicked(!updateClicked)
    }

    async function done_click_handler(title_to_update,event,EmptyPreventerNewGameInfo){
      event.preventDefault();
            try{
let response=await axios.put('http://localhost:8000/game?title_to_update='+title_to_update,EmptyPreventerNewGameInfo)
            toast.success(response.data.message,{
                position: 'top-right',
                style: {
                    height: "60px",
                    border: '1px solid green'
                },
            })            
              props.triggerRefresh();
        }
        catch(error){
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
            else if(error?.response?.data?.message){ //error response from manual validations
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
            else{ //axios related error or error in above try block
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
          props.triggerRefresh(); //change state calluseEffect oR we can say 
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

    let allGames=props.games.map((game,index)=>(
        <Game title={game.title} key={index} 
        description={game.description} genre={game.genre}
        
        deleteClicked={(event)=>{deleteGame(game.title,event)}} 

        updateClicked={updateClicked}
        done_click_handler={(event,EmptyPreventerNewGameInfo)=>{
                done_click_handler(game.title,event,EmptyPreventerNewGameInfo)
            }}
        update_click_handler={(event)=>{update_click_handler(event)}}
        // tiTle={title}
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