import React from 'react';
import profile_icon from '../assets/profile_icon.jpg';

const profile=(props)=>{
    console.log("profile re-rendered")
    return(
    <div className="flex flex-col justify-center items-center">
        <img className="w-8 object-cover object-center" src={profile_icon} alt="" />
        <p className="font-bold">{props.username}</p>
    </div>
    )
}

export default profile;