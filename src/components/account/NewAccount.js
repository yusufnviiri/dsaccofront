import React from 'react'
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAccount } from '../../redux/ApiSlice';
import { Navigate, useNavigate } from "react-router-dom";
function NewAccount() {
    const  logginError = useSelector((state)=>state.ApiSlice.logginError)
    const  notification = useSelector((state)=>state.ApiSlice.notification)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentBalance, setcurrentBalance] = useState("");
    const [openingAmount, setopeningAmount] = useState("");
    const [accountDescription, setaccountDescription] = useState("");
    const accountdetails = {
        openingAmount,
       currentBalance,
        accountDescription };
      const saveAccount=(e) =>{
        //let error = JSON.parse(localStorage.getItem("logginError"));
    
        e.preventDefault();
      dispatch(createAccount(accountdetails));
      if(notification!==""){
        navigate("/", { replace: true });

      }
      
      }

       return (
        <><h4>Login status in register     {logginError}
    </h4>
    <h3>Notification {notification}</h3>
          <div className="w-[30%] m-auto  login_form">
            <h4
              className=" my-6 font-bold   underline-offset-2  
     text-center font-lobs "
            >
      Create Account
            </h4>    
            <form
              onSubmit={(e) => {
                saveAccount(e);
              }}
            >              
             <div className="mb-1  ">
                <label className="font-bold   ml-2 block">Account Type</label>


<select  className='font-bold    block w-full' required  value={accountDescription}
                  onChange={(e) => {
                    setaccountDescription(e.target.value);
                  }} >
                    <option className=' font-thin text-red-900'>...select...</option>

  <option>Savings</option>
  <option>Fixed</option>
  <option>Bussiness</option>
</select>

          
              </div>  
              <div className="mb-1  ">
                <label className="font-bold   ml-2 block">Opening Amount</label>
                <input required
                  value={openingAmount}
                  onChange={(e) => {
                    setopeningAmount(e.target.value);
                  }}
                  className=" w-full   py-3 text-center"
                  type="text"
                />
              </div>
    
              <div className="mb-1  ">
                <label className="font-bold   ml-2 block">Intial Deposit</label>
                <input required
                  value={currentBalance}
                  onChange={(e) => {
                  setcurrentBalance(e.target.value);
                  }}
                  className=" w-full   py-3 text-center"
                  type="text"
                />
              </div>
           
            
                          <div
                className="mt-6 text-white submit   font-bold w-full m-auto
        text-center  bg-green-700 rounded hover:bg-slate-700"
              >
                <input
                  className="uppercase  font-lobs text:[0.48em] sm:text-[0.71em] cursor-pointer text-yellow-300"
                  type="submit"
                />
              </div>
            </form>
          </div>
        </>
      );
}

export default NewAccount