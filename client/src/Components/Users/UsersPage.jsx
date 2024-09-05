import React,{useState,useEffect,useContext} from 'react';
import Users from './Users.jsx';
import Logo from '../logo.jsx';
import Header from '../Header.jsx';
import LogoutBtn from '../LogoutBtn.jsx';
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../Redux/hooks/useReduxHelperHooks.js';

const UsersPage=()=>{
    console.log("whole users page re-rendered")
    const navigate=useNavigate()
    const [users,setUsers]=useState([])
    const {token}=useAppSelector(state=>state.AuthSlice);
    
    useEffect(()=>{
        console.log("token in usersPage: ",token)
        if(token){
        axios.get('http://localhost:8000/users',{headers:
            {
                token,
            }
        }).then((response)=>{
            setUsers(response.data.usersRecord)
            toast.success(response.data.message,{
                position: 'top-right',
                style: {
                    height: "60px",
                    border: '1px solid green'
                },
            })
        })
        .catch((error)=>{
            toast.remove()
            if(error.response.status==498)
            navigate('/login')
            if(error?.response?.data?.message){ //error response from manual validations
                // console.log(error)
                toast.error(error.response.data.message)
                , {
                    position: 'top-right',
                    style: {
                        height: "60px",
                        border: '1px solid green'
                    },
                }
            }
            else{ //axios related error
                toast.error(error.message)
                , {
                    position: 'top-right',
                    style: {
                        height: "60px",
                        border: '1px solid green'
                    },
                }
            } 
        })
    }
    else{
          navigate('/login')
    }
    },[])

    return(
        <div className='min-h-[100%] bg-[#40670C] 
        flex flex-col items-center gap-8 w-[100%] overflow-hidden'>

      {/* Top Display */}
      <div className="flex justify-between px-[2px] items-center w-full">
        <Logo />
        <Header />
        {/* <div className='ml-28'></div> */}
        <LogoutBtn />
      </div>

       {/*Display TABLE*/}
      <Users users={users}/>

      <Toaster/>
      </div>
    )
}

export default UsersPage;
