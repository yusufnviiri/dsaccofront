/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import gsap from 'gsap';
import logo from '../assets/opuslogo.png';
import { getMemberShares, getUserData } from '../redux/ApiSlice';
import UpdateUserData from './access/UpdateUserData';

function Home() {
  const dispatch = useDispatch();
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
  }, [dispatch]);

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

      <div className="flex justify-between w-[95%]">
        <div className="flex flex-col gap-5  h-fit items-start px-6 ">

          <div className="size-1/2">
            <img src={logo} className="w-full  m-auto" alt="logo" />
          </div>
          <button onClick={() => { setDetailsForm(!DetailsForm); }} type="button" className="bg-red-800 text-white rounded px-2 w-48 relative left-0">Add Details</button>
          {
  users.length > 0 ? users.map((user) => (
    <div key={user.sex} className="text-left  userData">

      <p>
        {' '}
        Name :
        <span>
          {obj[2]}
        </span>
      </p>
      <p>
        {' '}
        Role :
        <span>
          {obj[1]}
        </span>
      </p>

      <p>
        {' '}
        Date Of Birth:
        <span>
          {user.userDataDto.dob}
        </span>

      </p>
      <p>
        {' '}
        District:
        <span>
          {' '}
          {user.userDataDto.district }
        </span>

      </p>
      <p>
        Sex :
        <span>
          {user.userDataDto.sex}
        </span>

      </p>
      <p>
        Occupation :
        <span>
          {user.userDataDto.occupation}
        </span>

      </p>
      <p>
        {' '}
        Next Of Kin :
        <span>
          {user.userDataDto.nextOfKin}
        </span>

      </p>
      <p>
        Relationship :
        <span>
          {user.userDataDto.kinRelationShip}
        </span>

      </p>
      <p>
        Loan Balance :
        {' '}
        <span>
          {user.loanBalance }
        </span>

      </p>
      <p>
        {' '}
        Account Balance :
        <span>
          {user.accountBalance }
        </span>

      </p>
      <p>
        {' '}
        Shares :
        <span>
          {user.totalShares}
        </span>

      </p>

    </div>
  )) : ''
}

        </div>

        <div className="flex flex-col    px-4   ">
          <div id="know" className="text-left   p-6 ">
            <h3 className="text-[1.5em] font-anton  ml-9 text-yellow-300 font-bold"> DID YOU KNOW</h3>
            <ul id="knowList">
              <li id="knowShop" className="text-[1em] py-2 ">
                You can
                <span className="text-orange-400   text-[1em] ">access</span>
                {' '}
                OPUS e-shop on
                <span className="text-orange-400   text-[1em] ">this</span>
                {' '}
                portal
              </li>
              <li id="knowApp" className="text-[1em] pb-2 ">
                Get
                <span className="text-orange-400     text-[1em] ">all</span>
                {' '}
                our services on your
                <span className="text-orange-400   text-[1em] ">mobile</span>
              </li>

              <li id="knowInterest" className="text-[1em] pb-2 ">
                Salary loan
                <span className="text-orange-400     text-[1em] ">Interest</span>
                {' '}
                now at
                <span className="text-orange-400   text-[1em] "> 9.99 %</span>
              </li>

              <li id="knowMortgage" className="text-[1em] pb-2 ">
                Dual
                <span className="text-orange-400     text-[1em] ">Mortgage</span>
                {' '}
                now
                <span className="text-orange-400   text-[1em] "> available </span>
                {' '}
                on low prices
              </li>

            </ul>

          </div>

          <div className=" pl-9 text-justify  p-6 ">
            <h3 className="text-[1.2em] font-anton text-center text-yellow-300 font-bold">FACTS ABOUT OPUS</h3>
            <div className="flex  gap-10 ml-[20%]">
              <ul className="facts">
                <li className="text-[1em] py-2 ">
                  Active Members:
                  {' '}
                  <span className="text-orange-400   text-[1em] "> $13</span>
                </li>
                <li className="text-[1em] pb-2 ">
                  Liabilities value YTD :
                  {' '}
                  <span className="text-orange-400   text-[1em] "> $293M</span>
                </li>
                <li className="text-[1em] by-2 ">
                  Assets value YTD :
                  {' '}
                  <span className="text-orange-400   text-[1em] "> $78M</span>
                </li>
                <li className="text-[1em] pb-2 ">
                  Annual Revenue :
                  <span className="text-orange-400   text-[1em] "> $69M</span>
                </li>
                <li className="text-[1em] pb-2 ">
                  Active Member Loans
                  {' '}
                  <span className="text-orange-400   text-[1em] "> $23M</span>
                </li>

              </ul>
            </div>

          </div>

        </div>

        <UpdateUserData showForm={DetailsForm} />
      </div>

    </>
  );
}

export default Home;
