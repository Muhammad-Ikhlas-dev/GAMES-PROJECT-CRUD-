import React,{useEffect,useState,useContext} from 'react';
import Logo from './logo';
import welcomeImage from '../assets/welcome_img.png';
import Header from './Header';
import LogoutBtn from './LogoutBtn.jsx';
import Profile from './Profile.jsx';
import {useNavigate} from 'react-router-dom';
import { useAppSelector } from '../Redux/hooks/useReduxHelperHooks.js';

const welcomePage=()=>{
    const navigate=useNavigate();
    
    // useFindToken();
    const {username,token}=useAppSelector(state=>state.AuthSlice)
    console.log("in welcome page",username,token)
    useEffect(()=>{
        console.log("token in WelcomePage: ",token)
        console.log("username in WelcomePage: ",username)
        if(!token){
                navigate('/login')
        }
    },[])
    return(
        <div className='h-[100%] bg-[#40670C] overflow-hidden'>
                                            {/*Top*/}
            <div className="flex justify-between pl-[2px] pr-[10px] items-center">
                                            {/*TOP LEFT*/}
            <Logo/>
                                        {/*TOP CENTER */}
            <Header/>
                                        {/*TOP RIGHT */}
            <div className="flex items-center gap-2">
            <Profile username={username}/>
            <LogoutBtn/>
            </div>
                                        {/* {BODY} */}
            </div>
            <div className="flex justify-center items-center gap-32 pl-12 mt-[5%]">
                                        {/*BODY LEFT*/}
                <div>
                <h1 className="text-6xl font-bold font-mono text-center">
                    Hey 
                    <span className='mx-2 w-fit h-fit font-bold text-[#DF5E3A]'>
                        {username}</span>
                    enjoy our #1M+ TRENDING</h1>
                <h1 className="text-6xl font-bold font-mono text-center">GAMES</h1>
                <p className="font-bold w-[25rem] m-auto text-lg text-center mt-7">
                play million of games worldwide and play online tournaments and much more
                without any subscription, Yup It's Free.
                </p>
                </div>
                                            {/*BODY RIGHT*/}
                <div className="w-full h-fit">
                <img className="w-full scale-125 object-cover object-center" 
                src={welcomeImage} 
                alt="unable to load" />
                </div>
            </div>
        </div>
    )
}

export default welcomePage;