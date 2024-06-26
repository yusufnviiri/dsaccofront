/* eslint-disable linebreak-style */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMemberAccounts } from '../../redux/ApiSlice';

function MemberAccounts() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const accounts = useSelector((state) => state.ApiSlice.accounts);

  useEffect(() => {
    dispatch(getMemberAccounts());

    if (accounts.length === 0) {
      navigate('/new-account', { replace: true });
    }
  }, [accounts.length]);

  return (
    <>

      <h4 className=" my-6  font-bold font-robotoCo uppercase underline-offset-2 text-center tracking-wider">
        Number of accounts
      </h4>
      {accounts.length > 0 ? accounts.map((item) => (
        <div key={item.accountId} className="flex list_data  flex-col justify-start my-5 text-left w-1/2 m-auto ">
          <p className="font-semibold">
            Type:
            <span className="font-bold">{item.accountDescription}</span>
          </p>
          <p className="font-semibold">
            Available Balance:
            <span className="font-bold">{item.currentBalance}</span>
          </p>
          {' '}
          <p className="font-semibold">
            Opening Amount:
            <span className="font-bold">{item.openingAmount}</span>
          </p>
          {' '}
          <p className="font-semibold">
            Initial Deposit:
            <span className="font-bold">{item.initialDeposit}</span>
          </p>
          <p className="font-semibold">
            Opening Date:
            <span className="font-bold">{item.openingDate}</span>
          </p>
        </div>
      )) : (<p>No account in database</p>)}

    </>
  );
}

export default MemberAccounts;
