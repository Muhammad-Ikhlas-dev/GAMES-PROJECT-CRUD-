import React from 'react';

const PopModal=React.memo((props)=>{
    console.log("pop modal re-rendered")
    return(
        <div id="hider" 
            className="fixed inset-0 z-40 flex justify-center items-center" 
            onClick={(e)=>{
                e.stopPropagation()
                if(props.action==='cardInfoShow')
                props.setCardClicked(false)
                else if(props.action==='delete')
                props.setCrossClicked(false)
                else if(props.action==='update')
                props.setUpdateClicked(false)
                else if(props.action==='Add')//Add
                props.setaddGameClicked(false)}}>  
            {props.children}       {/*Delete Confirmation OR FORM */}
        </div>
    )
})

export default React.memo(PopModal);