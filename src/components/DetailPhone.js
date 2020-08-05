import React from 'react'
import PropTypes from 'prop-types';
import { Dialog } from 'primereact/dialog'
import { Accordion, AccordionTab } from 'primereact/accordion'

DetailPhone.propTypes = {
    displayDialog: PropTypes.bool,
    setDisplayDialog: PropTypes.func.isRequired,
    phone: PropTypes.object
};

export default function DetailPhone(props) {

    const displayDialog = props.displayDialog
    const setDisplayDialog = props.setDisplayDialog
    const selectedPhone = props.phone

    //************************************************ */
    //functions
    //************************************************ */
    const renderPhoneDialogContent = () => {
        if (selectedPhone) {
            return (
                <div className="p-grid" style={{ fontSize: '16px', padding: '20px' }}>
                    <div className="p-col-12" style={{ textAlign: 'center' }}>
                        {/* view phone image */}
                        <img src={`https://github.com/guidesmiths/interview-code-challenges/blob/master/react/phone-catalogue/images/${selectedPhone.imageFileName}?raw=true`} style={{ width: '160px', height: '200px' }} alt={selectedPhone.name} />
                    </div>

                    {/* details phone */}
                    <div className="p-col-6">Name: </div>
                    <div className="p-col-6">{selectedPhone.name}</div>

                    <div className="p-col-6">Maker: </div>
                    <div className="p-col-6">{selectedPhone.manufacturer}</div>

                    <div className="p-col-6">Color: </div>
                    <div className="p-col-6">{selectedPhone.color}</div>

                    <div className="p-col-6">Price: </div>
                    <div className="p-col-6">{selectedPhone.price} €</div>

                    <div className="p-col-6">Screen: </div>
                    <div className="p-col-6">{selectedPhone.screen}</div>

                    <div className="p-col-6">CPU: </div>
                    <div className="p-col-6"> {selectedPhone.processor}</div>

                    <div className="p-col-6">RAM: </div>
                    <div className="p-col-6">{selectedPhone.ram} GB</div>


                    <div className="p-col-12">
                        <Accordion>
                            <AccordionTab header="Description:" >
                                {selectedPhone.description}
                            </AccordionTab>
                        </Accordion>
                    </div>
                </div>
            );
        }
        else {
            return null;
        }
    };

    return (

        <div>
            <Dialog header="Phone Details" width="300px" visible={displayDialog} modal={true} onHide={() => setDisplayDialog(false)}>
                {renderPhoneDialogContent()}
            </Dialog>
        </div>
    )
}

