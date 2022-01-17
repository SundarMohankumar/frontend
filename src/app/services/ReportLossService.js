import axios from 'axios';
import { Component } from 'react';
const reportLossServiceURL=  process.env.REACT_APP_ReportLoss_URL;
class ReportLossService extends Component {
   
       reportLoss(data){
        alert("in reportloss class");
   
     return axios.post(reportLossServiceURL,data);
       }
       }
       export default new ReportLossService()