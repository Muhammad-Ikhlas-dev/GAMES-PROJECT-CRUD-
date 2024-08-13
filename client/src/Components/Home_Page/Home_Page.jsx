import React,{Fragment} from 'react';
import bg_homePage from '../../assets/bg_home_page.png';
import AuthButton from './buttons/Auth_Btn';
import {Link} from 'react-router-dom';

const homePage=()=>{
return(
    <div className="flex justify-between pl-40 items-center h-[100%] bg-[#40670C]">
        <div className='btns_container flex gap-12 font-mono font-bold'>
        <Link to={"/login"}><AuthButton>LogIn</AuthButton></Link>
        <Link to={"/signup"}><AuthButton>Signup</AuthButton></Link>
        </div>
        <div className="h-[100%] overflow-hidden flex justify-center items-center">
        <img className="object-cover" src={bg_homePage} alt="unable to load" />
        </div>
    </div>
)
}

export default homePage;