import React from 'react'
import { useState } from 'react';
import PolicyService from '../services/PolicyService';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import classNames from 'classnames';
import ReportLossService from '../services/ReportLossService';
//import { BsSearch } from "react-icons";
//import { ArrowRight } from 'react-bootstrap-icons';
const ReportLoss = () => {
  const { register, setError, formState: { errors }, handleSubmit, reset } = useForm();
  // return <ArrowRight />;
  let errorFlag = "false";
  var status = ""
  let errorMessage = "";
  const [policyId, setpolicyId] = useState();
  const [policy, setPolicy] = useState([]);
  const [basicPolicy, setBasicPolicy] = useState([]);
  const history = useHistory();
  const onInputChange = (event) => {
    setpolicyId(event.target.value);
  }
  const loadPolicy = async () => {
    alert("IN policy" + policyId);
    try {
      const policyData = await PolicyService.getPolicyById(policyId);
      setPolicy(policyData.data);
      setBasicPolicy(policyData.data.basicPolicy);
    }
    catch (error) {
    }
  };
  const onSubmit = async (data) => {

    alert(JSON.stringify(data));
    console.log(data);
    try {
      // const responseData = await axios.post("http://localhost:8080/FNOL", data);
      alert("before calling reportloss");
      const responseData = await ReportLossService.reportLoss(data);
      status = responseData.data;
      alert(status);
      if (status == "Success") {
        alert("Information submitted sucessfully")
      }
    }
    catch (error) {
      console.log(error.response);
      alert("ERROR in catch" + error.response);
      alert("in ERROR" + JSON.stringify(error.response.data.error));
      errorFlag = "true";
      errorMessage = JSON.stringify(error.response.data.error)
    }
    if (errorFlag === "true") {

      alert("Naivigation");
      // let redirectUrl=`/UserError/${errorMessage}`;
      // alert("redirectUrl"+redirectUrl);
      // navigate(redirectUrl);
      history.push("/");
      // <UserErrorProps errorMessage={errorMessage} />
    }
    else {

      history.push("/");

    }


  }






  return (
    <>
      <div class="input-group" style={{ width: "300px", marginTop: "80px", marginLeft: "100px" }}>
        <input type="search" class="form-control rounded" placeholder="Policy No" aria-label="Search"
          aria-describedby="search-addon" name="PolicyNumber" onChange={e => onInputChange(e)} />
        <button type="button" class="btn btn-outline-primary" onClick={loadPolicy} >search</button>
      </div>



      <div class="container-fluid" style={{ border: "1px solid #cecece", "marginTop": "70px", "width": "90%", "height": "700px" }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="row">
            <div class="col mb-5">
              <br />  <br />
              <div class="container-fluid" style={{ border: "1px solid #cecece", width: "80%", "marginLeft": "0" }}>
                <div class="row mt-3">
                  <label htmlFor="PolicyDetails" style={{ "textAlign": "left", "marginBottom": "3px" }}>Policy Details</label>
                  <hr />
                  <div class="col-md-5">
                    <input
                      {...register("policyNumber")}
                      type="text"
                      class="form-control"
                      placeholder="Policy Number"
                      value={policy.systemId}
                    />
                  </div>
                  <div class="col-md-5">
                    <input
                      {...register("insuredName")}
                      type="text"
                      class="form-control"
                      placeholder="Insured Name"
                      value={policy.updateUser}
                    />
                  </div>
                </div>
                <br /><br />

                <div class="row mt-3 mb-4">
                  <div class="col-md-5">
                    <input
                      {...register("policyStatus")}
                      type="text"
                      class="form-control"
                      placeholder="Policy Status"
                      value={basicPolicy.statusCd}
                    />
                  </div>
                  <div class="col-md-5">
                    <input
                      {...register("insuredDetails")}
                      type="text"
                      class="form-control"
                      placeholder="Insured Details"
                      value={policy.customerRef}

                    />
                  </div>
                </div>
              </div>
            </div>


            <div class="col mb-5">
              <br />  <br />

              <div class="container-fluid" style={{ border: "1px solid #cecece", width: "80%", marginLeft: "0" }}>


                <div class="row mt-3">
                  <label htmlFor="Claimant Details" style={{ "textAlign": "left", "marginTop": "5px" }}>Claimant Details</label>
                  <hr />
                  <div class="col-md-5">
                    <input
                      //  {...register("claimantName")}
                      {...register('claimantName', {
                        required: 'Claimant Name is  required',
                      })}
                      type="text"
                      // class="form-control" 
                      className={classNames("form-control", {
                        "is-invalid": errors.claimantName,
                      })}
                      placeholder="Claimant Name"

                    />
                    {errors.claimantName && (
                      <div className="invalid-feedback">
                        {errors.claimantName.message}
                      </div>
                    )}
                  </div>
                  <div class="col-md-7">
                    <input
                      {...register("claimantAddress")}
                      type="text"
                      class="form-control"
                      placeholder="Claimant Address"

                    />
                  </div>
                </div>
                <br /><br />

                <div class="row mt-3 mb-4">
                  <div class="col-md-10">
                    <input
                      {...register("claimantType")}
                      type="text"
                      class="form-control"
                      placeholder="Claimant Type"

                    />
                  </div>

                </div>
              </div>
            </div>
          </div>

          <div class="row">

            <div class="col mb-5">
              <br />  <br />
              <div class="container-fluid" style={{ border: "1px solid #cecece", width: "80%", marginLeft: "0" }}>
                <div class="row mt-3">
                  <label htmlFor="Claimant Details" style={{ "textAlign": "left", "marginTop": "5px" }}>Claim Details</label>
                  <hr />
                  <div class="col-md-5">
                    <input
                      //{...register("riskDetails")}
                      {...register('riskDetails', {
                        required: 'Risk Details is required',
                      })}
                      type="text"
                      //class="form-control" 
                      className={classNames("form-control", {
                        "is-invalid": errors.riskDetails,
                      })}
                      placeholder="Risk Details"

                    />
                    {errors.riskDetails && (
                      <div className="invalid-feedback">
                        {errors.riskDetails.message}
                      </div>
                    )}
                  </div>
                  <div class="col-md-5">
                    <input
                      //   {...register("lossDate")}
                      {...register('lossDate', {
                        required: 'Loss Date is required',
                      })}
                      type="date"
                      //  class="form-control" 
                      className={classNames("form-control", {
                        "is-invalid": errors.lossDate,
                      })}
                      placeholder="Loss Date"

                    />
                    {errors.lossDate && (
                      <div className="invalid-feedback">
                        {errors.lossDate.message}
                      </div>
                    )}
                  </div>
                </div>

                <br /><br />
                <div class="row mt-3 mb-4">
                  <div class="col-md-5">
                    <input
                      {...register("lossType")}
                      type="text"
                      class="form-control"
                      placeholder="Loss Type"

                    />
                  </div>
                  <div class="col-md-5">
                    <input
                      {...register("reportedBy")}
                      type="text"
                      class="form-control"
                      placeholder="Reported By"

                    />
                  </div>
                </div>
                <div class="row mt-3 mb-4">
                  <br />
                  <div class="col-md-8">
                    <br />
                    <input
                      {...register("reportedTo")}
                      type="text"
                      class="form-control"
                      placeholder="Reported To"
                    />
                  </div>

                </div>
              </div>
            </div>
            <div class="col mb-5">
              <br />  <br />
              <div class="container-fluid" style={{ border: "1px solid #cecece", width: "80%", marginLeft: "0" }}>
                <div class="row mt-3">
                  <label htmlFor="Claimant Details" style={{ "textAlign": "left", "marginTop": "5px" }}>Loss Location Details</label>
                  <hr />
                  <div class="col-md-7">
                    <input
                      //{...register("propDamagedLoc")}
                      {...register('propDamagedLoc', {
                        required: 'Property Damaged Location is required',
                      })}
                      type="text"
                      //  class="form-control" 
                      className={classNames("form-control", {
                        "is-invalid": errors.propDamagedLoc,
                      })}
                      placeholder="Property Damaged Location"

                    />
                    {errors.propDamagedLoc && (
                      <div className="invalid-feedback">
                        {errors.propDamagedLoc.message}
                      </div>
                    )}
                  </div>
                  <div class="col-md-5">
                    <input
                      {...register("propDamagedAddress")}
                      type="text"
                      class="form-control"
                      placeholder="Address"
                    />
                  </div>
                </div>

                <br /><br />
                <div class="row mt-3">
                  <div class="col-md-5">
                    <input
                      {...register("city")}
                      type="text"
                      class="form-control"
                      placeholder="City"

                    />
                  </div>
                  <div class="col-md-5">
                    <input
                      {...register("country")}
                      type="text"
                      class="form-control"
                      placeholder="Country"

                    />
                  </div>
                </div>
                <div class="row mt-3 mb-4">
                  <div class="col-md-5">
                    <br />
                    <input
                      {...register("state")}
                      type="text"
                      class="form-control"
                      placeholder="State"

                    />
                  </div>

                </div>
              </div>
            </div>

          </div>

          <button type="submit" class="btn btn-primary btn float-left" style={{ "marginLeft": "0" }}>Submit</button>
        </form>
      </div>


    </>


  )
}

export default ReportLoss
