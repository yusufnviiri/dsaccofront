
import { useState, useEffect } from "react";
import { setLoginError } from "../redux/ApiSlice";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register,getUsers } from "../redux/ApiSlice"
import { Navigate, useNavigate } from "react-router-dom";
function Register() {
  var myref = useRef(null);
const users = useSelector((state)=>state.ApiSlice.users)
const  logginError = useSelector((state)=>state.ApiSlice.logginError)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");


  useEffect(() => {
  
    // dispatch(getUsers())
    // dispatch(setLoginError("hey"))

    console.log(users)

      // navigate("/students", { replace: true });    
  },[]);

const comparePasswords=(stringA,stringB)=>{
if(stringA!==stringB){
  dispatch(setLoginError("password not maching"))
  return false
}
else {

  return true
}
}
  const userdetails = {
    firstName,
    lastName,
    password,
    email,
    confirmPassword
  };
 async function RegisterUser (e)  {
    //let error = JSON.parse(localStorage.getItem("logginError"));

    e.preventDefault();
    const myresponse = async () => {
      if (comparePasswords(password,confirmPassword) === true){
       await dispatch(register(userdetails));
       navigate("/da", { replace: true });

      } else{
        // console.log("fuck me")

      }

    };
    myresponse();
  };

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
            <label className="font-bold   ml-2 block">First Name</label>
            <input required
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>

          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Last Name</label>
            <input required
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>

          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Email</label>
            <input required 
            type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=" w-full   py-3 text-center"
            />
          </div>

          <div className="   mb-1">
            <label className="font-bold   ml-2 block">Password</label>
            <input required
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>
          
          <div className="   mb-1">
            <label className="font-bold   ml-2 block"> Confirm Password</label>
            <input required
              value={confirmPassword}
              onChange={(e) => {
                setconfirmPassword(e.target.value);
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

export default Register;