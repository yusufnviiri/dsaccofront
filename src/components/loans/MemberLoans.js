

import React,{useEffect,useState,useRef} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getMemberLoans ,payLoan,approveLoan} from '../../redux/ApiSlice';
import { useNavigate,Link } from "react-router-dom";



function MemberLoans() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loans = useSelector((state)=>state.ApiSlice.loans)

    useEffect(()=>{dispatch(getMemberLoans())

       
    


    },[loans.length])

    const dataModal = document.querySelectorAll('[data-model-id]')
    if(dataModal.length>0){
        console.log(dataModal)


    }

    const [payloan,setPayloan]= useState(true)
    const [amountPaid,setamountPaid]= useState(0)
    const [loanId,setloanId]= useState(0)
    const [loanid,setloanid]= useState(0)




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
        dispatch(getMemberLoans())
    }
}

const approveMemberLoan=(e)=>{
    e.preventDefault()
    if(amountPaid>0 && loanId>0){
        dispatch(approveLoan(loanid))
        dispatch(getMemberLoans())
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


<Link  state={item} className='mr-2' to='/loan'>View</Link>
<button onClick={()=>setPayForm(item.loanId,Math.ceil((item.payAmount/item.numberOfInstallments)+(item.payAmount%item.numberOfInstallments)))}    type='button' className='bg-indigo-800 text-white rounded px-2' >Pay</button>

{payloan===true?( 

    
    <div  id={item.loanId} className='hidden'>  

<button  onClick={()=>    dispatch(approveLoan(item.loanId))}    type='button' className='bg-red-800 text-white rounded px-2' >Bro approve loan</button>

    <form className='mini_form' onLoad={()=>setloanid(item.loanId)} onSubmit={(e) => {approveMemberLoan(e)    }}  ><label>Amount</label>

<input hidden value={item.loanid}  data-model-id={item.loanId}  placeholder='amount paid'/>

<div className='mini_buttons'>
<input  type='submit' value='approve' className=' bg-blue-800 cursor-pointer text-white rounded px-2' />
<button  onClick={()=>hidePayForm(item.loanId)}    type='button' className='bg-red-800 text-white rounded px-2' >Close</button>
</div>
</form>
       <form className='mini_form'  onSubmit={(e) => {payLoanAmount(e)    }}  ><label>Amount</label>

<input  readOnly className={item.loanId}  value={Math.ceil((item.payAmount/item.numberOfInstallments)+(item.payAmount%item.numberOfInstallments))}  placeholder='amount paid'/>

<div className='mini_buttons'>
<input  type='submit' value='save' className=' bg-blue-800 cursor-pointer text-white rounded px-2' />
<button  onClick={()=>hidePayForm(item.loanId)}    type='button' className='bg-red-800 text-white rounded px-2' >Close</button>
</div>
</form></div>
    
):""}
   
     <p className='font-semibold'>Loan Amount: <span className='font-bold'>{item.principleAmount}</span></p>    
     <p className='font-semibold'>Loan Type: <span className='font-bold'>{item.loanType.description}</span></p> 
    <p className='font-semibold'>Installements: <span className='font-bold'>{item.numberOfInstallments}</span></p> 
    <p className='font-semibold'>Loan  interest: <span className='font-bold'>{item.loanInterest}%</span></p> 
    <p className='font-semibold'>Status: <span className={`${item.status==="pending"?"text-red-700":"text-blue-700"}`}>{item.status}</span></p>
   




 </div>



)):(<p>No account in database</p>)}

</>  )
}




export default MemberLoans
