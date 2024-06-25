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
        <menu className="bg-[#014701] w-full py-2 text-[0.7em] md:text-[0.9em]  flex justify-between px-5">
          <Link className="text-yellow-500 font-bold mr-2" to="/">Home</Link>
          <Link className=" mr-2" to="/deposit">Deposit</Link>
          <Link className=" mr-2" to="/deposits">Deposits</Link>
          <Link className="mr-2" to="/withdraw">Withdraw</Link>
          <Link className=" mr-2" to="/withdraws">Withdraws</Link>
          <Link className=" mr-2" to="/loan-application">Loan</Link>
          <Link className=" mr-2" to="/loans">Loans</Link>
          <Link className="mr-2" to="/accounts">Accounts</Link>
          <Link className="mr-2" to="/new-account">New Account </Link>
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
