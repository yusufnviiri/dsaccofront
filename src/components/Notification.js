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
const isFail = "red";

  const clearError = "";

  var time = gsap.timeline({repeat:0,onComplete:()=>{dispatch(setLoginError(clearError))}});

    if(logginError!==""){
      // gsap.fromTo(".message",{position:"absolute",padding:"5px",color:'white'},{position:"relative",y:0,background:`${logginError==="success!!"?isSuccess:isFail}`,duration:1})        
      console.log(logginError)
     time.fromTo(".message",{position:"absolute",padding:"5px",y:-500,color:'white'},{position:"relative",y:0,background:`${logginError==="success!!"?isSuccess:isFail}`,duration:5})   
    } else{
        gsap.to(".message",{position:"absolute",background:"yellow",y:-100})
    }

  return (
    <div className="App font-mul w-fit  m-auto">
<div className='message  px-3  rounded'>
{logginError!==""?(<p>{logginError }<span><button onClick={()=>{dispatch( setLoginError(clearError))}}>    <FontAwesomeIcon className='h-6 w-6 inline text-indigo-800 ml-4 relative top-2' icon={faXmark} /></button></span></p>):""}

</div>
    </div>
  )
}

export default Notification
