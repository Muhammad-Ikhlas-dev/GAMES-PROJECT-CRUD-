import React,{useEffect,useState} from 'react';
import Logo from './logo';
import welcomeImage from '../assets/welcome_img.png';
import Header from './Header';
import LogoutBtn from './LogoutBtn.jsx';
import Profile from './Profile.jsx';
import {useLocation} from 'react-router-dom';

const welcomePage=()=>{
    const [username,setUsername]=useState('')
    const location=useLocation();
    useEffect(()=>{
     const userNameRecieved=location.state;
     setUsername(userNameRecieved)
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
            <div className="flex justify-center items-center gap-32 mt-[5%] pl-12">
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
                <div className="w-full">
                <img className="w-full scale-125 object-cover object-center" 
                src={welcomeImage} 
                alt="unable to load" />
                </div>
            </div>
        </div>
    )
}

export default welcomePage;