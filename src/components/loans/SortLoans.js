/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

function SortLoans(props) {
  const payloan = true;
  const { loans } = props;
  return (
    <>
      <h4 className=" my-4    underline-offset-2 underline
     text-center font-poppins "
      >
        Number of Loans
        {' '}
        {loans.length}
      </h4>

      <div className="login_form">
        <label>Sort</label>

      </div>
      {/* {console.log(sortArray)} */}

      {loans.length > 0 ? loans.map((item) => (
        <div
          key={item.loanId}
          className="flex  flex-col justify-start my-5 text-left w-1/2 m-auto "
        >

          <Link state={item} className="mr-2" to="/loan">View</Link>

          {payloan === true ? (

            <div id={item.loanId} className="hidden">

              {/* <button  onClick={()=>    dispatch(approveLoan(item.loanId))}    type='button'
              className='bg-red-800 text-white rounded px-2' >Bro approve loan</button> */}

            </div>

          ) : ''}

          <p className="font-semibold">
            Loan Amount:
            <span className="">{item.principleAmount}</span>
          </p>
          <p className="font-semibold">
            Loan Type:
            <span className="">{item.loanType.description}</span>
          </p>
          <p className="font-semibold">
            Installements:
            <span className="">{item.numberOfInstallments}</span>
          </p>
          <p className="font-semibold">
            Loan  interest:
            <span className="">
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

export default SortLoans;
