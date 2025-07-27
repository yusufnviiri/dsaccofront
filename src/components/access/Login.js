/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/ApiSlice';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const rememberMe = true;

  useEffect(() => {
    const nullValue = JSON.stringify(localStorage.getItem('token'));
    const userToken = JSON.stringify(localStorage.getItem('bearer'));

    setTimeout(() => {
      if (userToken !== nullValue) {
        // navigate("/", { replace: true });
      }
    }, 3000);
  }, []);

  const loginDetails = {
    email,
    password,
    rememberMe,
  };
  const LoginUser = (e) => {
    // let error = JSON.parse(localStorage.getItem("logginError"));

    e.preventDefault();
    const myresponse = async () => {
      dispatch(login(loginDetails));
      navigate('/', { replace: true });
    };
    myresponse();
  };

  return (
    <>

      <div className="w-[30%] m-auto  login_form">

        <h4 className=" my-6  font-robotoCo uppercase underline-offset-2 text-center tracking-wider"> LOGIN FORM</h4>
        <form
          onSubmit={(e) => {
            LoginUser(e);
          }}
        >
          <div className="mb-1  ">
            <label className="   ml-2 block">Email</label>
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
            <label className="   ml-2 block">Password</label>
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
            className="mt-6 text-white submit    w-full m-auto
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
