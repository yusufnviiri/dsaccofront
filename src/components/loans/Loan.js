/* eslint-disable  */
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Loan() {
  const { state: item } = useLocation();

  if (!item) {
    return <p className="text-center text-red-500 mt-5">No loan data available.</p>;
  }

  const {
    loanId,
    applicationDate,
    currentBalance,
    principleAmount,
    numberOfInstallments,
    numberOfPayments,
    payAmount,
    outstandingBalance,
    isCompleted,
    security,
    loanPeriod,
    status,
    loanWitness
  } = item;

  const {
    firstWitnessName,
    firstWitnessAddress,
    firstWitnessContact,
    secondWitnessName,
    secondWitnessAddress,
    secondWitnessContact
  } = loanWitness || {};

  return (
    <>
      <h4 className="my-6  font-robotoCo uppercase text-center tracking-wider underline-offset-2">
        Loan
      </h4>

      <div
        key={loanId}
        className="flex list_data flex-col justify-start my-5 text-left w-full sm:w-3/4 md:w-1/2 m-auto"
      >
        <Link
          to="/loans"
          state={item}
          className="bg-yellow-400 hover:bg-yellow-900 w-fit px-3 my-2 rounded uppercase text-zinc-950"
        >
          Back
        </Link>

        {[
          ['Date', applicationDate],
          ['Available Balance', currentBalance],
          ['Loan Amount', principleAmount],
          ['Installments', numberOfInstallments],
          ['Payments', numberOfPayments],
          ['Loan Amount with Interest', payAmount],
          ['Balance', outstandingBalance],
          ['Completed?', isCompleted?.toString()],
          ['Security', security],
          ['Loan Period', loanPeriod],
          ['Status', <span className={status === 'pending' ? 'text-red-700' : 'text-blue-700'}>{status}</span>]
        ].map(([label, value]) => (
          <p key={label} className="font-semibold">
            {label}: <span className="">{value}</span>
          </p>
        ))}

        <div className="mt-4">
          <p className="uppercase  underline">Witnesses</p>

          {[
            ['Name', firstWitnessName],
            ['Address', firstWitnessAddress],
            ['Contact', firstWitnessContact],
            ['Name', secondWitnessName],
            ['Address', secondWitnessAddress],
            ['Contact', secondWitnessContact]
          ].map(([label, value], index) => (
            <p key={`${label}-${index}`} className="font-semibold">
              {label}: <span className="">{value}</span>
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Loan;
