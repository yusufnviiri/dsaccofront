/* eslint-disable  */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import gsap from 'gsap';
import logo from '../assets/opuslogo.png';
import { getMemberShares, getUserData } from '../redux/ApiSlice';
import UpdateUserData from './access/UpdateUserData';
import { Link } from 'react-router-dom';
function Home() {
  const dispatch = useDispatch();
  const shares = useSelector((state) => state.ApiSlice.shares);
  const users = useSelector((state) => state.ApiSlice.user);

  const [DetailsForm, setDetailsForm] = useState(false);
  const nullValue = JSON.stringify(localStorage.getItem('token'));
  const userToken = JSON.stringify(localStorage.getItem('bearer'));
  let obj = [];

  if (userToken !== nullValue) {
    const decoded = jwtDecode(userToken);
    obj = Object.values(decoded);
    obj.length = 3;
  }
  useEffect(() => {
    dispatch(getMemberShares());
    dispatch(getUserData());


  }, [shares.length]);



  const animations = () => {
    const t1 = gsap.timeline({ repeat: -1, repeatDelay: 10 });
    t1.fromTo('#knowShop', { scale: 0, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 2, ease: 'back',
    });
    t1.fromTo('#knowApp', { scale: 0, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 2, ease: 'back',
    });
    t1.fromTo('#knowInterest', { scale: 0, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 2, ease: 'back',
    });
    t1.fromTo('#knowMortgage', { scale: 0, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 2, ease: 'back',
    });
    t1.fromTo('.facts li', { scale: 0, opacity: 0 }, {
      scale: 1, opacity: 1, duration: 2, stagger: 0.7, ease: 'back',
    });
  };

  useEffect(() => {
    animations();
  }, []);
  return (
    <>

    <div className='flex justify-between w-[95%]'>   
    <div className="flex flex-col gap-5  h-fit items-start px-6 ">
      
    <div className="size-1/2">
          <img src={logo} className="w-full  m-auto" alt="logo" />
        </div>
         <button onClick={() => { setDetailsForm(!DetailsForm); }} type="button" className="bg-red-800 text-white rounded px-2 w-48 relative left-0">Add Details</button>
{
  users.length>0?users.map((user)=>(<div className='text-left'>

     <p> Name : {obj[2]} </p>
     <p> Role : {obj[1]} </p>

     <p> Date Of Birth: {user.userDataDto.dob}</p>
     <p> District: {user.userDataDto.district    }</p>
     <p>Sex : {user.userDataDto.sex}</p>
     <p>Occupation : {user.userDataDto.occupation}</p>
     <p> Next Of Kin : {user.userDataDto.nextOfKin}</p>
     <p>Relationship : {user.userDataDto.kinRelationShip}</p>
    <p>Loan Balance {user.loanBalance }</p>
    <p> Account Balance {user.accountBalance }</p>
    <p> shares {user.totalShares}</p>
  
  
  </div>)):""
}

      

        </div>


      <div className="flex flex-col    px-4   ">
        <div id="know" className="text-left   p-6 ">
          <h4 className="text-[2em] font-anton  ml-9 text-yellow-300 font-bold"> DID YOU KNOW</h4>
          <ul id="knowList">
            <li id="knowShop" className="text-[1em] py-2 ">
              You can
              <span className="text-green-700   text-[1em] ">access</span>
              {' '}
              OPUS e-shop on
              <span className="text-green-700 text-[1em] ">this</span>
              {' '}
              portal
            </li>
            <li id="knowApp" className="text-[1em] pb-2 ">
              Get
              <span className="text-green-700   text-[1em] ">all</span>
              {' '}
              our services on your
              <span className="text-green-700 text-[1em] ">mobile</span>
            </li>

            <li id="knowInterest" className="text-[1em] pb-2 ">
              Salary loan
              <span className="text-green-700   text-[1em] ">Interest</span>
              {' '}
              now at
              <span className="text-green-700 text-[1em] "> 9.99 %</span>
            </li>

            <li id="knowMortgage" className="text-[1em] pb-2 ">
              Dual
              <span className="text-green-700   text-[1em] ">Mortgage</span>
              {' '}
              now
              <span className="text-green-700 text-[1em] "> available </span>
              {' '}
              on low prices
            </li>

          </ul>

        </div>
       

        <div className=" hidden pl-9 text-justify  p-6 ">
          <h4 className="text-[2em] font-anton text-center text-yellow-300 font-bold">FACTS ABOUT OPUS</h4>
          <div className="flex  gap-10 ml-[20%]">
            <ul className="facts">
              <li className="text-[1em] py-2 ">
                Active Members:
              </li>
              <li className="text-[1em] pb-2 ">
                Liabilities value YTD :
              </li>
              <li className="text-[1em] by-2 ">
                Assets value YTD :
              </li>
              <li className="text-[1em] pb-2 ">
                Annual Revenue :
              </li>
              <li className="text-[1em] pb-2 ">
                Active Member Loans
              </li>

            </ul>
            <ul className="facts">
              <li className="text-[1em] py-2  text-green-800">
                {' '}
                9421
              </li>
              <li className="text-[1em] pb-2  text-red-800">
                {' '}
                $130M
              </li>
              <li className="text-[1em] pb-2  text-green-800">
                {' '}
                $700M
              </li>
              <li className="text-[1em] pb-2  text-red-800">
                {' '}
                $530M
              </li>
              <li className="text-[1em] pb-2  text-red-800">
                {' '}
                12934
              </li>

            </ul>
          </div>

        </div>

      </div>

      <UpdateUserData showForm={DetailsForm} />
      {/* <Link className=" mr-2" to="/user-data">User Details</Link> */}
      </div>

    </>
  );
}

export default Home;
