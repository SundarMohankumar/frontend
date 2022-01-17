import React from 'react'
import { useForm, Controller } from 'react-hook-form';
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import classNames from 'classnames';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import EligibilityCheckService from '../services/EligibilityCheckService';

const EligibilityCheck = () => {
    const [countries, setCountries] = useState([]); // All names of the countries in the API
    const { register, formState: { errors }, handleSubmit, reset, control } = useForm();
    useEffect(() => {
        async function getData() {
            const userData = await axios.get(`https://disease.sh/v3/covid-19/countries`);
            var a = userData.data.map(val => { return val.country });
            setCountries(a)
        }
        getData();
    }, []);

    const onSubmit = async (data) => {
      alert(JSON.stringify(data));
      const responseData= await EligibilityCheckService.checkEligibility(data);
      alert(responseData.data);
      //reset()
    };
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label htmlFor="Effective date">Effective date</label>
                        <input
                            name="Effectivedate"
                            {...register('lossDate', {
                                required: 'Loss Date is required',
                            })}
                            type="date"
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
                    <br />
                    <br />
                    <div className="form-group">countriesList
                        <label htmlFor="State">State</label>
                        <select
                            name='countriesList'
                            className={classNames("form-control form-control-lg form-select", {
                                "is-invalid": errors.state,
                            })}
                            {...register('state', { required: 'state is required' })}
                        >
                            <option value="">----Select State----</option>
                            <option value="AL">Alabama</option>
                            <option value="CA">California</option>
                            <option value="ND">North Dakota</option>
                            <option value=" VA">Virginia</option>
                        </select>
                        {errors.state && (
                            <div className="invalid-feedback">
                                {errors.state.message}
                            </div>
                        )}
                    </div>
                    <br />
                    <br />
                    <div className="form-group">
                        <label htmlFor="Product Selection">Product Selection</label>
                        &nbsp; &nbsp; &nbsp;
                        <input
                            name='ProductSelection'
                            className="form-check-input"
                            type="radio"
                            value="Commercial Autos" {...register('product', { required: 'product is required' })}
                        />
                        <label className="form-check-label" htmlFor="CA">Commercial Auto</label>&nbsp;&nbsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            value="TPCI" {...register('product', { required: 'product is required' })}
                        />
                        <label className="form-check-label" htmlFor="TPCI">TPCI</label> &nbsp; &nbsp;
                        <input
                            className="form-check-input"
                            type="radio"
                            value="Excess" {...register('product', { required: 'product is required' })}
                        />
                        <label className="form-check-label" htmlFor="Excess">Excess</label>
                        {errors.product && (
                            <div className="form-text text-danger">
                                {errors.product.message}
                            </div>
                        )}
                    </div>
                    <br />
                    <br />
                    <div className="search-bar">
                        <label htmlFor="Class Code">Class Code</label>
                        <Controller
                            control={control}
                            name="classCode"
                            {...register('classCode', { required: 'Country is required' })}
                            render={({ field: { onChange } }) => (
                                <Typeahead
                                    id="basic-typeahead-single"
                                    labelKey="Class Code"
                                    onChange={([e]) => onChange(e)}
                                    options={countries}
                                    placeholder="----Select Country----"
                                />
                            )}
                        />
                        {errors.classCode && (
                            <div className="form-text text-danger">
                                {errors.classCode.message}
                            </div>
                        )}
                    </div>
                    <br />
                    <button type="submit" className="btn btn-primary">Check</button>
                </form>
            </div>
        </div>
    )
}
export default EligibilityCheck