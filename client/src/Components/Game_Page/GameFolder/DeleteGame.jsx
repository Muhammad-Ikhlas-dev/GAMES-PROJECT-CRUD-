import React,{useState} from 'react';

const deleteComponent=(props)=>{

    return(
        <div>
        <button className="border-2 border-green-500 bg-green-500 scale-90 
        transition-transform duration-500 delay-0 linear hover:scale-125"
        onClick={(e)=>{
            e.stopPropagation()
            props.setCrossClicked(true)
            props.setCardClicked(false)}}>
            ❌
        </button>
        </div>
    )
}

export default deleteComponent;