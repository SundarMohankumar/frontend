import React from 'react'
import { Form } from 'react-bootstrap'
import classNames from 'classnames';

const FormControl = ({ fieldName = "", register = {}, errors = {}, type = "text", showLabel = true,  defaultValue = "", min, minLength, maxLength, className }) => {
    var trimmedFieldName = fieldName.replace(/[ (/,.?'")&-]/gi, "")

    return (
        <Form.Group className="mb-3">
            {showLabel ? <Form.Label>{fieldName}</Form.Label> : null}
            <Form.Control
                name={trimmedFieldName}
                type={type}
                placeholder={fieldName}
                size="sm"
                // row={3}
                // as={as}
                defaultValue={defaultValue}
                {...register(trimmedFieldName, {
                    required: fieldName + ' is required',
                    min: {
                        value: min,
                        message: 'Should Not be Negative'
                    },
                    maxLength: {
                        value: maxLength,
                        message: fieldName + ' Should carry 5 digits only'
                    },
                    minLength: {
                        value: minLength,
                        message: fieldName + ' Should carry 5 digits only'
                    },
                })}
                className={classNames("form-control pointsModal "+ className, {
                    "is-invalid": errors[trimmedFieldName],
                })}
            />
            {errors[trimmedFieldName] && (
                <div className="invalid-feedback">
                    {errors[trimmedFieldName].message}
                </div>
            )}
        </Form.Group>
    )
}

export default FormControl
