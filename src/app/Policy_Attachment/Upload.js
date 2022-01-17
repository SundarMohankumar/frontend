import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';
import UploadService from '../services/UploadService';
const Upload = () => {
    const { register, handleSubmit } = useForm();

  const onSubmit = async(data) => {
    const file = data.fileName[0];
    let payload = new FormData();
   payload.append('file', file);
   payload.append('quoteNumber', data.quoteNumber);
  try{
  const responseData=await UploadService.attachDocument(payload);
   alert(responseData.data.message);
  }
  catch(Error){
      let error=Error.response.data.error;
      alert (error);
    }
    };

  return (
  <div className= "row">
    <div class="row d-flex justify-content-center">

      <div class="col-md-4">
      <div class="w-75 p-3 text-center">
      <label htmlFor="Policy Document:">Policy Document</label>
      </div>
    <form onSubmit={handleSubmit(onSubmit)}>
     <div class="w-75 p-3" style={{"backgroundColor": "#eee"}}>
   <input
  {...register('fileName')}
  class="form-control" 
  type="file" 
  name="fileName"
  id="fileName"/>
    </div>
           <br/>
        <div class="w-75 p-3" style={{"backgroundColor": "#eee"}}>
        <label htmlFor="Quote/Policy Number">Quote/Policy Number</label>
      <input
          {...register('quoteNumber')}
          name="quoteNumber"
          type="text"
          class="form-control" 
        />
        </div>
       
       
         <br/>
         <div className = "w-75 p-3" style={{"marginLeft":"20px"}}>
         <button 
         className="btn btn-primary"
         type="submit">Submit</button>
         </div>
         
    </form>
    </div>
    </div>
    </div>
   
  );
}

export default Upload
