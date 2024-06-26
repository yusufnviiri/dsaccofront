/* eslint-disable  */
export function UserLoggedIn(){
    const nullValue = JSON.stringify(localStorage.getItem('token'));
const userToken = JSON.stringify(localStorage.getItem('bearer'));
if (userToken === nullValue) {
  return true;
  } else{ return false;}
}

// const nullValue = JSON.stringify(localStorage.getItem('token'));
// const userToken = JSON.stringify(localStorage.getItem('bearer'));
// const loginStatus = () => {
//   setTimeout(() => {
//     if (userToken === nullValue) {
//       navigate('/user-control', { replace: true });
//     }
//   }, 3000);
// };
// loginStatus();