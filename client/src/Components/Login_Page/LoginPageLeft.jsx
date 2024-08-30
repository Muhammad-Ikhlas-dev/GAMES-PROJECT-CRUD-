import React from 'react';
import HOT from '../../assets/login_left_img.png';

const loginLeft=()=>{
    console.log("loginleft  re-rendered")
return(
    <>
    <div className='w-72'>
    <img className="" src={HOT} alt="unable to load" />
    </div>
    </>
)
}

export default loginLeft;