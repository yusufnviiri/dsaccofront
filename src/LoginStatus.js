/* eslint-disable  */
function LogInStatus(){
  let outPut=false;
    const nullValue = JSON.stringify(localStorage.getItem('token'));
const userToken = JSON.stringify(localStorage.getItem('bearer'));
if (userToken === nullValue) {
outPut=true
  } 
  return outPut;
}

export const UserLoggedIn =LogInStatus()
