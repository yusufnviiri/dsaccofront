import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { getUsers,getMemberLoans } from '../redux/ApiSlice';
import { add } from '../redux/ApiSlice'
import { Link } from 'react-router-dom';
function Home() {

    const dispatch = useDispatch();

    const count = useSelector((state)=>state.ApiSlice.age)
    const users = useSelector((state)=>state.ApiSlice.users)
    const memmberLoans = useSelector((state)=>state.ApiSlice.loans)
  
   const  logginError = useSelector((state)=>state.ApiSlice.logginError)
  useEffect(()=>{

    // check if token exists

    const userToken = JSON.stringify(localStorage.getItem("bearer"))
    console.log(userToken)
    // console.log("getting Users")
  
    // dispatch(getMemberLoans())
  
  },[users.length])
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
