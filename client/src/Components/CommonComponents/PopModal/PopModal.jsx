import React from 'react';

const PopModal=(props)=>{
    return(
        <div id="hider" 
            className="fixed inset-0 z-40 flex justify-center items-center" 
            onClick={()=>{
                if(props.action=='delete')
                props.setCrossClicked(false)
                else if(props.action=='update')
                props.setUpdateClicked(false)
                else //Add
                props.setaddGameClicked(false)}}>  
            {props.children}       {/*Delete Confirmation OR FORM */}
        </div>
    )
}

export default PopModal;