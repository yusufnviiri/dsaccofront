
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/ApiSlice"
import { Navigate, useNavigate } from "react-router-dom";
function Login() {
  var myref = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  useEffect(() => {
  
      navigate("/students", { replace: true });    
  }, []);

  const dismiss = () => {
    myref.current.className = "hidden";
    localStorage.clear();
  };

  const userdetails = {
    firstName,
    lastName,
    password,
    confirmPassword
  };
  const LoginUser = (e) => {
    //let error = JSON.parse(localStorage.getItem("logginError"));

    e.preventDefault();
    const myresponse = async () => {
      await dispatch(register(userdetails));
      navigate("/students", { replace: true });
    };
    myresponse();
  };

  return (
    <>
    
      <div className="w-[30%] m-auto  login_form">
        <h4
          className=" my-4 font-bold   underline-offset-2 underline 
 text-center font-poppins "
        >
          LOGIN FORM
        </h4>

        <form
          onSubmit={(e) => {
            LoginUser(e);
          }}
        >
          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">First Name</label>
            <input
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>

          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">First Name</label>
            <input
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>

          <div className="   mb-1">
            <label className="font-bold   ml-2 block">Password</label>
            <input
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
            <input
              value={confirmPassword}
              onChange={(e) => {
                setconfirmPassword(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>

          <div
            className="mt-6 text-white   font-bold w-full m-auto
    text-center  bg-green-700 rounded hover:bg-slate-700"
          >
            <input
              className="uppercase    text:[0.48em] sm:text-[0.71em] cursor-pointer text-yellow-100"
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;