import React,{useState,useEffect} from 'react';
import Users from './Users.jsx';
import Logo from '../logo.jsx';
import Header from '../Header.jsx';
import LogoutBtn from '../LogoutBtn.jsx';
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';


const UsersPage=()=>{
    const [users,setUsers]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/users')
        .then((response)=>{
            setUsers(response.data.usersRecord)
            toast.success(response.data.message,{
                position: 'top-right',
                style: {
                    height: "60px",
                    border: '1px solid green'
                },
            })
            // console.log(users)
        })
        .catch((error)=>{
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
