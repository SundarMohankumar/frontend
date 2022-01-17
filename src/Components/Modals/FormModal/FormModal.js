import React from 'react'
import { Modal, Button, } from 'react-bootstrap'
import AddDriverModalData from '../ModalData/AddDriverModalData';
import CommercialAutoData from '../ModalData/CommercialAutoData';
import CommercialMonolineGLData from '../ModalData/CommercialMonolineGLData';
import ExcessData from '../ModalData/ExcessData';


const FormModal = ({ show, handleClose, handleSave, handleSubmit, modalTitle, register, errors, control, getValues }) => {
    var size='md'
    modalTitle==="Commercial Auto"? size='xl': size= 'lg'
    return (
        <>
            <Modal show={show} onHide={handleSave} size={size}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {show === true && modalTitle === "Add Driver" ?
                        <AddDriverModalData register={register} errors={errors} />
                        : null
                    }
                    {show === true && modalTitle === "Commercial Monoline GL" ?
                        <CommercialMonolineGLData register={register} errors={errors} control={control} getValues={getValues}/>
                        : null
                    }
                    {show === true && modalTitle === "Commercial Package" ?
                        <CommercialMonolineGLData register={register} errors={errors} control={control} getValues={getValues} />
                        : null
                    }
                    {show === true && modalTitle === "Commercial Auto" ?
                        <CommercialAutoData register={register} errors={errors} control={control} getValues={getValues} />
                        : null
                    }
                    {show === true && modalTitle === "Excess" ?
                        <ExcessData register={register} errors={errors} control={control} getValues={getValues} />
                        : null
                    }
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={(e) => handleClose()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit(handleSave)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default FormModal
