/* eslint-disable  */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userRole } from '../../LoginStatus';
import {
  getMemberLoans, approveLoan, getAllLoans, payLoan,
} from '../../redux/ApiSlice';

function MemberLoans() {
  const dispatch = useDispatch();
  const [isSeaching, setIssearching] = useState(false);
  const [payloan] = useState(true);
  const [refId, setId] = useState(0);
  const [amountPaid, setamountPaid] = useState(0);
  const [loanId, setloanId] = useState(0);

  const [sortStatus, setsortStatus] = useState(0);

  let sortArray = [];

  useEffect(() => {
    if (userRole === 'Manager') {
      dispatch(getAllLoans());
    } else {
      dispatch(getMemberLoans());
    }
  }, [isSeaching]);
  let loans = [];
  if (userRole === 'Manager') {
    loans = useSelector((state) => state.ApiSlice.allLoans);
  } else {
    loans = useSelector((state) => state.ApiSlice.loans);
  }

  const objSort = { tt: [] };

  const sortLoans = () => {
    sortArray = [];
    loans.forEach((loan) => { if (loan.status === sortStatus) { sortArray.push(loan); } });
    objSort.tt = sortArray;
    // sortArray= sortedArray

    return sortArray;
  };
  const clearSort = () => {
    setIssearching(false);
    setsortStatus(' ');
  };
  sortArray = sortLoans();
  if (isSeaching === true) {
    sortArray = sortLoans();
  } else {
    sortArray = loans;
  }
  const paramId = {
    refId,
  };
  const handleApproveLoan = (e, data) => {
    e.preventDefault();
    console.log(data);
    dispatch(approveLoan(paramId));
  };

  const setPayForm = (id, amount) => {
    setloanId(id);
    setamountPaid(amount);
    setId(id);
    const loanpayForm = document.getElementById(id);
    if (id > 0) {
      loanpayForm.style.display = 'block';
    }
  };
  const hidePayForm = (id) => {
    const loanpayForm = document.getElementById(id);
    if (id > 0) {
      loanpayForm.style.display = 'none';
    }
  };
  const paymentData = {
    amountPaid, loanId,
  };
  const payLoanAmount = (e) => {
    e.preventDefault();
    if (amountPaid > 0 && loanId > 0) {
      dispatch(payLoan(paymentData));
      dispatch(getMemberLoans());
    }
  };
  return (
    <>
      <div className="relative">
        <h4 className=" mt-2 mb-6  font-bold font-robotoCo uppercase underline-offset-2 text-center tracking-wider">
          Member Loans
        </h4>

        <div className="search_form">
          <select
            onChange={(e) => {
              setsortStatus(e.target.value);
            }}
            value={sortStatus}
          >
            <option>select</option>
            <option>pending</option>
            <option>Approved</option>
          </select>

          <div className="mini_buttons">
            <button onClick={() => { setIssearching(true); }} type="button" className="bg-blue-900 font-mono text-white rounded px-2 ">Sort</button>
            <button onClick={() => { clearSort(); }} type="button" className="bg-rose-900 text-white font-mono rounded px-2">Clear</button>
          </div>
        </div>

        {sortArray.length > 0 ? sortArray.map((item) => (
          <>
            <button onClick={() => setPayForm(item.loanId, Math.ceil((item.payAmount / item.numberOfInstallments) + (item.payAmount % item.numberOfInstallments)))} type="button" className="bg-indigo-800 text-white relative left-0 rounded px-2">SHOW MORE</button>

            {payloan === true ? (

              <div id={item.loanId} className="hidden ">

                <form
                  className=" w-fit m-auto absolute top-5  left-36 "
                  onSubmit={(e) => {
                    handleApproveLoan(e, item.loanId);
                  }}
                >
                  <div className="text-[0.8em] w-[10em] mt-4 flex flex-col">
                    {userRole==="Manager"?( <button type="submit" className="bg-green-800 w-full  text-white rounded mb-2 "> APPROVE LOAN </button>):""}
                   
                    <button onClick={() => hidePayForm(item.loanId)} type="button" className="bg-rose-700 text-white rounded  w-full ">SHOW LESS</button>
                  </div>

                </form>

                <form className="mini_form absolute top-4 left-5 " onSubmit={(e) => { payLoanAmount(e); }}>
                  <label className="text-[0.8em]">Amount</label>

                  <input id="payInput" readOnly className={item.loanId} value={Math.ceil((item.payAmount / item.numberOfInstallments) + (item.payAmount % item.numberOfInstallments))} placeholder="amount paid" />

                  <div className="mini_buttons">
                    <input type="submit" value="PAY" className=" bg-blue-800 cursor-pointer text-white rounded px-2" />

                  </div>
                </form>
              </div>

            ) : ''}

            <div
              key={item.loanId}
              className="flex list_data  flex-col justify-start my-5 text-left w-1/2 m-auto "
            >

              <p className="font-semibold">
                Loan Amount:
                <span className="font-bold">{item.principleAmount}</span>
              </p>
              <p className="font-semibold">
                Loan Type:
                <span className="font-bold">{item.loanType.description}</span>
              </p>
              <p className="font-semibold">
                Installements:
                <span className="font-bold">{item.numberOfInstallments}</span>
              </p>
              <p className="font-semibold">
                Loan  interest:
                <span className="font-bold">
                  {item.loanInterest} %
                </span>
              </p>
              <p className="font-semibold">
            Completed:
            <span className="font-bold">{item.isCompleted.toString()}</span>
          </p>
              <div className=" inline font-semibold">
                Status:
                <p className={` inline  ml-2 ${item.status === 'pending' ? 'text-red-700' : 'text-teal-700'}`}>{item.status}</p>
              </div>

              <Link state={item} className="bg-yellow-400 hover:bg-yellow-900 w-fit px-1 rounded uppercase text-zinc-950" to="/loan">Details</Link>
            </div>
          </>

        )) : (<p>No loan in database</p>)}
      </div>

    </>
  );
}

export default MemberLoans;
