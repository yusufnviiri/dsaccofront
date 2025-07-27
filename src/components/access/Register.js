/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginError, register } from '../../redux/ApiSlice';
// import { register } from "../../redux/ApiSlice"

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const comparePasswords = (stringA, stringB) => {
    if (stringA !== stringB) {
      dispatch(setLoginError('password not maching'));
      return false;
    }
    return true;
  };
  const userdetails = {
    firstName,
    lastName,
    password,
    email,
    title,
    confirmPassword,
  };
  async function RegisterUser(e) {
    // let error = JSON.parse(localStorage.getItem("logginError"));

    e.preventDefault();
    const myresponse = async () => {
      if (comparePasswords(password, confirmPassword) === true) {
        await dispatch(register(userdetails));
        navigate('/', { replace: true });
      }
    };
    myresponse();
  }

  return (
    <>
      <div className="w-[15rem] sd:w-[20rem] m-auto h-[70vh] sm:h-[80vh]  overflow-y-auto px-[2rem] box-content pb-7  ">

        <h4 className=" my-6  font-robotoCo uppercase underline-offset-2 text-center tracking-wider">   REGISTER</h4>
        <form
          onSubmit={(e) => {
            RegisterUser(e);
          }}
        >
          <div className="mb-1  ">
            <label className="   ml-2 block">First Name</label>
            <input
              required
              value={firstName}
              onChange={(e) => {
                setfirstName(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>

          <div className="mb-1  ">
            <label className="   ml-2 block">Last Name</label>
            <input
              required
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>
          <div className="mb-1  ">
            <label className="   ml-2 block">Title</label>

            <select
              className="    block w-full"
              required
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            >
              <option className=" font-thin text-red-900">...select...</option>
              <option className=" font-thin text-red-900">Member</option>
              <option className=" font-thin text-red-900">Administrator</option>
            </select>

            {/* <input required
              value={lastName}
              onChange={(e) => {
                setlastName(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            /> */}
          </div>

          <div className="mb-1  ">
            <label className="   ml-2 block">Email</label>
            <input
              required
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=" w-full   py-3 text-center"
            />
          </div>

          <div className="   mb-1">
            <label className="   ml-2 block">Password</label>
            <input
              required
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="text"
            />
          </div>

          <div className="   mb-1">
            <label className="   ml-2 block"> Confirm Password</label>
            <input
              required
              value={confirmPassword}
              onChange={(e) => {
                setconfirmPassword(e.target.value);
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

export default Register;
