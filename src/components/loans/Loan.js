/* eslint-disable linebreak-style */
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Loan() {
  const location = useLocation();
  const item = location.state;
  const loanData = [];
  loanData.push(item);

  return (
    <>
      <h4 className=" my-6 font-bold font-robotoCo uppercase underline-offset-2 text-center tracking-wider">    Loan </h4>

      {loanData.length > 0 ? loanData.map((item) => (
        <div
          key={item.loanId}
          className="flex  list_data flex-col justify-start my-5 text-left w-1/2 m-auto "
        >
          <Link state={item} className="bg-yellow-400 hover:bg-yellow-900 w-fit  px-3 my-2 rounded uppercase text-zinc-950" to="/loan">Back</Link>

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
