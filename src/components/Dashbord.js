import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { add } from '../redux/ApiSlice'
import { Link } from 'react-router-dom';

function Dashbord() {
  const dispatch = useDispatch();

  const count = useSelector((state)=>state.ApiSlice.age)
  const  logginError = useSelector((state)=>state.ApiSlice.logginError)

  return (
    <>
    <menu className='bg-black w-full py-2 '>
  <Link className='text-stone-300 mr-2' to='/'>Home</Link>
  <Link className='text-stone-300 mr-2' to='/da'>Not</Link>
  <Link className='text-stone-300 mr-2' to='/register'>Sign In</Link>

    </menu>
    <div  className=''>
      
      <h1 className='text-green-900  '> The best app ever
        </h1>

        <h4 className='text-red-900  '>Login status     {logginError}
        </h4>
        <div className='w-1/3 flex justify-between  '>
          <button className='bg-green-700 px-3 py-1 my-1 rounded text-stone-200' onClick={()=>dispatch(add())}>ADD</button>
   
        </div>
        
        <h1 className='text-slate-800  '>{count}
        </h1></div>
    
    
    </>
  )
}

export default Dashbord