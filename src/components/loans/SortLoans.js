
import React,{useEffect,useState,useRef} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getMemberLoans ,payLoan,approveLoan} from '../../redux/ApiSlice';
import { useNavigate,Link } from "react-router-dom";

function SortLoans(props) {

let payloan=true
    const loans= props.loans
  return (
    <>   
    <h4 className=" my-4 font-bold   underline-offset-2 underline 
     text-center font-poppins ">Number of Loans {loans.length}
    </h4>
    
    <div className='login_form'   ><label>Sort</label>
    
  
    
    
    </div>
    {/* {console.log(sortArray)} */}
    
     {loans.length>0? loans.map((item)=>(<div key={item.loanId}  
     
     className='flex  flex-col justify-start my-5 text-left w-1/2 m-auto '>
    
    
    <Link  state={item} className='mr-2' to='/loan'>View</Link>
  
    
    {payloan===true?( 
    
        
        <div  id={item.loanId} className='hidden'>  
    
    {/* <button  onClick={()=>    dispatch(approveLoan(item.loanId))}    type='button' className='bg-red-800 text-white rounded px-2' >Bro approve loan</button> */}
    
{/*      
           <form className='mini_form'  onSubmit={(e) => {payLoanAmount(e)    }}  ><label>Amount</label>
    
    <input  readOnly className={item.loanId}  value={Math.ceil((item.payAmount/item.numberOfInstallments)+(item.payAmount%item.numberOfInstallments))}  placeholder='amount paid'/>
    
    <div className='mini_buttons'>
    <input  type='submit' value='save' className=' bg-blue-800 cursor-pointer text-white rounded px-2' />
    <button  onClick={()=>hidePayForm(item.loanId)}    type='button' className='bg-red-800 text-white rounded px-2' >Close</button>
    </div>
    </form> */}
    </div>
        
    ):""}
       
         <p className='font-semibold'>Loan Amount: <span className='font-bold'>{item.principleAmount}</span></p>    
         <p className='font-semibold'>Loan Type: <span className='font-bold'>{item.loanType.description}</span></p> 
        <p className='font-semibold'>Installements: <span className='font-bold'>{item.numberOfInstallments}</span></p> 
        <p className='font-semibold'>Loan  interest: <span className='font-bold'>{item.loanInterest}%</span></p> 
        <p className='font-semibold'>Status: <span className={`${item.status==="pending"?"text-red-700":"text-blue-700"}`}>{item.status}</span></p>
       
    
    
    
    
     </div>
    
    
    
    )):(<p>No account in database</p>)}
    
    </> 
  )
}

export default SortLoans
