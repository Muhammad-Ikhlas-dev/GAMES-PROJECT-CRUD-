import React from 'react';

const gameContent = (props) => (
    <div className='flex flex-col gap-4 items-center justify-center bg-black p-4
    w-80 cursor-auto' onClick={(e)=>{e.stopPropagation()}}>
                                        {/* CONTENT */}
        <h1 className='z-10 font-bold text-3xl font-mono'>{props.title}</h1>
        <p className='z-10'>
            <span className='font-bold z-10 text-white text-sm'>Genre: </span>
            {props.genre}
        </p>
        <p className='z-10'>
            <span className='font-bold text-white text-sm'>Description: </span>
            {props.description}
        </p>
         <button className='bg-green-600 p-2 text-white hover:bg-green-700'
        onClick={(e)=>{
            e.stopPropagation()
            props.setCardClicked(false)}}>
            Hide
        </button>
    </div>
)

export default gameContent;