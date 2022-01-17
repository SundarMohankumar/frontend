import React from 'react'
import { Form } from 'react-bootstrap'
import classNames from 'classnames';

const DropDown = ({ fieldName = "", register = {}, errors = {}, showLabel = true, children }) => {
    var trimmedFieldName = fieldName.replace(/[ (/,.?'")&-]/gi, "")
    console.log(trimmedFieldName)
    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
            {showLabel ? <Form.Label>{fieldName}</Form.Label> : null}
            <Form.Select
                name={trimmedFieldName}
                size="sm"
                {...register(trimmedFieldName, {
                    required: fieldName + ' is required',
                })}
                className={classNames("form-control", {
                    "is-invalid": errors[trimmedFieldName],
                })}
            >
                {children}
            </Form.Select>
            {errors[trimmedFieldName] && (
                <div className="invalid-feedback">
                    {errors[trimmedFieldName].message}
                </div>
            )}
        </Form.Group>
    )
}

export default DropDown
