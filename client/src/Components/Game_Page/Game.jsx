import React from 'react';
import freeFire from '../../assets/freeFire.jpg';

const game=(props)=>{
    return(
        <div className='min-h-72 w-48 px-4 pb-4 pt-2 bg-white text-green-500 text-center 
        cursor-pointer group flex flex-col items-center overflow-hidden'>
            <div className='flex justify-between w-full'>
                                            {/* DELETE */}
            <span className="ml-auto border-2 border-green-500 bg-green-500
            transition-transform duration-500 linear scale-90 hover:scale-125"
            onClick={props.clicked}>
                ❌
            </span>  
            </div>
            
                                  {/* {BG IMAGE OF CARD} */}
            <img className="z-0 object-cover object-center h-[90%] mt-4
            group-hover:scale-105 transition-all duration-500 cursor-pointer ease-in-out" 
            src={freeFire} alt="unable to load"/>
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
        </div>
    )
}

export default game;