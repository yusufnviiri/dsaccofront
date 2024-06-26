/* eslint-disable  */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { userData } from "../../redux/ApiSlice";

function UpdateUserData(props) {
  const dispatch = useDispatch();

  const { showForm } = props;
  const [toggleForm, setToggle] = useState(props.showForm);

  // const [showForm,setShowForm] = useState();
  useEffect(() => {
    setToggle(true);
  }, [showForm]);
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [sex, setSex] = useState("");
  const [nextOfKin, setnextOfKin] = useState("");
  const [kinRelationShip, setkinRelationShip] = useState("");
  const [district, setdistrict] = useState("");
  const [occupation, setoccupation] = useState("");
  const userdetails = {
    dateOfBirth,
    sex,
    nextOfKin,
    kinRelationShip,
    district,
    occupation,
  };
  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();

    dispatch(userData(userdetails));
    setToggle(false);
  };

  return (
    <>
      {showForm && toggleForm ? (
        <>
          <div className="absolute   size-full pb-11 rounded top-0 bg-[rgba(0,0,0,0.8)] right-0">
            <div className="float-right mr-11 mt-6">
              <XMarkIcon
                className="size-11 text-blue-500 text-right"
                onClick={() => {
                  setToggle(false);
                }}
              />
            </div>
            <div className="relative w-3/4  md:w-1/2 lg:w-96 m-auto  h-fit sm:py-11 py-7  rounded top-24 bg-[rgb(11,4,65)] right-0">
              <div className="w-[90%]   m-auto  login_form">
                <form
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <div className="mb-1  ">
                    <label className="font-bold   ml-2 block"> Gender </label>
                    <select
                      className="font-bold    block w-full"
                      required
                      value={sex}
                      onChange={(e) => {
                        setSex(e.target.value);
                      }}
                    >
                      <option className="">...select...</option>
                      <option className=" ">Male</option>
                      <option className=" ">Female</option>
                    </select>
                  </div>

                  <div className="mb-1  ">
                    <label className="font-bold   ml-2 block">District</label>
                    <input
                      required
                      value={district}
                      onChange={(e) => {
                        setdistrict(e.target.value);
                      }}
                      className=" w-full   py-3 text-center"
                      type="text"
                    />
                  </div>
                  <div className="mb-1  ">
                    <label className="font-bold   ml-2 block">Occupation</label>
                    <input
                      required
                      value={occupation}
                      onChange={(e) => {
                        setoccupation(e.target.value);
                      }}
                      className=" w-full   py-3 text-center"
                      type="text"
                    />
                  </div>
                  <div className="mb-1  ">
                    <label className="font-bold   ml-2 block">
                      Date Of Birth
                    </label>
                    <input
                      required
                      value={dateOfBirth}
                      onChange={(e) => {
                        setdateOfBirth(e.target.value);
                      }}
                      className=" w-full   py-3 text-center"
                      type="date"
                    />
                  </div>

                  <div className="mb-1  ">
                    <label className="font-bold   ml-2 block">
                      Next Of Kin
                    </label>
                    <input
                      required
                      value={nextOfKin}
                      onChange={(e) => {
                        setnextOfKin(e.target.value);
                      }}
                      className=" w-full   py-3 text-center"
                      type="text"
                    />
                  </div>

                  <div className="mb-1  ">
                    <label className="font-bold   ml-2 block">
                      {" "}
                      Relationship{" "}
                    </label>
                    <select
                      className="font-bold    block w-full"
                      required
                      value={kinRelationShip}
                      onChange={(e) => {
                        setkinRelationShip(e.target.value);
                      }}
                    >
                      <option className="">...select...</option>
                      <option className=" ">Brother</option>
                      <option className=" ">Sister</option>
                      <option className=" ">Relative</option>
                      <option className=" ">Parent</option>
                      <option className=" ">Friend</option>
                    </select>
                  </div>

                  <div
                    className="mt-6 text-white submit   font-bold w-full m-auto
        text-center  bg-green-700 rounded hover:bg-slate-700"
                  >
                    <input
                      className="uppercase  font-lobs text:[0.48em] sm:text-[0.91em] cursor-pointer text-yellow-300"
                      type="submit"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
UpdateUserData.defaultProps = {
  showForm: true,
};
export default UpdateUserData;
