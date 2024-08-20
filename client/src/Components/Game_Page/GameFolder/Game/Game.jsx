import React, { useState} from 'react';
import toast,{Toaster} from 'react-hot-toast';
import GameContent from '../GameContent.jsx';
import DeleteComponent from '../DeleteGame.jsx';
import UpdateComponent from '../UpdateGame.jsx';
import cardBG from '../../../../assets/freeFire.jpg';
import './Game.css';
import PopModal from '../../../CommonComponents/PopModal/PopModal.jsx';
import ConfirmationContent from '../../../CommonComponents/PopModal/ConfirmationContent.jsx';
import Form from '../Form.jsx';
import axios from 'axios';


const game = (props) => {
    let [crossClicked,setCrossClicked]=useState(false);
    let [updateClicked,setUpdateClicked]=useState(false);

    const [newGameInfo,setNewGameInfo]=useState({updated_title:props.title,
        updated_description:props.description,
        updated_genre:props.genre
    })

    async function deleteGame(event) {
        event.preventDefault();
        try {
          let response = await axios.delete('http://localhost:8000/game/' + props.title)
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

    async function UpdateGame(event){
        try{
            event.preventDefault();
                let EmptyPreventerGameInfo={
                    updated_title: newGameInfo.updated_title || props.title,
                    updated_description:newGameInfo.updated_description || props.description,
                    updated_genre:newGameInfo.updated_genre || props.genre,
                }
                setNewGameInfo({updated_title:props.title,
                    updated_description:props.description,
                    updated_genre:props.genre})
                // props.done_click_handler(event,EmptyPreventerGameInfo)
            let response=await axios.put('http://localhost:8000/game?title_to_update='+props.title,EmptyPreventerGameInfo)
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

    
    return (
        <div className='min-h-72 w-48 px-4 pb-4 pt-2 bg-white text-green-500 text-center 
        cursor-pointer group flex flex-col items-center overflow-hidden'>

                                {/* {DELETE/UPDATE} */}
            <div className='flex justify-between w-full items-center'>
                                     {/* UPDATE */}
                <UpdateComponent clicked={(event)=>{
                    event.preventDefault()
                    setUpdateClicked(!updateClicked)
                }}
                    updateClicked={updateClicked}/>
                                     {/* DELETE */}
                <DeleteComponent setCrossClicked={setCrossClicked}/>
            </div>

                                         {/* {BG IMAGE OF CARD} */}
            <img className="z-0 object-cover object-center h-[90%] mt-4 cursor-pointer
            group-hover:scale-105 transition-all duration-500 ease-in-out"
                src={cardBG} alt="unable to load" />
                
                                    {/* GAME CARD CONTENT */}
                <GameContent
                title={props.title}
                genre={props.genre}
                description={props.description} />

                {/* CONTENT WHEN UPDATE CLICKED */}


{updateClicked ?
<PopModal setUpdateClicked={setUpdateClicked} action='update'>
    <Form title={props.title} description={props.description} genre={props.genre}
    UpdateGame={UpdateGame}
    setUpdateClicked={setUpdateClicked}
    setNewGameInfo={setNewGameInfo}
    newGameInfo={newGameInfo}
    action="update"/>
</PopModal>
:null}
{crossClicked?
<PopModal setCrossClicked={setCrossClicked} action='delete'>
    <ConfirmationContent 
    title={props.title} 
    delClicked={deleteGame}
    setCrossClicked={setCrossClicked}/>
</PopModal>
:null}
<Toaster/>
        </div>
    )
}

export default game;