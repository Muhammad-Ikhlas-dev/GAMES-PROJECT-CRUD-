import React from 'react';
import {useRouteError} from 'react-router-dom';

const error=()=>{
    const {status,statusText}=useRouteError();
    console.log(useRouteError())
    return(
        <div style={{display:"flex",flexDirection:'column',alignItems:"center"}}>
        <h1 style={{width:"fit-content",margin:"auto"}}>Oops! something went wrong</h1>
        <h1>
            {status}:{statusText}
        </h1>
        </div>
    )
}

export default error;