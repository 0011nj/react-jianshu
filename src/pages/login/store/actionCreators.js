import axios from 'axios';
import { constants } from '/';


export const logout = () => ({
  type: constants.CHANGE_LOGOUT,
  value: false
})

const changeLogin = () => ({
  type: constants.CHANGE_LOGIN,
  value: true
})

export const login = (account, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?account=' + account +'&password=' + password).then((res)=>{
      const result = res.data.data;
      if(result) {
        dispatch(changeLogin())
      } else {
        console.log('账号密码不匹配')
      }
    })
  }
}