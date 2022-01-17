import React from 'react'
import { useParams } from 'react-router'
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PolicyService from '../services/PolicyService';

export const Policy = () => {
    const {id} = useParams();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState([]);
    const [basicPolicy, setBasicPolicy] = useState([]);

  useEffect(() => {
        loadUser();
      }, []);
    const loadUser = async()=>{
   try{
    // const userData = await axios.get(policySearchURL+`${id}`);
    const userData = await PolicyService.getPolicyById(id);
    setIsLoaded(true);
    setUser(userData.data);
    setBasicPolicy(userData.data.basicPolicy);
     }catch (error) {
    setIsLoaded(true);
     setError(error); 
    }
    };
   //code to handle error
   if (error) {
    return (<div style={{marginTop:50}}>Error: {error.response.data.error}
            <br/>  <br/> <Link className="btn btn-primary" to="/">
        back to Home
      </Link> 
    </div> );
}else if (!isLoaded) {
  return <div style={{marginTop:50}}>Loading...</div>;
}
   
  else{
      return (
        <div>
           
  <h2  className="display-4" style={{marginTop:50}}>Information of Policy Id: {id}</h2>
 <ul className="list-group" style={{marginLeft:200,marginRight:200,marginTop:60}} >
  <li className="list-group-item">systemId: {user.systemId}</li>
  <li className="list-group-item">id: {user.id}</li>
  <li className="list-group-item">updateCount: {user.updateCount}</li>
  <li className="list-group-item">updateUser: {user.updateUser}</li>
  <li className="list-group-item">CustomerReference: {user.customerRef}</li>
  <li className="list-group-item">basicPolicy-id: {basicPolicy.id}</li>
  <li className="list-group-item">basicPolicy-policyNumber: {basicPolicy.policyNumber}</li>
  <li className="list-group-item">basicPolicy-statusCd: {basicPolicy.statusCd}</li>
  <li className="list-group-item">basicPolicy-carrierCd: {basicPolicy.carrierCd}</li>
 
</ul>
<br/>
  <Link className="btn btn-primary" to="/home">
        back to Home
      </Link>
      <br/>
      <Link className="btn btn-primary" to="/attachment">
             File Upload
            </Link>
        </div>
    )
}
}
export default Policy;