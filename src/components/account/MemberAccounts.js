import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getMemberAccounts } from '../../redux/ApiSlice';

function MemberAccounts() {
    const dispatch = useDispatch();
    const accounts = useSelector((state)=>state.ApiSlice.accounts)

   useEffect(()=>{dispatch(getMemberAccounts())},[dispatch])

  return (
<>   
<h4 className=" my-4 font-bold   underline-offset-2 underline 
 text-center font-poppins ">Number of accounts {accounts.length}
</h4>

 <div>MemberAccounts</div>
 {accounts.length>0? accounts.map((item)=>(<div key={item.accountId} className='flex  flex-col justify-start my-5 text-left w-1/2 m-auto '>
    <p className='font-semibold'>Type: <span className='font-bold'>{item.accountDescription}</span></p>
    <p className='font-semibold'>Available Balance: <span className='font-bold'>{item.currentBalance}</span></p>    <p className='font-semibold'>Opening Amount: <span className='font-bold'>{item.openingAmount}</span></p>    <p className='font-semibold'>Initial Deposit: <span className='font-bold'>{item.initialDeposit}</span></p>
    <p className='font-semibold'>opening Date: <span className='font-bold'>{item.openingDate}</span></p>
 </div>)):(<p>No account in database</p>)}

</>  )
}

export default MemberAccounts