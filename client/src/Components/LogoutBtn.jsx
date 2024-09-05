import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../Redux/hooks/useReduxHelperHooks';

const btn=()=>{
    console.log("logout button re-rendered")
    const {userData}=useAppSelector(state=>state.AuthSlice)
    const {setUserData}=userData;
    console.log("in logout : ",userData)
    const navigate=useNavigate()
    
    const logoutClicked=(event)=>{
        event.preventDefault()
        localStorage.clear()
        setUserData({
            ...userData,email:'',
            username:'',
            password:'',
            token:''
        })
        navigate('/login')
    }

    return(
        <>
            <button onClick={logoutClicked}
            className='border-2 border-white font-bold w-20 h-8 font-mono hover:bg-green-900'>
                  Logout        
            </button>
        </>
    )
}

export default React.memo(btn);