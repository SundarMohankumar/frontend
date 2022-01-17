import { Controller } from 'react-hook-form';
import { Form } from 'react-bootstrap'
import { Typeahead } from 'react-bootstrap-typeahead';
import classNames from 'classnames';

const TypeAHeadForm = ({ register, errors, control, fieldName, Data ,minLength, getValues}) => {
    var trimmedFieldName = fieldName.replace(/ /gi, "")
    // console.log(trimmedFieldName)
    return (
        <Form.Group>
            <Form.Label>{fieldName}</Form.Label>
            <Controller
                control={control}
                name={trimmedFieldName}
                size="sm"
                {...register(trimmedFieldName, { required: trimmedFieldName + 'is required' })}
                className={classNames("form-control", {
                    "is-invalid": errors[trimmedFieldName],
                })}
                render={({ field: { onChange } }) => (
                    <Typeahead
                    minLength={minLength}
                        size="sm"
                        id="basic-typeahead-single"
                        onChange={([e]) => onChange(e)}
                        options={Data}
                        placeholder={fieldName}
                        defaultInputValue={getValues(trimmedFieldName)}
                    />
                )}
            />
            {errors[trimmedFieldName] && (
                <div className="form-text text-danger">
                    {errors[trimmedFieldName].message}
                </div>
            )}
        </Form.Group>)
}
export default TypeAHeadForm