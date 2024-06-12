import React,{useEffect} from 'react'

import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();

  useEffect(()=>{
    let nullValue= JSON.stringify(localStorage.getItem("token"))
  let userToken = JSON.stringify(localStorage.getItem("bearer"));  
  setTimeout(() => {
    if(userToken===nullValue){
        console.log("Am going to redirect")
        navigate("/logins", { replace: true });
      }  
  }, 3000);
  

  })
  return (
    <>   
    <div>
    <h1 className='text-green-900  '> The Home Page
    </h1>
    <menu className='bg-indigo-950 w-full py-2 text-[0.7em] '>
  <Link className='text-stone-200 mr-2' to='/deposit'>Deposit</Link>
  <Link className='text-stone-300 mr-2' to='/deposits'>Deposits</Link>
  <Link className='text-stone-300 mr-2' to='/withdraw'>Withdraw</Link>
  <Link className='text-stone-300 mr-2' to='/withdraws'>Withdraws</Link>
  <Link className='text-stone-300 mr-2' to='/loan-application'>Loan</Link>
  <Link className='text-stone-300 mr-2' to='/loans'>Loans</Link>
  <Link className='text-stone-300 mr-2' to='/logins'>Shares</Link>
  <Link className='text-stone-300 mr-2' to='/accounts'>Accounts</Link>
  <Link className='text-stone-300 mr-2' to='/new-account'>New Account </Link>
    </menu>
    </div>
    
    </>
  )
}

export default Home
