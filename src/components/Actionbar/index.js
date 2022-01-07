import React, { useState } from 'react';
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import AddRoomForm from "../AddRoomForm";

const Actionbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const onHide = () => {
        setIsOpen(false)
    }

    const leftContents = (
        <Button label="Add Room" icon="pi pi-plus" className="p-mr-2 p-button-text" onClick={() => setIsOpen(true)} />
    );

    const rightContents = (
        <Button label="Add Reservation" icon="pi pi-plus" className="p-mr-2 p-button-success" />
    );

    return (
        <>
            <Dialog header="Add room" visible={isOpen} style={{ minWidth: '50vw', maxWidth: '90vw' }} onHide={() => onHide('dialog')}>
                <AddRoomForm />
            </Dialog>
            <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
                <Toolbar left={leftContents} right={rightContents} />
            </div>
        </>
    );
}

export default Actionbar