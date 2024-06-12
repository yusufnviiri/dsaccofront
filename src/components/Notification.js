import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import gsap from 'gsap'
import { setLoginError } from "../redux/ApiSlice";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";

function Notification() {
  const dispatch = useDispatch()
  const  logginError = useSelector((state)=>state.ApiSlice.logginError)
const isSuccess = "green";
const isFail = "Red";

  const clearError = "";

    if(logginError!==""){
        gsap.fromTo(".message",{position:"absolute",background:"yellow",color:'white'},{position:"relative",y:0,background:`${logginError==="success!!"?isSuccess:isFail}`,duration:1})
    } else{
        gsap.to(".message",{position:"absolute",background:"yellow",y:-100})
    }

  return (
    <div className="App font-mul w-fit  m-auto">
<div className='message  px-3 py-1 rounded'>
{logginError!==""?(<p>{logginError }<span><button onClick={()=>{dispatch( setLoginError(clearError))}}>    <FontAwesomeIcon className='h-6 w-6 inline text-black  relative top-2' icon={faXmark} /></button></span></p>):""}

</div>
    </div>
  )
}

export default Notification
