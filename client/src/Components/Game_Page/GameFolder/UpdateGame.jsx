import React from 'react';

const updateComponent=(props)=>{
    return(
        <p className='bg-green-600 text-white p-2 hover:bg-green-700'
        onClick={props.clicked}>
            {props.updateClicked?'Cancel':'Update'}
        </p>
    )
}

export default updateComponent;