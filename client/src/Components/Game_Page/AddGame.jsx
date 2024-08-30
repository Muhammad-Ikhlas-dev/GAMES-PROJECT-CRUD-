import React,{useState,useEffect,useContext} from 'react';
import PopModal from '../CommonComponents/PopModal/PopModal';
import AddForm from './GameFolder/Forms/AddForm';

const form=(props)=>{
    console.log("addgame re-rendered")
    const [addGameClicked,setaddGameClicked]=useState(false)

    return(
        <div className='flex flex-col gap-8 items-center'>
    {/* Add button */}
          <button className='bg-transparent border-2 border-white 
          w-28 py-2 text-white hover:bg-green-500'
          onClick={()=>{setaddGameClicked(!addGameClicked)}}>
            {addGameClicked?'Hide':'Add game'}
          </button>

{addGameClicked&&(
<PopModal setaddGameClicked={setaddGameClicked} action='Add'>
    <AddForm title={props.title} description={props.description} genre={props.genre}
    setaddGameClicked={setaddGameClicked}
    action='Add'/>
</PopModal>
)}
        </div>
)
}
export default React.memo(form);