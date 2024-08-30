import React,{useEffect,useContext} from 'react';
import LoginLeft from './LoginPageLeft';
import LoginRight from './LoginPageRight';
import Logo from '../logo';
// import AuthContext from '../../Contexts/AuthContext';
import {useAppSelector } from '../../Redux/hooks/useReduxHelperHooks.js';
import { useNavigate } from 'react-router-dom';

const loginPage=()=>{
    console.log("login page re-rendered")
    const navigate=useNavigate();
    // const {token}=useContext(AuthContext);
    const {token}=useAppSelector(state=>state.AuthSlice)
    useEffect(()=>{
        console.log("token at login page: ",token)
        if(token){
           navigate('/welcome')
        }
    },[])

return(
    <div className='h-[100%] bg-[#40670C] text-white'>
     <div className="w-fit m-auto">
    <Logo/>
    </div>
    <div className="flex gap-20 items-center justify-center mt-[5%]">
    <LoginLeft/>
    <LoginRight/>
    </div>
    </div>
)
}

export default loginPage;