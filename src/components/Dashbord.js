import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { add } from '../redux/ApiSlice'

function Dashbord() {
  const dispatch = useDispatch();

  const count = useSelector((state)=>state.ApiSlice.age)
  return (
    <>
    <div  className=''>
      <h1 className='text-green-900  '> The best app ever
        </h1>
        <div className='w-1/3 flex justify-between  '>
          <button className='bg-green-700 px-3 py-1 my-1 rounded text-stone-200' onClick={()=>dispatch(add())}>ADD</button>
   
        </div>
        
        <h1 className='text-slate-800  '>{count}
        </h1></div>
    
    
    </>
  )
}

export default Dashbord