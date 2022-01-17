import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TypeAHeadForm from '../../Typeahead/TypeAHeadForm';
import { CountryName } from '../../../DummyData/CountryData';
import FormControl from '../../FormControl/FormControl';
import DropDown from '../../DropDown/DropDown';

const CommercialMonolineGLData = ({ register, errors, control, getValues }) => {
    const CountryData = CountryName.map(val => val.name)

    return (
        <>
            <Row>
                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    <FormControl fieldName="Effective Date" register={register} errors={errors} type='date' />
                </Col>
                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    <TypeAHeadForm register={register} errors={errors} control={control} fieldName='ClassCode or Description' Data={CountryData} minLength={3} getValues={getValues} />
                </Col>
                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    <FormControl fieldName="Underlying Premium" register={register} errors={errors} type='text' />
                </Col>
                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    <DropDown fieldName='Each Occurance Limit' register={register} errors={errors}>
                        <option value="">----Select Each Occurance Limit----</option>
                        <option value="1-10">1-10</option>
                        <option value="10-20">10-20</option>
                        <option value="20-30">20-30</option>
                        <option value="30-40">30-40</option>
                    </DropDown>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    <DropDown fieldName='Products and Completed Ops Aggregate Limit' register={register} errors={errors}>
                        <option value="">----Select Products and Completed Ops Aggregate Limit----</option>
                        <option value="1-10">1-10</option>
                        <option value="10-20">10-20</option>
                        <option value="20-30">20-30</option>
                        <option value="30-40">30-40</option>
                    </DropDown>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    <DropDown fieldName='General Aggregate Limit' register={register} errors={errors}>
                        <option value="">----Select General Aggregate Limit----</option>
                        <option value="1-10">1-10</option>
                        <option value="10-20">10-20</option>
                        <option value="20-30">20-30</option>
                        <option value="30-40">30-40</option>
                    </DropDown>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    <DropDown fieldName='Personal & Advertising Limit' register={register} errors={errors}>
                        <option value="">----Select Personal & Advertising Limit----</option>
                        <option value="1-10">1-10</option>
                        <option value="10-20">10-20</option>
                        <option value="20-30">20-30</option>
                        <option value="30-40">30-40</option>
                    </DropDown>
                </Col>
                <Col xl={6} lg={6} md={12} sm={12} xs={12}>
                    <DropDown fieldName='Is this a Claims Made Policy?' register={register} errors={errors}>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </DropDown>

                </Col>
            </Row>
        </>
    )
}

export default CommercialMonolineGLData