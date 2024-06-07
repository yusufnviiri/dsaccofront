import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from 'gsap'
import { setLoginError } from "../redux/ApiSlice";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

function Notification() {
  const dispatch = useDispatch()
  const  logginError = useSelector((state)=>state.ApiSlice.logginError)

  const clearError = "";

    if(logginError!==""){
        gsap.fromTo(".message",{position:"absolute",background:"yellow"},{position:"relative",y:2,background:"red",duration:2})
    } else{
        gsap.to(".message",{position:"absolute",background:"yellow",y:-100})
    }

  return (
    <div className=''>
<p className='message'>
{logginError!==""?(<p>{logginError }<span><button onClick={()=>{dispatch( setLoginError(clearError))}}>    <FontAwesomeIcon icon={faXmark} /></button></span></p>):""}

</p>
    </div>
  )
}

export default Notification
