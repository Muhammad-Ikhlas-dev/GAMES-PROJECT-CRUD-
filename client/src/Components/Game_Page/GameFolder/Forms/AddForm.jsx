import React,{useState,useContext} from 'react';
import MethodContext from '../../../../Contexts/MethodContext';

const addForm=(props)=>{
    console.log("addform re-rendered")
    
    const [gameInfo,setGameInfo]=useState({title:'',genre:'',description:''})  
    const {addGame}=useContext(MethodContext)
    const input_style='pl-2 outline-none bg-green-700 w-[100%] text-white border-2 border-white h-8'
    
    return(
<form className='flex flex-col gap-8 text-black items-center bg-black
         w-60 p-4 z-50 cursor-auto' onClick={(e) => e.stopPropagation()}>
             <h1 className='text-white font-bold text-lg'>ADD GAME</h1>
                                     {/* TITLE */}
             <input
                type="text"
                placeholder='Title'
                className={input_style}
                value={gameInfo.title}
                onChange={(e) => {
                    const UpdatedGameInfo={...gameInfo,
                        title: e.target.value,
                        genre: gameInfo.genre,
                        description: gameInfo.description}
                        setGameInfo(UpdatedGameInfo);
                }} />
                                        {/* GENRE */}
            <input type="text"
                placeholder='Genre'
                className={input_style}
                value={gameInfo.genre}
                onChange={(e) => {
                    const UpdatedGameInfo={...gameInfo,
                        title: gameInfo.title,
                        genre: e.target.value,
                        description: gameInfo.description}
                        setGameInfo(UpdatedGameInfo);
                }} />
                                    {/* DESCRIPTION  */}    
        <textarea
        className={`h-max resize-none bg-green-700 text-white w-[100%]
        p-2 border-2 border-white`}
        placeholder='Description'
        value={gameInfo.description}
        onChange={(e) => {
        
            const UpdatedGameInfo={...gameInfo,
            title: gameInfo.title,
            genre: gameInfo.genre,
            description: e.target.value}
            setGameInfo(UpdatedGameInfo);
        }}
        />
                                                {/*Done*/}
              <div className='flex gap-4 '>
            <button className='bg-green-600 p-2 text-white hover:bg-green-700'       
            onClick={(e)=>{
                e.preventDefault()
                
                props.setaddGameClicked(false)
                addGame(
                gameInfo,
                setGameInfo)}}>
                Done
            </button>
            <button className='bg-red-600 p-2 text-white hover:bg-red-500'       
            onClick={(e)=>{
                e.preventDefault()
                
                props.setaddGameClicked(false)}}>
                Cancel
            </button>
            </div>
        </form>
    )
}

export default addForm;