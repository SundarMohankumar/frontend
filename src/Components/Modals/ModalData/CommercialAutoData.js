import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TypeAHeadForm from '../../Typeahead/TypeAHeadForm';
import { CountryName } from '../../../DummyData/CountryData';
import CommercialAutoTable from './CommercialAutoTable';
import FormControl from '../../FormControl/FormControl';
import DropDown from '../../DropDown/DropDown';

const CommercialAutoData = ({ register, errors, control, getValues }) => {
    const CountryData = CountryName.map(val => val.name)

    return (
        <>
            <Row>
                <Col xl={4} lg={6} md={12} sm={12} xs={12}>
                    <FormControl fieldName="Effective Date" register={register} errors={errors} type='date' />
                </Col>
                <Col xl={4} lg={6} md={12} sm={12} xs={12}>
                    <TypeAHeadForm register={register} errors={errors} control={control} fieldName='ClassCode or Description' Data={CountryData} minLength={3} getValues={getValues} />
                </Col>
                <Col xl={4} lg={6} md={12} sm={12} xs={12}>
                    <DropDown fieldName='Garaging Location' register={register} errors={errors}>
                        <option value="">----Select Garaging Location----</option>
                        <option value="Alabama">Alabama</option>
                        <option value="California">California</option>
                        <option value="North Dakota">North Dakota</option>
                        <option value="Virginia">Virginia</option>
                    </DropDown>
                </Col>
                <Col xl={4} lg={6} md={12} sm={12} xs={12}>
                    <DropDown fieldName='General Aggregate Limit' register={register} errors={errors}>
                        <option value="">----Select General Aggregate Limit----</option>
                        <option value="1-10">1-10</option>
                        <option value="10-20">10-20</option>
                        <option value="20-30">20-30</option>
                        <option value="30-40">30-40</option>
                    </DropDown>
                </Col>
                <Col xl={4} lg={6} md={12} sm={12} xs={12}>
                    <FormControl fieldName="Number of Private Passenger Vehicles" register={register} errors={errors} type='Number' />
                </Col>
                <Col xl={4} lg={6} md={12} sm={12} xs={12}>
                    <FormControl fieldName="Number of Van/Pickup Trucks" register={register} errors={errors} type='Number' />

                </Col>
                <Col xl={4} lg={6} md={12} sm={12} xs={12}>
                    <FormControl fieldName="Number of Light Trucks (up to 10,000 lbs.)" register={register} errors={errors} type='Number' />

                </Col>
                <Col xl={4} lg={6} md={12} sm={12} xs={12}>
                    <FormControl fieldName="Number of School Buses" register={register} errors={errors} type='Number' />

                </Col>
                <Col xl={4} lg={6} md={12} sm={12} xs={12}>
                    <FormControl fieldName="Number of Other Buses - 0 to 12 Passengers" register={register} errors={errors} type='Number' />
                </Col>
                <Col xl={4} lg={6} md={12} sm={12} xs={12}>
                    <FormControl fieldName="Number of Other Buses - Over 12 Passengers" register={register} errors={errors} type='Number' />
                </Col>
            </Row>
            <Row className='CommercialAutoTable'>
                <CommercialAutoTable register={register} errors={errors} />
            </Row>
        </>
    )
}

export default CommercialAutoData
