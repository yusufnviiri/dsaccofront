import React,{useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import logo from "../assets/opuslogo.png"
import { buyshares,sellShares,getMemberShares } from '../redux/ApiSlice';
import gsap from 'gsap'
function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const shares = useSelector((state)=>state.ApiSlice.shares)
    const [buy,setBuy]= useState(false)
    const [sell,setSell]= useState(false)
    const [showSharesForm,setshowSharesForm]= useState(false)
    const [sharesQuantity,setsharesQuantity]= useState(0)
    let nullValue= JSON.stringify(localStorage.getItem("token"))
    var userToken = JSON.stringify(localStorage.getItem("bearer"));
    
    if(userToken !==nullValue){
      const decoded = jwtDecode(userToken );

      const obj =Object.values(decoded)
      obj.length=2       

    }

    const numberOfShares={
      sharesQuantity
    }
    const setBuyShares=()=>{
      setBuy(true)
      setSell(false)
     }
    const setSellShares=()=>{
      setBuy(false)
      setSell(true)
}

  useEffect(()=>{
    let nullValue= JSON.stringify(localStorage.getItem("token"))
  var userToken = JSON.stringify(localStorage.getItem("bearer"));
  
  if(userToken !==nullValue){
  console.log(userToken)
  const decoded = jwtDecode(userToken );

  const obj =Object.values(decoded)
    

//   const protectedHeader = jose.decodeProtectedHeader(userToken)
console.log(decoded)
console.log(obj)

  }
  setTimeout(() => {
    if(userToken===nullValue){
        navigate("/logins", { replace: true });
      }  
  }, 3000);
  dispatch(getMemberShares())
  console.log(shares)
  },[shares.length])

  const shareActions=(e)=>{
    e.preventDefault()
    if(sell){
      dispatch(sellShares(numberOfShares))
      setsharesQuantity(0)    }  
      if(buy){
        dispatch(buyshares(numberOfShares))
        setsharesQuantity(0)      }   
  }


  const animations=()=>{
    var t1 = gsap.timeline({repeat:-1, repeatDelay: 10});
    t1.fromTo("#knowShop",{scale:0,opacity:0},{scale:1,opacity:1,duration:2,ease:'back'})
    t1.fromTo("#knowApp",{scale:0,opacity:0},{scale:1,opacity:1,duration:2,ease:'back'})
    t1.fromTo("#knowInterest",{scale:0,opacity:0},{scale:1,opacity:1,duration:2,ease:'back'})
    t1.fromTo("#knowMortgage",{scale:0,opacity:0},{scale:1,opacity:1,duration:2,ease:'back'}) 
    t1.fromTo(".facts li",{scale:0,opacity:0},{scale:1,opacity:1,duration:2,stagger:0.7,ease:'back'}) 

  }
  
  useEffect(()=>{animations()
  },[])


  return (
    <>   
    <div>    
    <menu className='bg-rose-800 w-full py-2 text-[0.7em] md:text-[0.9em]  flex justify-between px-5'>
    <Link className='text-stone-200 mr-2' to='/new-account'>Create Account</Link>
  <Link className=' mr-2' to='/deposit'>Deposit</Link>
  <Link className=' mr-2' to='/deposits'>Deposits</Link>
  <Link className='mr-2' to='/withdraw'>Withdraw</Link>
  <Link className=' mr-2' to='/withdraws'>Withdraws</Link>
  <Link className=' mr-2' to='/loan-application'>Loan</Link>
  <Link className=' mr-2' to='/loans'>Loans</Link>
  <Link className='mr-2' to='/accounts'>Accounts</Link>
  <Link className='mr-2' to='/new-account'>New Account </Link>
  <button onClick={()=>{setshowSharesForm(!showSharesForm)}}    type='button' className='bg-indigo-800 text-white rounded px-2 ' >Shares</button>
    </menu>
<div>
{shares.length>0?(  <h4>Shares {shares[0].numberOfShares}</h4>
):""}


{showSharesForm===true?(    
    <div className=' flex justify-end items-end md:pr-5 pr-2'>    <form className='mini_form'
      onSubmit={(e) => {shareActions(e)
    }}  ><label>Amount</label>
<input   value={sharesQuantity}  onChange={(e)=>setsharesQuantity(e.target.value)} placeholder='shares'/>
<div className='mini_buttons'>
<button onClick={()=>{setBuyShares()}}   type='submit' className='r-10 bg-blue-800  w-1/3 cursor-pointer text-white rounded px-2 mr-6' >Buy</button>
<button onClick={()=>{setSellShares()}}     type='submit' className='r-10 bg-red-800  w-1/3 cursor-pointer text-white rounded px-2' >Sell</button>


</div>
</form></div>
    
):""}

</div>
    </div>
    <div className='flex  gap-5   px-4 mt-16 justify-between '>
    <div id='know' className='text-left w-[40%]  p-6 '>
<h4 className='text-[2em] font-anton  ml-9 text-yellow-300 font-bold'> DID YOU KNOW</h4>
<ul id='knowList'>
  <li id='knowShop' className='text-[1em] py-2 '>You can  
  <span className='text-green-700   text-[1em] '>access</span> OPUS e-shop on<span className='text-green-700 text-[1em] '>this</span> portal
  </li>
  <li id='knowApp' className='text-[1em] pb-2 '>Get
  <span className='text-green-700   text-[1em] '>all</span> our services on your <span className='text-green-700 text-[1em] '>mobile</span> 
  </li>
  
  <li id='knowInterest' className='text-[1em] pb-2 '>Salary loan 
  <span className='text-green-700   text-[1em] '>Interest</span> now at <span className='text-green-700 text-[1em] '> 9.99 %</span> 
  </li>

   
  <li id='knowMortgage' className='text-[1em] pb-2 '>Dual
  <span className='text-green-700   text-[1em] '>Mortgage</span> now <span className='text-green-700 text-[1em] '> available </span> on low prices
  </li>

  </ul>

      
</div>
<div className='w-1/5'>

<img src={logo} className='w-full  m-auto' alt='logo'/>


      
</div>

<div className=' w-[40%] pl-9 text-justify  p-6 '>
<h4 className='text-[2em] font-anton text-center text-yellow-300 font-bold'>FACTS ABOUT OPUS</h4>
<div className='flex  gap-10 ml-[20%]'>
<ul className='facts'>
  <li className='text-[1em] py-2 '>Active Members:
  </li>
  <li className='text-[1em] pb-2 '>Liabilities value YTD : 
  </li>
  <li className='text-[1em] by-2 '>Assets value YTD : 
  </li>
  <li className='text-[1em] pb-2 '>Annual Revenue :
  </li>
  <li className='text-[1em] pb-2 '>Active Member Loans
  </li>

  </ul>
  <ul className='facts'>
  <li className='text-[1em] py-2  text-green-800'> 9421
  </li>
  <li className='text-[1em] pb-2  text-red-800'> $130M
  </li>
  <li className='text-[1em] pb-2  text-green-800'> $700M
  </li><li className='text-[1em] pb-2  text-red-800'> $530M
  </li><li className='text-[1em] pb-2  text-red-800'> 12934
  </li>

  </ul>
  </div>

      
</div>



    </div>
    
    </>
  )
}

export default Home
