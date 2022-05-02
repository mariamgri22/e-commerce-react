import React, { useEffect, useRef } from 'react'

export default function useOutSideClick(ref,closeCallback=()=>null) {

    const handleClose=(e)=>{
        if(!ref.current.contains(e.target)){
         console.log('chi parunakum');
         closeCallback();
        }
     
      
   }
   useEffect(() => {
    if(ref.current) {
        console.log("Added event", ref)
        window.addEventListener("click", handleClose)
    }
    return () => {
        console.log("unmounted", ref)
        window.removeEventListener("click", handleClose)
    }
}, [ref])
  // return ref;
    
}
