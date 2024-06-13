import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {useNavigate } from "react-router-dom";


function Dashbord() {
  const navigate = useNavigate();

  const users = useSelector((state)=>state.ApiSlice.users)

 const  logginError = useSelector((state)=>state.ApiSlice.logginError)
useEffect(()=>{
  // console.log("getting Users")

  // dispatch(getMemberLoans())

},[users.length])



const logOut=()=>{
  localStorage.clear();
  navigate("/", { replace: true });
}

  return (
    <>
    <menu className='bg-black w-full py-2 text-[0.9em] '>
  <Link className='text-stone-300 mr-2' to='/'>Home</Link>
  <Link className='text-stone-300 mr-2' to='/da'>Not</Link>
  <Link className='text-stone-300 mr-2' to='/register'>Sign Up</Link>
  <Link className='text-stone-300 mr-2' to='/logins'>Sign In</Link>
  <Link className='text-stone-300 mr-2' to='/new-account'>Create Account</Link>
<button  onClick={()=>logOut()} className='text-red-500 uppercase hover:text-yellow-500'>Sign Out</button>
    </menu>
    <div  className=''>      
     

        <h4 className='text-red-900  '>Login status     {logginError}
        </h4>

        
     </div>
    
    
    </>
  )
}

export default Dashbord