/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';
import { buyshares, sellShares, getMemberShares } from '../redux/ApiSlice';

function Menu() {
  const dispatch = useDispatch();
  const [buy, setBuy] = useState(false);
  const [sell, setSell] = useState(false);
  const [showSharesForm, setshowSharesForm] = useState(false);
  const [sharesQuantity, setsharesQuantity] = useState(0);
  const nullValue = JSON.stringify(localStorage.getItem('token'));
  const userToken = JSON.stringify(localStorage.getItem('bearer'));
  if (userToken !== nullValue) {
    const decoded = jwtDecode(userToken);
    const obj = Object.values(decoded);
    obj.length = 2;
  }

  const numberOfShares = {
    sharesQuantity,
  };
  const setBuyShares = () => {
    setBuy(true);
    setSell(false);
  };
  const setSellShares = () => {
    setBuy(false);
    setSell(true);
  };

  useEffect(() => {
    dispatch(getMemberShares());
  }, [dispatch]);

  const shareActions = (e) => {
    e.preventDefault();
    if (sell) {
      dispatch(sellShares(numberOfShares));
      setsharesQuantity(0);
    }
    if (buy) {
      dispatch(buyshares(numberOfShares));
      setsharesQuantity(0);
    }
  };

  return (
    <>
      <div>
        <menu className=" py-2   flex justify-between  font-poppins  ">
          <Link className=" " to="/deposit">Deposit</Link>
          <Link className=" " to="/deposits">Deposits</Link>
          <Link className="" to="/withdraw">Withdraw</Link>
          <Link className="" to="/withdraws">Withdraws</Link>
          <Link className=" " to="/loan-application">Loan</Link>
          <Link className=" " to="/loans">Loans</Link>
          <Link className="" to="/accounts">Accounts</Link>
          <Link className="" to="/new-account">New Account </Link>
          <button onClick={() => { setshowSharesForm(!showSharesForm); }} type="button" className="bg-indigo-800 text-white rounded px-2 ">Shares</button>
        </menu>
        <div>
          {showSharesForm === true ? (
            <div className=" flex justify-end items-end md:pr-5 pr-2">
              {' '}
              <form
                className="mini_form"
                onSubmit={(e) => {
                  shareActions(e);
                }}
              >
                <label>Amount</label>
                <input value={sharesQuantity} onChange={(e) => setsharesQuantity(e.target.value)} placeholder="shares" />
                <div className="mini_buttons">
                  <button onClick={() => { setBuyShares(); }} type="submit" className="r-10 bg-blue-800  w-1/3 cursor-pointer text-white rounded px-2 mr-6">Buy</button>
                  <button onClick={() => { setSellShares(); }} type="submit" className="r-10 bg-red-800  w-1/3 cursor-pointer text-white rounded px-2">Sell</button>
                </div>
              </form>
            </div>

          ) : ''}

        </div>
      </div>

    </>
  );
}

export default Menu;
