import SignupLeft from "./SignupLeft";
import SignupRight from "./SignupRight";
import React from 'react';
import Logo from '../logo';

const signUppage=()=>{
return(
    <div className='h-[100%] bg-[#40670C] overflow-hidden text-white'>
    <div className="w-fit m-auto">
    <Logo/>
    </div>
    <div className="h-[100%] flex gap-20 items-center justify-center">
    <SignupLeft/>
    <SignupRight/>
    </div>
    </div>
)
}

export default signUppage;