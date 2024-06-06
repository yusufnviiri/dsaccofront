import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

function Login() {
    const  age = useSelector((state)=>state.ApiSlice.age)
  return (
    <div>
        {age}
     {age===4?"Wow Age is 4":"The thing is Not 4"}
    </div>
  )
}

export default Login
