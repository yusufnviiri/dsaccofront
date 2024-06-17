import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import {useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Menu from './Menu';



function Dashbord() {
  const navigate = useNavigate();

  const users = useSelector((state)=>state.ApiSlice.users)

  var isLoggedIn = JSON.stringify(localStorage.getItem("isLoggedIn"));

  let nullValue= JSON.stringify(localStorage.getItem("token"))
  var userToken = JSON.stringify(localStorage.getItem("bearer"));useEffect(()=>{
  // console.log("getting Users")

  // dispatch(getMemberLoans())

},[users.length])



const logOut=()=>{
  localStorage.clear();
  navigate("/", { replace: true });
}

var obj=[]
if(userToken !==nullValue){
console.log(userToken)
const decoded = jwtDecode(userToken );
console.log(decoded)


      obj =Object.values(decoded)}
  
  return (
    <>
    <menu className='bg-emerald-950 w-full py-2 text-[0.9em]  text-stone-300 flex  justify-between font-robotoCo'>
    
      <Link className=' mx-2 text-stone-100 font-mul tracking-wider' to='/'>Opus   Savings Group</Link>
      {obj.length>0?( <div>   <h2>Name: {obj[2]}</h2></div>
):(  <h2>User: none</h2>)}
      <nav>
       


        
       
 
  <Link className=' mr-2' to='/register'>Sign Up</Link>
  <Link className=' mr-2' to='/logins'>Sign In</Link>
<button  onClick={()=>logOut()} className='text-red-400 uppercase hover:text-yellow-500'>Sign Out</button>     </nav>
    </menu>
 
    {isLoggedIn!==nullValue?(
        <Menu/>):""}
    
    </>
  )
}

export default Dashbord