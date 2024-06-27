/* eslint-disable  */

import { jwtDecode } from 'jwt-decode';
const nullValue = JSON.stringify(localStorage.getItem('token'));
const userToken = JSON.stringify(localStorage.getItem('bearer'));

function LogInStatus() {
  let outPut = false;
  if (userToken === nullValue) {
    outPut = true;
  }
  return outPut;
}

 const findUserRole=()=>{
let obj = [];
if (userToken !== nullValue) {
  const decoded = jwtDecode(userToken);

  obj = Object.values(decoded);

}
return obj[1]
}
export const UserLoggedIn = LogInStatus();

export const userRole = findUserRole();
