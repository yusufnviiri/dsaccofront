/* eslint-disable */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loanTypes, loanSubmission } from '../../redux/ApiSlice';

function LoanApplication() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loanTypesData = useSelector((state) => state.ApiSlice.loanTypes);
  const notification = useSelector((state) => state.ApiSlice.notification);

  useEffect(() => {
    dispatch(loanTypes());
  });
  const [principleAmount, setprincipleAmount] = useState(0);
  const [loanType, setloanType] = useState(0);
  const [security, setsecurity] = useState('salary');
  const [loanPeriod, setloanPeriod] = useState(0);
  const [firstWitnessName, setfirstWitnessName] = useState('');
  const [firstWitnessAddress, setfirstWitnessAddress] = useState('');
  const [firstWitnessContact, setfirstWitnessContact] = useState('');
  const [secondWitnessName, setsecondWitnessName] = useState('');
  const [secondWitnessAddress, setsecondWitnessAddress] = useState('');
  const [secondWitnessContact, setsecondWitnessContact] = useState('');
  const [numberOfInstallments, setnumberOfInstallments] = useState(0);

  const loanDetails = {
    numberOfInstallments,
    principleAmount,
    security,
    loanPeriod,
    firstWitnessAddress,
    firstWitnessContact,
    firstWitnessName,
    secondWitnessAddress,
    secondWitnessContact,
    secondWitnessName,
    loanType,
  };
  const saveLoan = (e) => {
    e.preventDefault();
    dispatch(loanSubmission(loanDetails));
    if (notification !== '') {
      navigate('/accounts', { replace: true });
    }
  };
  return (
    <>
      <div className="m-auto ">
        <h4 className=" my-6  font-robotoCo uppercase underline-offset-2 text-center tracking-wider">     Loan Application </h4>

        <form
          onSubmit={(e) => {
            saveLoan(e);
          }}
        >

          <div className="h-[60vh] sm:h-[95vh] mb-[15vh] flex flex-col sm:flex-row m-auto justify-center  gap-10 w-[18rem] sm:w-[30rem] px-[1rem] overflow-y-auto  ">
            <div className=" w-full h-full sm:w-1/2">            
              <div className="mb-1  ">
                <label className="   ml-2 block"> Loan Type </label>

                <select
                  className="    block w-full"
                  required
                  value={loanType}
                  onChange={(e) => {
                    setloanType(e.target.value);
                  }}
                >
                  <option className=" font-thin text-red-900">...select...</option>

                  {loanTypesData.length > 0 ? (
                    loanTypesData.map((item) => (
                      <option
                        value={item.loanTypeId}
                        key={item.loanTypeId}
                        className=""
                      >
                        {item.description}
                      </option>
                    ))
                  ) : (
                    <option>No loan type in database</option>
                  )}
                </select>
              </div>

              <div className="mb-1  ">
                <label className="   ml-2 block">Amount</label>
                <input
                  required
                  value={principleAmount}
                  onChange={(e) => {
                    setprincipleAmount(e.target.value);
                  }}
                  className=" w-full   py-3 text-center"
                  type="number"
                />
              </div>
              <div className="mb-1  ">
                <label className="   ml-2 block">Installements</label>
                <input
                  required
                  value={numberOfInstallments}
                  onChange={(e) => {
                    setnumberOfInstallments(e.target.value);
                  }}
                  className=" w-full   py-3 text-center"
                  type="number"
                />
              </div>
              <div className="mb-1  ">
                <label className="   ml-2 block">Security</label>
                <input
                  required
                  value={security}
                  onChange={(e) => {
                    setsecurity(e.target.value);
                  }}
                  className=" w-full   py-3 text-center"
                  type="text"
                />
              </div>
              <div className="mb-1  ">
                <label className="   ml-2 block">Loan Period</label>
                <input
                  required
                  value={loanPeriod}
                  onChange={(e) => {
                    setloanPeriod(e.target.value);
                  }}
                  className=" w-full   py-3 text-center"
                  type="number"
                />
              </div>

              <h4 className=" my-2    text-[0.77em]
     text-center font-lobs "
              >
                {' '}
                First Witness
                {' '}
              </h4>
              <div className="mb-1  ">
                <label className="   ml-2 block">Name</label>
                <input
                  required
                  value={firstWitnessName}
                  onChange={(e) => {
                    setfirstWitnessName(e.target.value);
                  }}
                  className=" w-full   py-3 text-center"
                  type="text"
                />
              </div>
            </div>
            <div className="w-full h-full sm:w-1/2">            
              <div className="mb-1  ">
                <label className="   ml-2 block">Contact</label>
                <input
                  required
                  value={firstWitnessContact}
                  onChange={(e) => {
                    setfirstWitnessContact(e.target.value);
                  }}
                  className=" w-full   py-3 text-center"
                  type="text"
                />
              </div>
              {' '}
              <div className="mb-1  ">
                <label className="   ml-2 block">Address</label>
                <input
                  required
                  value={firstWitnessAddress}
                  onChange={(e) => {
                    setfirstWitnessAddress(e.target.value);
                  }}
                  className=" w-full   py-3 text-center"
                  type="text"
                />
              </div>
              <h4 className=" my-2    text-[0.77em]
     text-center font-lobs "
              >
                {' '}
                Second Witness
                {' '}
              </h4>
              <div className="mb-1  ">
                <label className="   ml-2 block">Name</label>
                <input
                  required
                  value={secondWitnessName}
                  onChange={(e) => {
                    setsecondWitnessName(e.target.value);
                  }}
                  className=" w-full   py-3 text-center"
                  type="text"
                />
              </div>
              <div className="mb-1  ">
                <label className="   ml-2 block">Contact</label>
                <input
                  required
                  value={secondWitnessContact}
                  onChange={(e) => {
                    setsecondWitnessContact(e.target.value);
                  }}
                  className=" w-full   py-3 text-center"
                  type="text"
                />
              </div>
              {' '}
              <div className="mb-1  ">
                <label className="   ml-2 block">Address</label>
                <input
                  required
                  value={secondWitnessAddress}
                  onChange={(e) => {
                    setsecondWitnessAddress(e.target.value);
                  }}
                  className=" w-full   py-3 text-center"
                  type="text"
                />
              </div>
               <div
            className="my-6 text-white submit    w-full m-auto
        text-center  bg-green-700 rounded hover:bg-slate-900"
          >
            <input
              className="uppercase  font-lobs  cursor-pointer text-yellow-100"
              type="submit"
            />
          </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoanApplication;
