/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Menu from './Menu';

function Dashbord() {
  const navigate = useNavigate();

  const users = useSelector((state) => state.ApiSlice.user);

  const isLoggedIn = JSON.stringify(localStorage.getItem('isLoggedIn'));

  const nullValue = JSON.stringify(localStorage.getItem('token'));
  const userToken = JSON.stringify(localStorage.getItem('bearer'));
  useEffect(() => {
  // console.log("getting Users")

  }, [users.length]);

  const logOut = () => {
    localStorage.clear();
    navigate('/', { replace: true });
  };

  let obj = [];
  if (userToken !== nullValue) {
    const decoded = jwtDecode(userToken);

    obj = Object.values(decoded);
  }

  return (
    <>
      <menu className="bg-rose-950 w-full py-2  text-stone-300 flex  justify-between font-robotoCo">

        <Link className=" mx-2 text-stone-100 px-2 font-mul " to="/">Opus   Savings Group</Link>
        {obj.length > 0 ? (
          <div className="hidden md:block">
            {' '}
            <h2>
              <span className="mr-1 ">Hello :</span>
              {obj[2]}
            </h2>
          </div>
        ) : (<h2>User: none</h2>)}
        <nav>
          <Link className="" to="/register">Sign Up</Link>
          <Link className="" to="/logins">Sign In</Link>
          <button type="button" onClick={() => logOut()} className="text-red-400 uppercase hover:text-yellow-500 text-sm">Sign Out</button>
        </nav>
      </menu>

      {isLoggedIn !== nullValue ? (
        <Menu />) : ''}

    </>
  );
}

export default Dashbord;
