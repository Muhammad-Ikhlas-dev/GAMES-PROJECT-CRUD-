import React, { useState,useContext} from 'react';
import toast,{Toaster} from 'react-hot-toast';
import GameContent from '../GameContent.jsx';
import DeleteComponent from '../DeleteGame.jsx';
import UpdateComponent from '../UpdateGame.jsx';
import cardBG from '../../../../assets/freeFire.jpg';
import './Game.css';
import PopModal from '../../../CommonComponents/PopModal/PopModal.jsx';
import ConfirmationContent from '../../../CommonComponents/PopModal/ConfirmationContent.jsx';
import UpdateForm from '../Forms/UpdateForm.jsx';
import { useNavigate } from 'react-router-dom';


const game = (props) => {
  console.log("game re-rendered")
    const navigate=useNavigate()

    const [crossClicked,setCrossClicked]=useState(false);
    const [updateClicked,setUpdateClicked]=useState(false);
    const [cardClicked,setCardClicked]=useState(false)
    
    return (
        <div className='min-h-72 w-48 px-4 pb-4 pt-2 bg-white text-green-500 text-center 
        cursor-pointer group flex flex-col items-center overflow-hidden'
        onClick={(e)=>{setCardClicked(true);
            e.stopPropagation();
        }}>

                                {/* {DELETE/UPDATE} */}
            <div className='flex justify-between w-full items-center'>
                                     {/* UPDATE */}
                <UpdateComponent clicked={(event)=>{
                    event.preventDefault()
                    setUpdateClicked(true)
                    event.stopPropagation()
                    setCardClicked(false)
                }}
                    updateClicked={updateClicked}/>
                                     {/* DELETE */}
                <DeleteComponent setCrossClicked={setCrossClicked} 
                setCardClicked={setCardClicked}/>
            </div>

                                         {/* {BG IMAGE OF CARD} */}
            <img className="z-0 object-cover object-center h-[90%] mt-4 cursor-pointer
            group-hover:scale-105 transition-all duration-500 ease-in-out"
                src={cardBG} alt="unable to load" />
                                          {/* {TITLE OF GAME} */}
              <h1 className='font-bold text-xl bg-green-700 text-white p-1 mt-2'>
                {props.title}
              </h1>

                {/* CONTENT WHEN UPDATE CLICKED */}
{cardClicked&&
<PopModal setCardClicked={setCardClicked} action='cardInfoShow'>
                        {/* GAME CARD CONTENT */}
 <GameContent
                title={props.title}
                genre={props.genre}
                description={props.description} 
                setCardClicked={setCardClicked}
                // clicked={()=>{setCardClicked(false)}}
                />
</PopModal>}
{updateClicked ?
<PopModal setUpdateClicked={setUpdateClicked} action='update'>
    <UpdateForm title={props.title} description={props.description} genre={props.genre}
    setUpdateClicked={setUpdateClicked}
    action="update"/>
</PopModal>
:null}
{crossClicked?
<PopModal setCrossClicked={setCrossClicked} action='delete'>
    <ConfirmationContent 
    title={props.title}
    setCrossClicked={setCrossClicked}/>
</PopModal>
:null}
<Toaster/>
        </div>
    )
}

export default game;