import React,{useContext,useState} from 'react';
import MethodContext from '../../../../Contexts/MethodContext';


const updateForm=(props)=>{
    const {updateGame}=useContext(MethodContext)
    const [newGameInfo,setNewGameInfo]=useState({updated_title:props.title,
        updated_description:props.description,
        updated_genre:props.genre
    })

    console.log("update form re-rendered ")
    const input_style='pl-2 outline-none bg-green-700 w-[100%] text-white border-2 border-white h-8'
    return(
        <form className='flex flex-col gap-8 text-black items-center bg-black
        w-60 p-4 z-50 cursor-auto' onClick={(e) => e.stopPropagation()}>
            <h1 className='text-white font-bold text-lg'>UPDATE GAME</h1>
                                    {/* TITLE */}
            <input
                type="text"
                className={input_style}
                value={newGameInfo.updated_title}
                onChange={(e) => {
                    setNewGameInfo({
                        updated_title: e.target.value,
                        updated_genre: newGameInfo.updated_genre,
                        updated_description: newGameInfo.updated_description,
                    })
                }} />
                                        {/* GENRE */}
            <input type="text"
                className={input_style}
                value={newGameInfo.updated_genre}
                onChange={(e) => {
                    setNewGameInfo({
                        updated_title: newGameInfo.updated_title,
                        updated_genre: e.target.value,
                        updated_description: newGameInfo.updated_description,
                    })
                }} />
                                    {/* DESCRIPTION  */}    
        <textarea
        className={`h-max resize-none bg-green-700 text-white w-[100%]
        p-2 border-2 border-white`}
        value={newGameInfo.updated_description}
        onChange={(e) => {
        setNewGameInfo({
            updated_title: newGameInfo.updated_title,
            updated_genre: newGameInfo.updated_genre,
            updated_description: e.target.value,
        });
        }}
        />
                                {/*Done/CANCEL*/}
              <div className='flex gap-4 '>
            <button className='bg-green-600 p-2 text-white hover:bg-green-700'       
            onClick={(e)=>{
                e.preventDefault()
                updateGame(e,newGameInfo,props.title,props.description,props.genre)
                props.setUpdateClicked(false)}}>
                Done
            </button>
            <button className='bg-red-600 p-2 text-white hover:bg-red-500'       
            onClick={(e)=>{
                e.preventDefault()
                props.setUpdateClicked(false)
                setNewGameInfo({
                    updated_description:props.description,
                    updated_title:props.title,
                    updated_genre:props.genre
                })
        }}>
                Cancel
            </button>
            </div>
        </form>
    )
}

export default updateForm;