import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMemberAccounts, memberDeposit } from "../../redux/ApiSlice";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Deposit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.ApiSlice.accounts);
  const memmberLoans = useSelector((state) => state.ApiSlice.loans);
  const notification = useSelector((state) => state.ApiSlice.notification);

  useEffect(() => {
    dispatch(getMemberAccounts());
  }, []);

  const [amount, setAmount] = useState(0);
  const [accountId, setAccountId] = useState("");
  const depositDetails = {
    amount,
    accountId,
  };
  const saveDeposit = (e) => {
    e.preventDefault();
    dispatch(memberDeposit(depositDetails));
    if (notification !== "") {
      navigate("/accounts", { replace: true });
    }
  };
  return (
    <>
      <div className="w-[30%] m-auto  login_form">
        <h4 className=" my-6 font-bold   underline-offset-2  
     text-center font-lobs "  >  Deposit </h4>   
          <form
          onSubmit={(e) => {
            saveDeposit(e);
          }}
        >
          <div className="mb-1  ">
            <label className="font-bold   ml-2 block"> Select Account </label>

            <select
              className="font-bold    block w-full"
              required
              value={accountId}
              onChange={(e) => {
                setAccountId(e.target.value);
              }}
            >
              <option className=" font-thin text-red-900">...select...</option>

              {accounts.length > 0 ? (
                accounts.map((item) => (
                  <option value={item.accountId}
                    key={item.accountId}
                    className="font-bold"
                  >
                      {item.accountDescription}
                    </option>
              
                ))
              ) : (
                <p>No account in database</p>
              )}
            </select>
          </div>
          <div className="mb-1  ">
            <label className="font-bold   ml-2 block">Amount</label>
            <input
              required
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
              className=" w-full   py-3 text-center"
              type="number"
            />
          </div>

          <div
            className="mt-6 text-white submit   font-bold w-full m-auto
        text-center  bg-green-700 rounded hover:bg-slate-700"
          >
            <input
              className="uppercase  font-lobs text:[0.48em] sm:text-[0.71em] cursor-pointer text-yellow-300"
              type="submit"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Deposit;
