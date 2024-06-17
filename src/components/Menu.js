import React,{useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import logo from "../assets/opuslogo.png"
import { buyshares,sellShares,getMemberShares } from '../redux/ApiSlice';
import gsap from 'gsap'
function Menu() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const shares = useSelector((state)=>state.ApiSlice.shares)
    const [buy,setBuy]= useState(false)
    const [sell,setSell]= useState(false)
    const [showSharesForm,setshowSharesForm]= useState(false)
    const [sharesQuantity,setsharesQuantity]= useState(0)
    let nullValue= JSON.stringify(localStorage.getItem("token"))
    var userToken = JSON.stringify(localStorage.getItem("bearer"));    
    if(userToken !==nullValue){
      const decoded = jwtDecode(userToken );
      const obj =Object.values(decoded)
      obj.length=2       

    }

    const numberOfShares={
      sharesQuantity
    }
    const setBuyShares=()=>{
      setBuy(true)
      setSell(false)
     }
    const setSellShares=()=>{
      setBuy(false)
      setSell(true)
}

  useEffect(()=>{
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
    <menu className='bg-rose-800 w-full py-2 text-[0.7em] md:text-[0.9em]  flex justify-between px-5'>
    <Link className='text-stone-200 mr-2' to='/new-account'>Create Account</Link>
  <Link className=' mr-2' to='/deposit'>Deposit</Link>
  <Link className=' mr-2' to='/deposits'>Deposits</Link>
  <Link className='mr-2' to='/withdraw'>Withdraw</Link>
  <Link className=' mr-2' to='/withdraws'>Withdraws</Link>
  <Link className=' mr-2' to='/loan-application'>Loan</Link>
  <Link className=' mr-2' to='/loans'>Loans</Link>
  <Link className='mr-2' to='/accounts'>Accounts</Link>
  <Link className='mr-2' to='/new-account'>New Account </Link>
  <button onClick={()=>{setshowSharesForm(!showSharesForm)}}    type='button' className='bg-indigo-800 text-white rounded px-2 ' >Shares</button>
    </menu>
<div>
{shares.length>0?(  <h4>Shares {shares[0].numberOfShares}</h4>
):""}


{showSharesForm===true?(    
    <div className=' flex justify-end items-end md:pr-5 pr-2'>    <form className='mini_form'
      onSubmit={(e) => {shareActions(e)
    }}  ><label>Amount</label>
<input   value={sharesQuantity}  onChange={(e)=>setsharesQuantity(e.target.value)} placeholder='shares'/>
<div className='mini_buttons'>
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














export default Menu