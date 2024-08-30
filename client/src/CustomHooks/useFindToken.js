import React,{useState,useEffect} from 'react';
function useFindToken(){
    console.log("custom hook updated");
    const[userData,setUserData]=useState({
        token:localStorage.getItem("token"),
        username:localStorage.getItem("username"),
        password:localStorage.getItem("password"),
        email:localStorage.getItem("email")
    })
    // useEffect(()=>{
    //     setUserData({
    //     token:localStorage.getItem("token"),
    //     username:localStorage.getItem("username"),
    //     email:localStorage.getItem("email"),
    //     password:localStorage.getItem("password")
    // })
    // },[])
    return {userData,setUserData};
}

export default useFindToken;