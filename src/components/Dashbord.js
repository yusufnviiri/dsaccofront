import React from 'react'
import { useDispatch,useSelector } from 'react-redux'

function Dashbord() {
  const count = useSelector((state)=>state. ApiSlice.age)
  return (
    <>
    <div><h1 className='text-green-900 '> The best app ever
        </h1>
        
        
        <h1 className='text-slate-800  '>{count}
        </h1></div>
    
    
    </>
  )
}

export default Dashbord