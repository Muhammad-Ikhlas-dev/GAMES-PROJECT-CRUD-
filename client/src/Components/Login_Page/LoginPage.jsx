import React from 'react';
import LoginLeft from './LoginPageLeft';
import LoginRight from './LoginPageRight';
import Logo from '../logo';

const loginPage=()=>{
return(
    <div className='h-[100%] bg-[#40670C] text-white'>
     <div className="w-fit m-auto">
    <Logo/>
    </div>
    <div className="flex gap-20 items-center justify-center">
    <LoginLeft/>
    <LoginRight/>
    </div>
    </div>
)
}

export default loginPage;