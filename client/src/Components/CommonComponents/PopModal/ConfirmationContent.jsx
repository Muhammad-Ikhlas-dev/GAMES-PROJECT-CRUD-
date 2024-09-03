import React,{useContext} from 'react';
import MethodContext from '../../../Contexts/MethodContext';

const ModalContent=(props)=>{
    const {deleteGame}=useContext(MethodContext)
    console.log("confirmation box re-endered")
    return(
        <div className="bg-black w-96 h-52 flex justify-center items-center flex-col
            gap-12 z-50 cursor-auto" onClick={(e)=>{e.stopPropagation()}}>
        <p>Do you want to Delete
            <span className='text-red-500 font-bold'> {props.title}</span>
        </p>
             <div className='flex gap-12 text-white'>
                 <button className="bg-green-500 px-4 hover:bg-green-700"
                 onClick={(e)=>{
                    e.preventDefault()
                    e.stopPropagation()
                    deleteGame(e,props.title)
                    props.setCrossClicked(false)
                    }}>Yes</button>
                 <button className='bg-red-500 px-4 hover:bg-red-700'
                 onClick={(e)=>{
                    e.stopPropagation()
                    e.preventDefault()
                    props.setCrossClicked(false);
                    }}>No</button>
              </div>
           </div>
    )
}

export default ModalContent;