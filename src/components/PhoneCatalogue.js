import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'primereact/button'
import { Panel } from 'primereact/panel'
import { DataView } from 'primereact/dataview'

// Component Phone Details
import DetailPhone from './DetailPhone'

//Actions
import { getAllPhones } from '../actions'


// loading image
import loading from '../img/loading-spinner.svg';


export default function PhoneCatalogue() {

    //get state of redux
    const phones = useSelector(state => state.phones);

    const dispatch = useDispatch();

    const [selectedPhone, setSelectedPhone] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        //invoque action
        dispatch(getAllPhones());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    //************************************************ */
    //functions
    //************************************************ */
    const itemTemplate = (item) => {

        if (!item) {
            return;
        }
        return renderGridItem(item);
    }



    /**
     * Render item phone
     * @param {Object} item 
     */
    const renderGridItem = (item) => {
        return (
            <div style={{ padding: '.5em' }} className="p-col-12 p-md-6">
                <Panel header={item.name} style={{ textAlign: 'center' }}>

                    {/* view phone image */}
                    <img src={`https://github.com/guidesmiths/interview-code-challenges/blob/master/react/phone-catalogue/images/${item.imageFileName}?raw=true`} style={{ width: '140px', height: '160px' }} alt={item.name} />

                    <div >{item.manufacturer}</div>
                    <div >Color: {item.color}</div>
                    <div >Price: {item.price} €</div>

                    <Button icon="pi pi-search" onClick={(e) => { setSelectedPhone(item); setVisible(true) }}></Button>
                </Panel>
            </div>
        )
    }

    return (
        <div className="p-grid">
            <div className="p-col-12">
                <div className="card">
                    <h1>Phone Catalogue</h1>

                    {/* Grid with the list of telephones */}
                    <DataView value={phones.phoneList} layout={'grid'} itemTemplate={itemTemplate}></DataView>

                    {/* show details phone selected */}
                    <DetailPhone displayDialog={visible} setDisplayDialog={() => setVisible()} phone={selectedPhone} />

                    {/* Display a spinner or placeholder component while the API request is ongoing */}
                    <div style={{ position: 'absolute', top: 'calc(50% - 100px)', left: 'calc(50% - 100px)', visibility: `${(phones.pending) ? 'visible' : 'hidden'}` }}><img alt='' src={loading} /></div>

                </div>
            </div>
        </div>
    );
}

