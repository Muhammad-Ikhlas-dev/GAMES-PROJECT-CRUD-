import SignupLeft from "./SignupLeft";
import SignupRight from "./SignupRight";
import React,{useEffect,useContext} from 'react';
import Logo from '../logo';
import AuthContext from "../../Contexts/AuthContext";

const signUppage=()=>{
    console.log("signup page re-rendered")
    const {userData,setUserData,token,username}=useContext(AuthContext)
    useEffect(()=>{
        localStorage.clear()
        setUserData({
            ...userData,email:'',
            username:'',
            password:'',
            token:''
        })
            console.log("token at signup Page: ",token)
            console.log("username at signup Page: ",username)

    },[])
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