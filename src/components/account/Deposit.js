/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMemberAccounts, memberDeposit } from '../../redux/ApiSlice';

function Deposit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.ApiSlice.accounts);
  const notification = useSelector((state) => state.ApiSlice.notification);

  useEffect(() => {
    dispatch(getMemberAccounts());
    if (accounts.length < 1) {
      navigate('/new-account', { replace: true });
    }
  });

  const [amount, setAmount] = useState(0);
  const [accountId, setAccountId] = useState('');
  const depositDetails = {
    amount,
    accountId,
  };
  const saveDeposit = (e) => {
    e.preventDefault();
    dispatch(memberDeposit(depositDetails));
    if (notification !== '') {
      navigate('/accounts', { replace: true });
    }
  };
  return (
    <>
      <div className="w-[30%] m-auto  login_form">

        <h4 className=" my-6  font-robotoCo uppercase underline-offset-2 text-center tracking-wider">
          Account Deposit
        </h4>
        <form
          onSubmit={(e) => {
            saveDeposit(e);
          }}
        >
          <div className="mb-1  ">
            <label className="   ml-2 block"> Select Account </label>

            <select
              className="    block w-full"
              required
              value={accountId}
              onChange={(e) => {
                setAccountId(e.target.value);
              }}
            >
              <option className=" font-thin text-red-900">...select...</option>

              {accounts.length > 0 ? (
                accounts.map((item) => (
                  <option
                    value={item.accountId}
                    key={item.accountId}
                    className=""
                  >
                    {item.accountDescription}
                  </option>

                ))
              ) : (
                <option>No account in database</option>
              )}
            </select>
          </div>
          <div className="mb-1  ">
            <label className="   ml-2 block">Amount</label>
            <input
              required
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="number"
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

export default Deposit;
