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


    const numberOfShares={
      sharesQuantity
    }
    const setBuyShares=()=>{
      console.log("Am going to redirect")      
      setBuy(true)
      setSell(false)
    //   if(buy){
    //     dispatch(buyshares(numberOfShares))
    //     setsharesQuantity(0)      }
     }
    const setSellShares=()=>{
      setBuy(false)
      setSell(true)
      console.log("fuck me")
      // if(sell){
      //   dispatch(sellShares(numberOfShares))
      //   setsharesQuantity(0)

      // }     

    }





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
  console.log(shares)



  },[shares.length])



  const shareActions=(e)=>{
    e.preventDefault()
    if(sell){
      dispatch(sellShares(numberOfShares))
      setsharesQuantity(0)    }  
      if(buy){
        dispatch(buyshares(numberOfShares))
        setsharesQuantity(0)      }
    


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

{shares.length>0?(  <h4>Shares {shares[0].numberOfShares}</h4>
):""}

<button onClick={()=>{setshowSharesForm(!showSharesForm)}}    type='button' className='bg-indigo-800 text-white rounded px-2 my-3' >Shares</button>
{showSharesForm===true?(    
    <div >    <form className='my-4 w-1/3 m-auto'
      onSubmit={(e) => {shareActions(e)
    }}  ><label>Amount</label>
<input   value={sharesQuantity}  onChange={(e)=>setsharesQuantity(e.target.value)} placeholder='shares'/>
<div className='w-1/2'>
<button onClick={()=>{setBuyShares()}}   type='submit' className='r-10 bg-blue-800  w-1/3 cursor-pointer text-white rounded px-2 mr-6' >Buy</button>
<button onClick={()=>{setSellShares()}}     type='submit' className='r-10 bg-red-800  w-1/3 cursor-pointer text-white rounded px-2' >Sell</button>


</div>
</form></div>
    
):""}

</div>



    </div>
    
    </>
  )
}

export default Home
