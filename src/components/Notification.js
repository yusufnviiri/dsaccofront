import React from 'react'
import gsap from 'gsap'
import { useDispatch,useSelector } from 'react-redux'


function Notification() {
    const  age = useSelector((state)=>state.ApiSlice.age)

    if(age===4){
        gsap.fromTo(".message",{position:"absolute",background:"yellow"},{position:"relative",y:2,background:"red",duration:2})
    } else{
        gsap.to(".message",{position:"absolute",background:"yellow",y:-100})
    }

  return (
    <div className=''>
<p className='message'>
{age===4?"Wow Age is 4":"The thing is Not 4"}

</p>
    </div>
  )
}

export default Notification
