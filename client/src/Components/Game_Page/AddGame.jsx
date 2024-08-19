import React,{useState} from 'react';
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';

const form=(props)=>{
    // const navigate=useNavigate();
    const [addGameClicked,setaddGameClicked]=useState(false)
    const [gameInfo,setGameInfo]=useState({title:'',genre:'',description:''})

    async function gameAdder(event){
        try{
            event.preventDefault();
            
            let response=await axios.post('http://localhost:8000/game',gameInfo);
            toast.success(response.data.message,{
                position: 'top-right',
                style: {
                    height: "60px",
                    border: '1px solid green'
                },
            })
            props.triggerRefresh();  //callUseEffect we can say by changing its dependency

            /* !!!!!!!!!! wrong approach because it was re-rendering whole page !!!!!!!
            // setTimeout(() => {
            //     window.location.reload(); // Refresh the page so that useEffect runs and the posted
            //     //  game is displayed due to execution of get request in useEffect
            //   }, 2000); // 2000 milliseconds = 2 seconds*/

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
            else{ //axios related error
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
          onClick={()=>{setaddGameClicked(!addGameClicked)}}>
            {addGameClicked?'Hide':'Add game'}
          </button>

    {/* {Form} */}
{addGameClicked?(
    <form className='flex flex-col gap-4 text-black items-center'>
<input 
type="text" 
placeholder="Title" 
className='pl-2 outline-none'
value={gameInfo.title}
onChange={(e)=>{setGameInfo({
title:e.target.value,
genre:gameInfo.genre,
description:gameInfo.description,

})}}/>
<input type="text" 
placeholder="Genre" 
className='pl-2 outline-none'
value={gameInfo.genre}
onChange={(e)=>{setGameInfo({
title:gameInfo.title,
genre:e.target.value,
description:gameInfo.description,
})}}/>

<input 
placeholder="Description" 
className='pl-2 outline-none'
value={gameInfo.description}
onChange={(e)=>{setGameInfo({
title:gameInfo.title,
genre:gameInfo.genre,
description:e.target.value,
})}}/>

<button className='bg-transparent border-2 border-white 
w-28 py-2 text-white hover:bg-green-500' 
onClick={gameAdder}>
    Add
</button>
</form>):null}
<Toaster/>
        </div>
)
}
export default form;