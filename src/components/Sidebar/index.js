import React from 'react';
import { Sidebar } from 'primereact/sidebar';

const SidebarMenu = ({ visible, setVisible }) => {

    return (
        <div>
            <div className="card">
                <Sidebar visible={visible} onHide={() => setVisible(false)}>
                    <h3>Left Sidebar</h3>
                </Sidebar>
            </div>
        </div>
    )
}

export default SidebarMenu;