import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/ApiSlice"
import { redirect } from 'react-router-dom';
import { Navigate, useNavigate } from "react-router-dom";import { getUsers,getMemberLoans } from '../redux/ApiSlice';
import { add } from '../redux/ApiSlice'
import { Link } from 'react-router-dom';
function Home() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const count = useSelector((state)=>state.ApiSlice.age)
    const users = useSelector((state)=>state.ApiSlice.users)
    const memmberLoans = useSelector((state)=>state.ApiSlice.loans)
  
   const  logginError = useSelector((state)=>state.ApiSlice.logginError)
  useEffect(()=>{
    let nullValue= JSON.stringify(localStorage.getItem("token"))
  let userToken = JSON.stringify(localStorage.getItem("bearer"));
  console.log(userToken)
  console.log(typeof(userToken))

  console.log(nullValue)
  console.log(typeof(nullValue))
  
  setTimeout(() => {
    if(userToken===nullValue){
        console.log("Am going to redirect")
        navigate("/logins", { replace: true });
      }  
  }, 2000);
  

  })



  return (
    <>
    
    <div>
    <h1 className='text-green-900  '> The Home Page
    </h1>
    </div>
    
    </>
  )
}

export default Home
