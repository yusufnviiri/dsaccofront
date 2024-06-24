/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMemberLoans } from '../../redux/ApiSlice';

function MemberLoans() {
  const dispatch = useDispatch();
  const [isSeaching, setIssearching] = useState(false);

  const [sortStatus, setsortStatus] = useState(0);
  const sortedArray = [];

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

  // if(isSeaching===true){
  //     // sortArray=[]

  //     console.log("sorted Array")
  //     // console.log(sortedArray)
  //      sortArray= container(container())

  //   } else{
  //     sortArray=loans
  //   }
  console.log('sortArray');
  console.log(sortArray);
  console.log(sortedArray);
  console.log('sorted Array');

  return (
    <>
      <h4 className=" my-4 font-bold   underline-offset-2 underline
 text-center font-poppins "
      >
        Number of Loans
        {' '}
        {loans.length}
      </h4>
      <h4 className=" my-4 font-bold   underline-offset-2 underline
 text-center font-poppins "
      >
        Number of Loans  sort Array
        {' '}
        {sortArray.length}
      </h4>

      <div className="login_form">
        <label>Sort</label>

        <select
          onChange={(e) => {
            setsortStatus(e.target.value);
          }}
          value={sortStatus}
        >
          <option>None</option>
          <option>pending</option>
          <option>Approved</option>
        </select>

        <div className="mini_buttons">
          <button onClick={() => { setIssearching(true); }} type="button" className="bg-red-800 text-white rounded px-2">Sort</button>
          <button onClick={() => { clearSort(); }} type="button" className="bg-red-800 text-white rounded px-2">Clear</button>
        </div>
      </div>
      {/* {console.log(sortArray)} */}

      <div>MemberAccounts</div>
      {sortArray.length > 0 ? sortArray.map((item) => (
        <div
          key={item.loanId}
          className="flex  flex-col justify-start my-5 text-left w-1/2 m-auto "
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

        </div>

      )) : (<p>No account in database</p>)}

    </>
  );
}

export default MemberLoans;
