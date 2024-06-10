
import { useState, useEffect } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/ApiSlice"
import { Navigate, useNavigate } from "react-router-dom";
function Login() {
  var myref = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setpassword] = useState("");
  const rememberMe=true;

  useEffect(() => {
  
      // navigate("/students", { replace: true });    
  }, []);


  const loginDetails = {
   email,
    password,
    rememberMe
  };
  const LoginUser = (e) => {
    //let error = JSON.parse(localStorage.getItem("logginError"));

    e.preventDefault();
    const myresponse = async () => {
       dispatch(login(loginDetails));
      console.log("devol")
      // navigate("/da", { replace: true });
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
            <label className="font-bold   ml-2 block">Email</label>
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="email"
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

export default Login;