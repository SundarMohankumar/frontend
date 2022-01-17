import { Component } from 'react';
import axios from 'axios';
const Document_Upload_URL=  process.env.REACT_APP_Document_Upload_URL;
class UploadService extends Component {
   
    attachDocument(data){
     return axios.post(Document_Upload_URL,data);
    }
    }
    export default new UploadService()