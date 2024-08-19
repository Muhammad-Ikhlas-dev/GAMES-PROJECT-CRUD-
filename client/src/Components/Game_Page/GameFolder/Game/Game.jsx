import React, { useState,useRef } from 'react';
import GameContent from '../GameContent.jsx';
import DeleteComponent from '../DeleteGame.jsx';
import cardBG from '../../../../assets/freeFire.jpg';
import './Game.css';
import PopModal from '../../../CommonComponents/PopModal.jsx';

const game = (props) => {
    const placeholderRef = useRef(null);
    const [newGameInfo,setNewGameInfo]=useState({updated_title:'',
        updated_description:'',
        updated_genre:''
    })
    // let [crossClicked,setCrossClicked]=useState(false)
    const [descriptionFieldEmpty,setdescriptionFieldEmpty]=useState(true)
    const input_style='pl-2 outline-none bg-black w-[95%] text-white'
    
    function DoneClicked(event){
        try{
            event.preventDefault();
                let EmptyPreventerGameInfo={
                    updated_title: newGameInfo.updated_title || props.title,
                    updated_description:newGameInfo.updated_description || props.description,
                    updated_genre:newGameInfo.updated_genre || props.genre,
                }
                // console.log(EmptyPreventerGameInfo)
                // setNewGameInfo(EmptyPreventerGameInfo)
                setNewGameInfo({updated_title:'',
                    updated_description:'',
                    updated_genre:''})
                // console.log(newGameInfo)
                props.done_click_handler(event,EmptyPreventerGameInfo)
            }
        catch(error){
            console.log(error)
        }
    }


    return (
        <div className='min-h-72 w-48 px-4 pb-4 pt-2 bg-white text-green-500 text-center 
        cursor-pointer group flex flex-col items-center overflow-hidden'>

                                {/* {DELETE/UPDATE} */}
            <div className='flex justify-between w-full items-center'>
                {/* UPDATE */}
                <p className='bg-green-600 text-white p-2 hover:bg-green-700'
                onClick={props.update_click_handler}>
                    {props.updateClicked?'Cancel':'Update'}
                </p>
                                     {/* DELETE */}
                <DeleteComponent delClicked={props.deleteClicked}
                crossClicked={()=>{setCrossClicked(true)}}/>
            </div>
                                         {/* {BG IMAGE OF CARD} */}
            <img className="z-0 object-cover object-center h-[90%] mt-4 cursor-pointer
            group-hover:scale-105 transition-all duration-500 ease-in-out"
                src={cardBG} alt="unable to load" />
                {props.updateClicked ?
                                    /*CONENT WHEN UPDATE CLICKED*/
                    <form className='flex flex-col gap-2 text-black items-center mt-4'>
                        <input
                            type="text"
                            placeholder={props.title}
                            className={input_style}
                            value={newGameInfo.updated_title}
                            onChange={(e) => {
                                setNewGameInfo({
                                    updated_title: e.target.value,
                                    updated_genre: newGameInfo.updated_genre,
                                    updated_description: newGameInfo.updated_description,
                                })
                            }} />
                        <input type="text"
                            placeholder={props.genre}
                            className={input_style}
                            value={newGameInfo.updated_genre}
                            onChange={(e) => {
                                setNewGameInfo({
                                    updated_title: newGameInfo.updated_title,
                                    updated_genre: e.target.value,
                                    updated_description: newGameInfo.updated_description,
                                })
                            }} />
                        <div className="exceedingInputContainer relative overflow-hidden
                         z-10"
                onMouseOver={()=>{
                    console.log(placeholderRef.current)
                    if (placeholderRef.current) {
                        placeholderRef.current.classList.add('hidden');
                    }
                }}
                onMouseOut={()=>{
                    console.log(placeholderRef.current)
                    if (placeholderRef.current) {
                        placeholderRef.current.classList.remove('hidden');
                    }
                }}>
                              
            <input
                className={input_style}
                value={newGameInfo.updated_description}
                onChange={(e) => {
                    if(e.target.value){
                        setdescriptionFieldEmpty(false)
                    }
                    else{
                        setdescriptionFieldEmpty(true)
                    }
                    setNewGameInfo({
                        updated_title: newGameInfo.updated_title,
                        updated_genre: newGameInfo.updated_genre,
                        updated_description: e.target.value,
                    });
                }}
            />
            {descriptionFieldEmpty?(
            <span
                ref={placeholderRef}
                className="Placeholder text-[#9CA0AA] w-auto text-md absolute">
                {props.description}
            </span>):null}
                        </div>
                                            {/*Done*/}
                        <button className='bg-green-600 p-2 text-white hover:bg-green-700'       
                        onClick={DoneClicked}>
                            Done
                        </button>
                    </form>

                    :
                                // CONTENT WHEN UPDATE NOT CLICKED
                    <GameContent
                        title={props.title}
                        genre={props.genre}
                        description={props.description} />
                }
            {/* <PopModal/> */}
        </div>
    )
}

export default game;