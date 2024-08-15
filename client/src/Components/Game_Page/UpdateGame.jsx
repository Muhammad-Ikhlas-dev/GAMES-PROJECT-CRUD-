import React,{useState} from 'react';
import toast,{Toaster} from 'react-hot-toast';
import axios from 'axios';

const updateGame=(props)=>{
    const [updateGameClicked,setUpdateGameClicked]=useState(false)
    const [title_to_update,setTitleToUpdate]=useState('')
    const [newGameInfo,setNewGameInfo]=useState({updated_title:'',
        updated_description:'',
        updated_genre:''
    })

    async function gameUpdater(event){
        try{
            event.preventDefault()
            let response=await axios.put('http://localhost:8000/game?title_to_update='+title_to_update,newGameInfo)
            toast.success(response.data.message,{
                position: 'top-right',
                style: {
                    height: "60px",
                    border: '1px solid green'
                },
            })            
            props.onGameUpdated();
        }
        catch(error){
            if (error?.response?.data?.issue) { //error response came from zod
                console.log(error.response.data.issue)
                toast.error(error.response.data.issue[0].message + ' at ' + error.response.data.issue[0].path)
                    , {
                    position: 'top-right',
                    style: {
                        height: "60px",
                        border: '1px solid green'
                    },
                }
            }
            else if(error?.response?.data?.message){ //error response from manual validations
                // console.log(error)
                toast.error(error.response.data.message)
                    , {
                    position: 'top-right',
                    style: {
                        height: "60px",
                        border: '1px solid green'
                    },
                }
            }
            else{ //axios related error or error in above try block
                toast.error(error.message)
                    , {
                    position: 'top-right',
                    style: {
                        height: "60px",
                        border: '1px solid green'
                    },
                }
            }
        }
    }

return(
<div className='flex flex-col gap-8 items-center'>
{/* Add button */}
      <button className='bg-transparent border-2 border-white 
      w-28 py-2 text-white hover:bg-green-500'
      onClick={()=>{setUpdateGameClicked(!updateGameClicked)}}>
        {updateGameClicked?'Hide':'Update Game'}
      </button>

{/* {Form} */}
{updateGameClicked?(
<>
<input className='text-black pl-2 outline-none' 
value={title_to_update} 
onChange={(e)=>{setTitleToUpdate(e.target.value)}}
placeholder="Title to Update" type="text">

</input>
<form className='flex flex-col gap-4 text-black items-center'>
<input 
type="text" 
placeholder="Title" 
className='pl-2 outline-none'
value={newGameInfo.updated_title}
onChange={(e)=>{setNewGameInfo({
updated_title:e.target.value,
updated_genre:newGameInfo.updated_genre,
updated_description:newGameInfo.updated_description,

})}}/>
<input type="text" 
placeholder="Genre" 
className='pl-2 outline-none'
value={newGameInfo.updated_genre}
onChange={(e)=>{setNewGameInfo({
updated_title:newGameInfo.updated_title,
updated_genre:e.target.value,
updated_description:newGameInfo.updated_description,
})}}/>

<input 
placeholder="Description" 
className='pl-2 outline-none'
value={newGameInfo.updated_description}
onChange={(e)=>{setNewGameInfo({
updated_title:newGameInfo.updated_title,
updated_genre:newGameInfo.updated_genre,
updated_description:e.target.value,
})}}/>

{/*Add*/}

<button className='bg-transparent border-2 border-white 
w-28 py-2 text-white hover:bg-green-500'  
onClick={gameUpdater}>
Update
</button>
</form>
</>):null}
<Toaster/>
    </div>
)
}

export default updateGame;