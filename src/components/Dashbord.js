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
    <menu className='bg-emerald-950 w-full py-2 text-[0.9em]  text-stone-300 flex  justify-between font-robotoCo'>
    
      <Link className=' mx-2 text-stone-100 font-mul tracking-wider' to='/'>Dixieland Traders Savings Group</Link>

      <nav>

 
  <Link className=' mr-2' to='/register'>Sign Up</Link>
  <Link className=' mr-2' to='/logins'>Sign In</Link>
<button  onClick={()=>logOut()} className='text-red-400 uppercase hover:text-yellow-500'>Sign Out</button>     </nav>
    </menu>
 
    
    
    </>
  )
}

export default Dashbord