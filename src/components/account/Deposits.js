/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMemberDeposits } from '../../redux/ApiSlice';

function Deposits() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.ApiSlice.accounts);
  const deposits = useSelector((state) => state.ApiSlice.deposits);
  useEffect(() => {
    dispatch(getMemberDeposits());
    if (deposits.length < 1) {
      navigate('/deposit', { replace: true });
    }
  });

  return (
    <>
      <h4 className=" my-4 font-bold   underline-offset-2 underline
 text-center font-poppins "
      >
        Number of accounts
        {' '}
        {accounts.length}
      </h4>

      <div>Member Deposits</div>

      {deposits.length > 0 ? deposits.map((item) => (
        <div
          key={item.depositId}
          className="flex   flex-col justify-start my-5 text-left w-1/2 m-auto "
        >

          <p className="font-semibold">
            Account :
            <span className="font-bold">{item.account.accountDescription}</span>
          </p>
          <p className="font-semibold">
            Available Balance:
            <span className="font-bold">{item.account.currentBalance}</span>
          </p>
          {' '}
          <p className="font-semibold">
            Amount:
            <span className="font-bold">
              {item.amount}
            </span>
          </p>
          <p className="font-semibold">
            Deposit Date:
            <span className="font-bold">{item.depositDate}</span>
          </p>
        </div>
      )) : (<p>No account in database</p>)}

    </>
  );
}

export default Deposits;
