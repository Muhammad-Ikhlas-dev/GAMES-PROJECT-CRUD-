import React from 'react';
import {Link} from 'react-router-dom';

const header=()=>{
    let list_style="cursor-pointer transition-transform duration-200 hover:scale-125";
return(
<nav className='bg-white w-96 p-4 rounded-3xl mt-4'>
<ul className='flex gap-8 justify-center text-green-500 font-bold'>
      <Link to={"/welcome"}><li className={list_style}>Home</li></Link>
      <li className={list_style}>Contact</li>
      <li className={list_style}>About</li>
      <Link to="/games"><li className={list_style}>Games</li></Link>
</ul>
</nav>
)
}

export default header;