/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberLoans } from '../../redux/ApiSlice';

function MemberLoans() {
  const dispatch = useDispatch();
  const [isSeaching, setIssearching] = useState(false);

  const [sortStatus, setsortStatus] = useState(0);

  let sortArray = [];

  useEffect(() => {
    dispatch(getMemberLoans());
  }, [isSeaching]);
  const loans = useSelector((state) => state.ApiSlice.loans);
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

  return (
    <>
      <div className="relative">
        <h4 className=" my-6  font-bold font-robotoCo uppercase underline-offset-2 text-center tracking-wider">
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
                {item.loanInterest}
                %
              </span>
            </p>
            <p className="font-semibold">
              Status:
              <span className={`${item.status === 'pending' ? 'text-red-700' : 'text-blue-700'}`}>{item.status}</span>
            </p>

            <Link state={item} className="bg-yellow-400 hover:bg-yellow-900 w-fit px-1 rounded uppercase text-zinc-950" to="/loan">Details</Link>

          </div>

        )) : (<p>No loan in database</p>)}
      </div>
    </>
  );
}

export default MemberLoans;
