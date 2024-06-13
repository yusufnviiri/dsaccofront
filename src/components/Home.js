import React,{useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { buyshares,sellShares,getMemberShares } from '../redux/ApiSlice';
function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const shares = useSelector((state)=>state.ApiSlice.shares)
    const [buy,setBuy]= useState(false)
    const [sell,setSell]= useState(false)
    const [showSharesForm,setshowSharesForm]= useState(true)
    const [sharesQuantity,setsharesQuantity]= useState(0)





  useEffect(()=>{
    let nullValue= JSON.stringify(localStorage.getItem("token"))
  let userToken = JSON.stringify(localStorage.getItem("bearer"));  
  setTimeout(() => {
    if(userToken===nullValue){
        console.log("Am going to redirect")
        navigate("/logins", { replace: true });
      }  
  }, 3000);
  dispatch(getMemberShares())


  })

  useEffect(()=>{  
    
    console.log("getting")
    console.log(shares)
  },[dispatch])


  const shareActions=()=>{

  }
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
<div>
<button onClick={()=>{setshowSharesForm(!showSharesForm)}}    type='button' className='bg-indigo-800 text-white rounded px-2 my-3' >Shares</button>
{showSharesForm===true?(    
    <div >    <form className='my-4'
      onSubmit={(e) => {shareActions(e)
    }}  ><label>Amount</label>
<input   value={sharesQuantity}  onChange={(e)=>setsharesQuantity(e.target.value)} placeholder='shares'/>
<div>
<input  type='submit' value='buy' className=' mr-10 bg-blue-800 cursor-pointer text-white rounded px-2' /><input  type='submit' value='sell' className=' bg-red-800 cursor-pointer text-white rounded px-2' />
</div>
</form></div>
    
):""}

</div>



    </div>
    
    </>
  )
}

export default Home
