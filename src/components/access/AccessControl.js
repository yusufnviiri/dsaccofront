import React,{useEffect,useState} from 'react'
import Login from './Login'
import Register from './Register'
import { Link } from 'react-router-dom';


function AccessControl() {
      const tempLogin="eyJhbGciOiAiSFMyNTYiLCAidHlwIjogIkpXVCJ9.eyJ1c2VybmFtZSI6ICJ1c2VyIiwgImlhdCI6IDE2ODY3MzEyMDB9.5a33u4A3ErsN7ix5u7F9AXu5AoJkFFGzFzVXAIbms8Q"
const [signin,setSignIn]= useState(true)
useEffect(() => {
  
     localStorage.setItem("bearer",JSON.stringify(tempLogin))
  
        // navigate("/students", { replace: true });    
    });
  


  return (
<>

<nav>       
       
 
       <Link className=' mr-2' to='/register'>Sign Up</Link>
       <Link className=' mr-2' to='/logins'>Sign In</Link>
     <button  onClick={()=>setSignIn(!signin)} className='text-red-400 uppercase hover:text-yellow-500'>Tuggle state</button>     </nav>
{signin===false?(<Login/>):(<Register/>)}


</>  )
}

export default AccessControl