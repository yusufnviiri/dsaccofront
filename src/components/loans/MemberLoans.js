

import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getMemberLoans } from '../../redux/ApiSlice';

function MemberLoans() {
    const dispatch = useDispatch();
    const loans = useSelector((state)=>state.ApiSlice.loans)

   useEffect(()=>{dispatch(getMemberLoans())},[dispatch])

  return (
<>   
<h4 className=" my-4 font-bold   underline-offset-2 underline 
 text-center font-poppins ">Number of Loans {loans.length}
</h4>

 <div>MemberAccounts</div>
 {loans.length>0? loans.map((item)=>(<div key={item.loanId} className='flex  flex-col justify-start my-5 text-left w-1/2 m-auto '>
    <p className='font-semibold'>Date: <span className='font-bold'>{item.applicationDate}</span></p>
    <p className='font-semibold'>Available Balance: <span className='font-bold'>{item.currentBalance}</span></p>    <p className='font-semibold'>Loan Amount: <span className='font-bold'>{item.principleAmount}</span></p>    
    <p className='font-semibold'>Installements: <span className='font-bold'>{item.numberOfInstallments}</span></p>
    <p className='font-semibold'>Payments: <span className='font-bold'>{item.numberOfPayments}</span></p>  <p className='font-semibold'>Loan Amount with interest: <span className='font-bold'>{item.payAmount}</span></p>  <p className='font-semibold'>Balance: <span className='font-bold'>{item.outstandingBalance}</span></p>
    <p className='font-semibold'>Completed?: <span className='font-bold'>{item.isCompleted}</span></p>
        "security": "Salary",
        <p className='font-semibold'>Security: <span className='font-bold'>{item.security}</span></p>   <p className='font-semibold'>loan Period: <span className='font-bold'>{item.loanPeriod}</span></p>   <p className='font-semibold'>Completed?: <span className='font-bold'>{item.isCompleted}</span></p>



        <div>
<p>Witnessess</p>
     <p className='font-semibold'>Name: <span className='font-bold'>{item.loanWitness.firstWitnessName}</span></p>
     <p className='font-semibold'>Address: <span className='font-bold'>{item.loanWitness.firstWitnessAddress}</span></p> <p className='font-semibold'>Contact: <span className='font-bold'>{item.loanWitness.firstWitnessContact}</span></p> <p className='font-semibold'>Name: <span className='font-bold'>{item.loanWitness.secondWitnessName}</span></p> <p className='font-semibold'>Address: <span className='font-bold'>{item.loanWitness.secondWitnessAddress}</span></p> <p className='font-semibold'>Name: <span className='font-bold'>{item.loanWitness.secondWitnessName}</span></p> <p className='font-semibold'>Contact: <span className='font-bold'>{item.loanWitness.secondWitnessContact}</span></p>
</div>

 </div>



)):(<p>No account in database</p>)}

</>  )
}




export default MemberLoans
