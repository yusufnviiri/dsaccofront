import React,{useEffect,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import userData from '../../redux/ApiSlice'

function UpdateUserData(props) {
// const [showForm,setShowForm] = useState();

const [dateOfBirth,setdateOfBirth]=useState()
const [sex,setSex]=useState()
const [nextOfKin,setnextOfKin]=useState()
const [kinRelationShip,setkinRelationShip]=useState()
const [district,setdistrict]=useState()
const [occupation,setoccupation]=useState()
const userdetails={
    dateOfBirth,sex,nextOfKin,kinRelationShip,district,
    occupation
}
let showForm = props.showForm
console.log(showForm)
const handleSubmit=(e)=>{
e.preventDefault()
dispatchEvent(userData(userdetails))

}

  return (
    <div className='absolute w-full h-full top-0 left-0'>UserData
 <div className="w-[30%] m-auto  login_form">
        <h4 className=" my-6 font-bold   underline-offset-2  
     text-center font-lobs "  >  Withdraw </h4>   
          <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >

<div className="mb-1  ">
            <label className="font-bold   ml-2 block"> Gender </label>
            <select
              className="font-bold    block w-full"
              required
              value={sex}
              onChange={(e) => {
                setSex(e.target.value);
              }}
            >
              <option className="">...select...</option>             
              <option className=" ">Male</option>
                            <option className=" ">Female</option>                                
                     </select>
          </div>

<div className="mb-1  ">
            <label className="font-bold   ml-2 block">District</label>
            <input
              required
              value={district}
              onChange={(e) => {
                setdistrict(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>
          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Occupation</label>
            <input
              required
              value={occupation}
              onChange={(e) => {
                setoccupation(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>
          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Date Of Birth</label>
            <input
              required
              value={dateOfBirth}
              onChange={(e) => {
                setdateOfBirth(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="date"
            />
          </div>

<div className="mb-1  ">
            <label className="font-bold   ml-2 block">Next Of Kin</label>
            <input
              required
              value={nextOfKin}
              onChange={(e) => {
                setnextOfKin(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>


          <div className="mb-1  ">
            <label className="font-bold   ml-2 block"> Relationship </label>
            <select
              className="font-bold    block w-full"
              required
              value={kinRelationShip}
              onChange={(e) => {
                setkinRelationShip(e.target.value);
              }}
            >
              <option className="">...select...</option>             
              <option className=" ">Brother</option>
                            <option className=" ">Sister</option>
                            <option className=" ">Relative</option>
                            <option className=" ">Parent</option>
                           <option className=" ">Friend</option>                   
                     </select>
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


    </div>
  )
}

export default UpdateUserData