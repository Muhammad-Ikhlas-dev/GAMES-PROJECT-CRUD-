import React from 'react';
import User from './User.jsx';
import {head as Head} from './User.jsx';


const border_giver='border-2 border-white';
const users=(props)=>{
  {console.log("users re-rendered")}
const users=props.users.map((user)=>{
  return (
  <User 
  key={user._id}
  border_giver={border_giver}
  id={user._id}  
  username={user.username}
  email={user.email}
  password={user.password}/>)
    })
    
    
    return(
<table className={`${border_giver} m-auto bg-green-600 w-full`}>
<Head/>
<tbody>
{users}
</tbody>
</table>
    )
}

export default users; //so User will also not re-render without change