import React from 'react'
import { useState, useEffect } from "react";
import { setLoginError } from "../redux/ApiSlice";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register,getUsers ,createAccount} from "../redux/ApiSlice"
import { Navigate, useNavigate } from "react-router-dom";
function NewAccount() {
    const  logginError = useSelector((state)=>state.ApiSlice.logginError)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentBalance, setcurrentBalance] = useState("");
    const [openingAmount, setopeningAmount] = useState("");
    const [accountDescription, setaccountDescription] = useState("");
    const userdetails = {
        openingAmount,
       currentBalance,
        accountDescription      };
      const RegisterUser=(e) =>{
        //let error = JSON.parse(localStorage.getItem("logginError"));
    
        e.preventDefault();
      dispatch(createAccount(userdetails));
       navigate("/da", { replace: true });}

       return (
        <><h4>Login status in register     {logginError}
    </h4>
          <div className="w-[30%] m-auto  login_form">
            <h4
              className=" my-6 font-bold   underline-offset-2  
     text-center font-lobs "
            >
              REGISTER
            </h4>
    
            <form
              onSubmit={(e) => {
                RegisterUser(e);
              }}
            >
              <div className="mb-1  ">
                <label className="font-bold   ml-2 block">Amount</label>
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
                <label className="font-bold   ml-2 block">Last Name</label>
                <input required
                  value={currentBalance}
                  onChange={(e) => {
                  setcurrentBalance(e.target.value);
                  }}
                  className=" w-full   py-3 text-center"
                  type="text"
                />
              </div>
    
              <div className="mb-1  ">
                <label className="font-bold   ml-2 block">desc</label>
                <input required 
                type="text"
                  value={accountDescription}
                  onChange={(e) => {
                    setaccountDescription(e.target.value);
                  }}
                  className=" w-full   py-3 text-center"
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