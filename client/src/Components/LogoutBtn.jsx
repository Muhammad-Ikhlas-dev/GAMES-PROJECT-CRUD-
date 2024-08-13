import React from 'react';
import { Link } from 'react-router-dom';

const btn=()=>{
    return(
        <>
        <Link to={"/"}>
            <button className='border-2 border-white font-bold w-20 h-8 font-mono hover:bg-green-900'>
                  Logout        
            </button>
            </Link>
        </>
    )
}

export default btn;