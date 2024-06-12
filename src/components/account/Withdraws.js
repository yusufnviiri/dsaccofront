
import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getMemberAccounts ,getMemberDeposits,getMemberWithdraws} from '../../redux/ApiSlice';
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
function Withdraws() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const count = useSelector((state)=>state.ApiSlice.age)
    const accounts = useSelector((state)=>state.ApiSlice.accounts)
    const withdraws = useSelector((state)=>state.ApiSlice.withdraws)  
   const  logginError = useSelector((state)=>state.ApiSlice.logginError)
   useEffect(()=>{dispatch(getMemberDeposits())},[withdraws.length])

  return (
<>   
<h4 className=" my-4 font-bold   underline-offset-2 underline 
 text-center font-poppins ">Number of accounts {accounts.length}
</h4>

 <div>Member Withdraws</div>


 {withdraws.length>0? withdraws.map((item)=>(<div key={item.depositId
} className='flex   flex-col justify-start my-5 text-left w-1/2 m-auto '>

    <p className='font-semibold'>Account : <span className='font-bold'>{item.account.accountDescription}</span></p>
    <p className='font-semibold'>Available Balance: <span className='font-bold'>{item.account.currentBalance}</span></p>       <p className='font-semibold'>Amount: <span className='font-bold'>{item.amount
    }</span></p>
    <p className='font-semibold'>Withdraw Date: <span className='font-bold'>{item.depositDate}</span></p>
 </div>)):(<p>No account in database</p>)}

</>  )
}







export default Withdraws
