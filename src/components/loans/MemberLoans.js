

import React,{useEffect,useState,useRef} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getMemberLoans ,payLoan} from '../../redux/ApiSlice';
import { useNavigate } from "react-router-dom";


function MemberLoans() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loans = useSelector((state)=>state.ApiSlice.loans)

    useEffect(()=>{dispatch(getMemberLoans())
console.log(loans)
        if(loans.length<1){
            navigate("/loan-application", { replace: true });
         } 


    },[loans.length])

    const [payloan,setPayloan]= useState(true)
    const [amountPaid,setamountPaid]= useState(0)
    const [loanId,setloanId]= useState(0)


    const setPayForm=(id,amount)=>{
        setloanId(id)
        setamountPaid(amount)

        const loanpayForm= document.getElementById(id)
        if(id>0){
            loanpayForm.style.display="block"
               }
    }
    const hidePayForm=(id)=>{
        const loanpayForm= document.getElementById(id)
        if(id>0){
            loanpayForm.style.display="none"
                }
    }
const paymentData= {
    amountPaid,loanId
}
const payLoanAmount=(e)=>{
    e.preventDefault()
    if(amountPaid>0 && loanId>0){
        dispatch(payLoan(paymentData))
    }
}
 

  return (
<>   
<h4 className=" my-4 font-bold   underline-offset-2 underline 
 text-center font-poppins ">Number of Loans {loans.length}
</h4>

 <div>MemberAccounts</div>
 {loans.length>0? loans.map((item)=>(<div key={item.loanId}  
 
 className='flex  flex-col justify-start my-5 text-left w-1/2 m-auto '>
<button onClick={()=>setPayForm(item.loanId,Math.ceil((item.payAmount/item.numberOfInstallments)+(item.payAmount%item.numberOfInstallments)))}    type='button' className='bg-indigo-800 text-white rounded px-2' >Pay</button>

{payloan===true?(
    
    <div  id={item.loanId} className='hidden'>  
       <form className='mini_form'  onSubmit={(e) => {payLoanAmount(e)    }}  ><label>Amount</label>

<input  readOnly className={item.loanId}  value={Math.ceil((item.payAmount/item.numberOfInstallments)+(item.payAmount%item.numberOfInstallments))}  placeholder='amount paid'/>

<div className='mini_buttons'>
<input  type='submit' value='save' className=' bg-blue-800 cursor-pointer text-white rounded px-2' />
<button  onClick={()=>hidePayForm(item.loanId)}    type='button' className='bg-red-800 text-white rounded px-2' >Close</button>
</div>
</form></div>
    
):""}
<h4> loan number {item.loanId} </h4>
    <p className='font-semibold'>Date: <span className='font-bold'>{item.applicationDate}</span></p>
    <p className='font-semibold'>Available Balance: <span className='font-bold'>{item.currentBalance}</span></p>    <p className='font-semibold'>Loan Amount: <span className='font-bold'>{item.principleAmount}</span></p>    
    <p className='font-semibold'>Installements: <span className='font-bold'>{item.numberOfInstallments}</span></p>
    <p className='font-semibold'>Payments: <span className='font-bold'>{item.numberOfPayments}</span></p>  <p className='font-semibold'>Loan Amount with interest: <span className='font-bold'>{item.payAmount}</span></p>  <p className='font-semibold'>Balance: <span className='font-bold'>{item.outstandingBalance}</span></p>
    <p className='font-semibold'>Completed? <span className='font-bold'>{item.isCompleted.toString()}</span></p>
        <p className='font-semibold'>Security: <span className='font-bold'>{item.security}</span></p>  <p className='font-semibold'>loan Period: <span className='font-bold'>{item.loanPeriod}</span></p>   <p className='font-semibold'>Status: <span className={`${item.status==="pending"?"text-red-700":"text-blue-700"}`}>{item.status}</span></p>
   


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
