import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate} from 'react-router-dom';

const loginRight = () => {
    const [auth_obj, set_auth_obj] = useState({ email: '', password: '' })
    const [submitClicked, setSubmitClicked] = useState(false);
    const navigate = useNavigate();
    const input_styling = "w-80 h-8 px-2 outline-none text-white bg-transparent border-b-2 border-white placeholder-pink-500"


    async function requestSender(event) {
        event.preventDefault();
        setSubmitClicked(true)
        try {
            let response = await axios.post('http://localhost:8000/login', auth_obj)
            set_auth_obj({ ...auth_obj, email: "", password: "" }) 
            // console.log("the response came!!!",response);
            toast.success(response.data.message, {
                position: 'top-right',
                style: {
                    height: "60px",
                    border: '1px solid green'
                },
            })
               setTimeout(()=>{
                   navigate('/welcome',{state:response.data.username})
               },1000)
        }
        catch (error){
            setSubmitClicked(false)
            if (error?.response?.data?.issue) { //error response came from zod
                // console.log(error.response.data.issue)
                toast.error(error.response.data.issue[0].message + ' at ' + error.response.data.issue[0].path)
                    , {
                    position: 'top-right',
                    style: {
                        height: "60px",
                        border: '1px solid green'
                    },
                }
            }
            else if(error?.response?.data?.message){ //error response from manual validations
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
        }
    }
    return (
        <>
            <form className="flex flex-col gap-12 items-center text-white">
                <h1 className='font-mono text-5xl'>LOGIN</h1>
                <input
                    value={auth_obj.email}
                    onChange={(e) => {
                        set_auth_obj({ ...auth_obj, email: e.target.value, password: auth_obj.password })
                    }}
                    className={input_styling}
                    type="email"
                    placeholder="Email" />
                <input
                    value={auth_obj.password}
                    onChange={(e) => {
                        set_auth_obj({ ...auth_obj, email: auth_obj.email, password: e.target.value })
                    }}
                    className={input_styling}
                    type="password"
                    placeholder="Password" />
                <button className='border-2 border-white font-bold
                 w-20 font-mono hover:bg-pink-500' onClick={requestSender}>
                    {submitClicked ? 'Loading' : 'Submit'}
                </button>
            </form>
            <Toaster />
        </>
    )
}

export default loginRight;