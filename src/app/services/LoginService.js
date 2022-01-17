import axios from 'axios';
import { Component } from 'react';
const loginURL=  process.env.REACT_APP_Login_URL;

class LoginService extends Component {

       verifyCredentials(data){
         alert("loginURL"+loginURL);
       return axios.post(loginURL,data)
    }
 }
 export default new LoginService()