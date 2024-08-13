import React from 'react';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

const logoDisplay=()=>{
return(
<div className='w-32'>
<Link to="/"><img className='cursor-pointer' src={logo} alt="unable to load" /></Link>
</div>)
}

export default logoDisplay;