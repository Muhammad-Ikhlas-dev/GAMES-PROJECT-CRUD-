import React from 'react';

const PopModal=()=>{
    return(
        <div id="hider" 
            className="fixed inset-0 z-40 flex justify-center items-center" 
            onClick={()=>{setCrossClicked(false)}}>
            <div className="bg-black w-96 h-52 flex justify-center items-center flex-col
            gap-12 z-50 cursor-auto">
        <p>Do you want to delete the game?</p>
             <div className='flex gap-12 text-white'>
                 <button className="bg-green-500 px-4 hover:bg-green-700"
                 onClick={(event)=>{
                    setCrossClicked(false)
                    props.delClicked(event)
                    }}>Yes</button>
                 <button className='bg-red-500 px-4 hover:bg-red-700'
                 onClick={()=>{
                    setCrossClicked(false)
                    }}>No</button>
             </div>
           </div>
        </div>
    )
}

export default PopModal;