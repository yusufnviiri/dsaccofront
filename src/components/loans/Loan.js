/* eslint-disable  */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getMemberLoans, payLoan, approveLoan } from '../../redux/ApiSlice';

function Loan() {
  const dispatch = useDispatch();
  const location = useLocation();
  const loans = useSelector((state) => state.ApiSlice.loans);

  useEffect(() => {
    dispatch(getMemberLoans());
  }, [loans.length]);

  const item = location.state;
  // console.log(item);
  const loanData = [];
  loanData.push(item);
  const [payloan] = useState(true);
  const [amountPaid, setamountPaid] = useState(0);
  const [loanId, setloanId] = useState(0);
  // const [loanid] = useState(0);

  const setPayForm = (id, amount) => {
    setloanId(id);
    setamountPaid(amount);

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

  const handleApproveLoan = (e) => {
    e.preventDefault();
    dispatch(approveLoan(item.loanId));
    console.log(item.loanId * 5);
  };

  // const approveMemberLoan = (e) => {
  //   e.preventDefault();
  //   if (amountPaid > 0 && loanId > 0) {
  //     dispatch(approveLoan(loanid));
  //     dispatch(getMemberLoans());
  //   }
  // };

  return (
    <>
      <h4 className=" my-6 font-bold font-robotoCo uppercase underline-offset-2 text-center tracking-wider">    Loan </h4>

      {loanData.length > 0 ? loanData.map((item) => (
        <div
          key={item.loanId}
          className="flex  flex-col justify-start my-5 text-left w-1/2 m-auto "
        >
          <button onClick={() => setPayForm(item.loanId, Math.ceil((item.payAmount / item.numberOfInstallments) + (item.payAmount % item.numberOfInstallments)))} type="button" className="bg-indigo-800 text-white rounded px-2">Pay</button>

          {payloan === true ? (

            <div id={item.loanId} className="hidden">
              <span>
                {' '}
                loan number
                {item.loanId}
              </span>
              {/* <form onSubmit={() => {
                dispatch(approveLoan(item.loanId));
              }}
              > */}
              <form
                onSubmit={(e) => {
                  handleApproveLoan(e);
                }}
              >
                <div
                  className=" text-white submit   font-bold w-full m-auto
        text-center  bg-green-700 rounded hover:bg-slate-700"
                >
                  <input
                    value="approve"
                    className="uppercase  font-lobs text:[0.48em] sm:text-[0.71em] cursor-pointer text-yellow-300"
                    type="submit"
                  />
                </div>
                {/*
              <button type="button" onClick={() => { dispatch(approveLoan(item.loanId)); }} className="bg-red-800 text-white rounded px-2"> approve loan</button> */}
              </form>

              {/* <form className="mini_form" onSubmit={(e) => { approveMemberLoan(e); }}>
                <label>Amount</label>

                <input hidden value={item.loanid} data-model-id={item.loanId} placeholder="amount paid" />

                <div className="mini_buttons">
                  <input type="submit" value="approve" className=" bg-blue-800 cursor-pointer text-white rounded px-2" />
                  <button onClick={() => hidePayForm(item.loanId)} type="button" className="bg-red-800 text-white rounded px-2">Close</button>
                </div>
              </form> */}
              <form className="mini_form" onSubmit={(e) => { payLoanAmount(e); }}>
                <label>Amount</label>

                <input readOnly className={item.loanId} value={Math.ceil((item.payAmount / item.numberOfInstallments) + (item.payAmount % item.numberOfInstallments))} placeholder="amount paid" />

                <div className="mini_buttons">
                  <input type="submit" value="save" className=" bg-blue-800 cursor-pointer text-white rounded px-2" />
                  <button onClick={() => hidePayForm(item.loanId)} type="button" className="bg-red-800 text-white rounded px-2">Close</button>
                </div>
              </form>
            </div>

          ) : ''}

          <p className="font-semibold">
            Date:
            <span className="font-bold">{item.applicationDate}</span>
          </p>
          <p className="font-semibold">
            Available Balance:
            <span className="font-bold">{item.currentBalance}</span>
          </p>
          {' '}
          <p className="font-semibold">
            Loan Amount:
            <span className="font-bold">{item.principleAmount}</span>
          </p>
          <p className="font-semibold">
            Installements:
            <span className="font-bold">{item.numberOfInstallments}</span>
          </p>
          <p className="font-semibold">
            Payments:
            <span className="font-bold">{item.numberOfPayments}</span>
          </p>
          {' '}
          <p className="font-semibold">
            Loan Amount with interest:
            <span className="font-bold">{item.payAmount}</span>
          </p>
          {' '}
          <p className="font-semibold">
            Balance:
            <span className="font-bold">{item.outstandingBalance}</span>
          </p>
          <p className="font-semibold">
            Completed?
            <span className="font-bold">{item.isCompleted.toString()}</span>
          </p>
          <p className="font-semibold">
            Security:
            <span className="font-bold">{item.security}</span>
          </p>
          {' '}
          <p className="font-semibold">
            loan Period:
            <span className="font-bold">{item.loanPeriod}</span>
          </p>
          {' '}
          <p className="font-semibold">
            Status:
            <span className={`${item.status === 'pending' ? 'text-red-700' : 'text-blue-700'}`}>{item.status}</span>
          </p>

          <div>
            <p>Witnessess</p>
            <p className="font-semibold">
              Name:
              <span className="font-bold">{item.loanWitness.firstWitnessName}</span>
            </p>
            <p className="font-semibold">
              Address:
              <span className="font-bold">{item.loanWitness.firstWitnessAddress}</span>
            </p>
            {' '}
            <p className="font-semibold">
              Contact:
              <span className="font-bold">{item.loanWitness.firstWitnessContact}</span>
            </p>
            {' '}
            <p className="font-semibold">
              Name:
              <span className="font-bold">{item.loanWitness.secondWitnessName}</span>
            </p>
            {' '}
            <p className="font-semibold">
              Address:
              <span className="font-bold">{item.loanWitness.secondWitnessAddress}</span>
            </p>
            {' '}
            <p className="font-semibold">
              Name:
              <span className="font-bold">{item.loanWitness.secondWitnessName}</span>
            </p>
            {' '}
            <p className="font-semibold">
              Contact:
              <span className="font-bold">{item.loanWitness.secondWitnessContact}</span>
            </p>
          </div>

        </div>

      )) : (<p>No account in database</p>)}

    </>
  );
}

export default Loan;
