import { createContext } from "react";

const authContext=createContext({
username:'',
email:'',
password:'',
token:''
})

export default authContext;