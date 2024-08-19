import React from 'react';

const gameContent = (props) => (
    <>
                                        {/* CONTENT */}
        <h1 className='z-10 font-bold text-lg font-mono'>{props.title}</h1>
        <p className='hidden z-10 group-hover:block'>
            <span className='font-bold z-10 text-black text-sm'>Genre: </span>
            {props.genre}
        </p>
        <p className='hidden z-10 group-hover:block'>
            <span className='font-bold text-black text-sm'>Description: </span>
            {props.description}
        </p>
    </>
)

export default gameContent;