import React,{useState} from 'react';

const form=(props)=>{
    const input_style='pl-2 outline-none bg-green-700 w-[100%] text-white border-2 border-white h-8'
    return(
        <>
        {props.action=='update'?(
        <form className='flex flex-col gap-8 text-black items-center bg-black
        w-60 p-4 z-50 cursor-auto' onClick={(e) => e.stopPropagation()}>
            <h1 className='text-white font-bold text-lg'>UPDATE GAME</h1>
                                    {/* TITLE */}
            <input
                type="text"
                placeholder={props.title}
                className={input_style}
                value={props.newGameInfo.updated_title}
                onChange={(e) => {
                    props.setNewGameInfo({
                        updated_title: e.target.value,
                        updated_genre: props.newGameInfo.updated_genre,
                        updated_description: props.newGameInfo.updated_description,
                    })
                }} />
                                        {/* GENRE */}
            <input type="text"
                placeholder={props.genre}
                className={input_style}
                value={props.newGameInfo.updated_genre}
                onChange={(e) => {
                    props.setNewGameInfo({
                        updated_title: props.newGameInfo.updated_title,
                        updated_genre: e.target.value,
                        updated_description: props.newGameInfo.updated_description,
                    })
                }} />
                                    {/* DESCRIPTION  */}    
        <textarea
        className={`h-max resize-none bg-green-700 text-white w-[100%]
        p-2 border-2 border-white`}
        value={props.newGameInfo.updated_description}
        onChange={(e) => {
        props.setNewGameInfo({
            updated_title: props.newGameInfo.updated_title,
            updated_genre: props.newGameInfo.updated_genre,
            updated_description: e.target.value,
        });
        }}
        />
                                {/*Done/CANCEL*/}
              <div className='flex gap-4 '>
            <button className='bg-green-600 p-2 text-white hover:bg-green-700'       
            onClick={(e)=>{
                e.preventDefault()
                props.UpdateGame(e)
                props.setUpdateClicked(false)}}>
                Done
            </button>
            <button className='bg-red-600 p-2 text-white hover:bg-red-500'       
            onClick={(e)=>{
                e.preventDefault()
                props.setUpdateClicked(false)}}>
                Cancel
            </button>
            </div>
        </form>)
        : //props.action=='Add'
        (<form className='flex flex-col gap-8 text-black items-center bg-black
        w-60 p-4 z-50 cursor-auto' onClick={(e) => e.stopPropagation()}>
            <h1 className='text-white font-bold text-lg'>ADD GAME</h1>
                                    {/* TITLE */}
            <input
                type="text"
                placeholder='Title'
                className={input_style}
                value={props.gameInfo.title}
                onChange={(e) => {
                    props.setGameInfo({
                        title: e.target.value,
                        genre: props.gameInfo.genre,
                        description: props.gameInfo.description,
                    })
                }} />
                                        {/* GENRE */}
            <input type="text"
                placeholder='Genre'
                className={input_style}
                value={props.gameInfo.genre}
                onChange={(e) => {
                    props.setGameInfo({
                        title: props.gameInfo.title,
                        genre: e.target.value,
                        description: props.gameInfo.description,
                    })
                }} />
                                    {/* DESCRIPTION  */}    
        <textarea
        className={`h-max resize-none bg-green-700 text-white w-[100%]
        p-2 border-2 border-white`}
        placeholder='Description'
        value={props.gameInfo.description}
        onChange={(e) => {
        props.setGameInfo({
            title: props.gameInfo.title,
            genre: props.gameInfo.genre,
            description: e.target.value,
        });
        }}
        />
                                {/*Done*/}
              <div className='flex gap-4 '>
            <button className='bg-green-600 p-2 text-white hover:bg-green-700'       
            onClick={(e)=>{
                e.preventDefault()
                props.setaddGameClicked(false)
                props.gameAdder(e)}}>
                Done
            </button>
            <button className='bg-red-600 p-2 text-white hover:bg-red-500'       
            onClick={(e)=>{
                e.preventDefault()
                props.setaddGameClicked(false)}}>
                Cancel
            </button>
            </div>
        </form>)}
        </>
    )
}

export default form;