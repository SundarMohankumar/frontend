import React from 'react'
import { Form } from 'react-bootstrap'
import classNames from 'classnames';

const Check = ({ fieldName = "", value = "", register = {}, type = "checkbox", errors = {}, showLabel = true, onClick=()=>{} }) => {
    var trimmedFieldName = fieldName.replace(/[ (/,.?'")&-]/gi, "")
    console.log(trimmedFieldName)
    return (
        <>
            {showLabel?<><Form.Label>{fieldName}</Form.Label><br/></>:null}
            
            <Form.Check
                inline
                name={trimmedFieldName}
                type={type}
                label={value}
                value={value}
                onClick={onClick}
                {...register(trimmedFieldName, {
                    required: fieldName + ' is required',
                })}
                className={classNames("form-check", {
                    "is-invalid": errors[trimmedFieldName]
                })}
            />
            {errors[trimmedFieldName] && (
                <div className="invalid-feedback">
                    {errors[trimmedFieldName].message}
                </div>
            )}
        </>
    )
}

export default Check
