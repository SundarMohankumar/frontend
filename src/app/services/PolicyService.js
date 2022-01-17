import axios from 'axios';
import { Component } from 'react';
const policySearchURL= process.env.REACT_APP_PolicySearch_URL;

class PolicyService extends Component {

       getPolicyById(policyId){
        return axios.get(policySearchURL+policyId);
       }
       }
       export default new PolicyService()