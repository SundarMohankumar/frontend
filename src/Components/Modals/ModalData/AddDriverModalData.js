import React from 'react'
import { Col, Row } from 'react-bootstrap'
// import classNames from 'classnames';
import FormControl from '../../FormControl/FormControl';

const AddDriverModalData = ({ register, errors }) => {
    return (
        <Row>
            <Col >
                <FormControl fieldName="Age" register={register} errors={errors} type='number' min={0} />
            </Col>
            <Col>
                <FormControl fieldName="Total Driver Points" register={register} errors={errors} type='number' min={0} />
            </Col>
        </Row>
    )
}

export default AddDriverModalData
