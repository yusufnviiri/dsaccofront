import React,{useEffect,useState} from 'react'
import Login from './Login'
import Register from './Register'
import { Link } from 'react-router-dom';


function AccessControl() {
const [signin,setSignIn]= useState(true)


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