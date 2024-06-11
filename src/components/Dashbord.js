import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { add } from '../redux/ApiSlice'
import { Link } from 'react-router-dom';
import { Navigate, useNavigate } from "react-router-dom";import { getUsers,getMemberLoans } from '../redux/ApiSlice';


function Dashbord() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const count = useSelector((state)=>state.ApiSlice.age)
  const users = useSelector((state)=>state.ApiSlice.users)
  const memmberLoans = useSelector((state)=>state.ApiSlice.loans)

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
      <h1 className='text-green-900  '> The best app ever
        </h1>

        <h4 className='text-red-900  '>Login status     {logginError}
        </h4>
        <div className='w-1/3 flex justify-between  '>
          <button className='bg-green-700 px-3 py-1 my-1 rounded text-stone-200' onClick={()=>dispatch(add())}>ADD</button>
   
        </div>
        
        <h1 className='text-slate-800  '>This is dashboard
        </h1></div>
    
    
    </>
  )
}

export default Dashbord