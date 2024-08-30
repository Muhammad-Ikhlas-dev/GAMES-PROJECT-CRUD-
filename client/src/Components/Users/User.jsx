import React from 'react'

export const head=()=>(
    <thead className=''>
        <tr className={`border-2 border-green-600 bg-white text-green-600`}>
        <th className='border-2 border-green-600 ' >ID</th>
        <th className='border-2 border-green-600 '>Username</th>
        <th className='border-2 border-green-600 ' >Email</th>
        <th className='border-2 border-green-600 '>Password</th>
        </tr>
        {console.log("head re-rendered")}
    </thead>
)

const user=({border_giver,id,username,email,password})=>{
return(
        <tr className={`${border_giver} text-white`}>
        {console.log("user re-rendered")}
        <td className={`${border_giver} px-2 text-center`}>{id}</td>
        <td className={`${border_giver} px-2 text-center font-bold`}>
            {username}
        </td>
        <td className={`${border_giver} px-2 text-center`}>{email}</td>
        <td className={`${border_giver} p-4 text-left text-sm`}>{password}</td>
        </tr>
)
}

export default user;