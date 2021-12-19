import React, { useRef } from 'react';
import Logo from '../../assets/logo.png'
import { Button } from 'primereact/button'
import { Menu } from 'primereact/menu';

const Header = ({ setVisible }) => {
    const menu = useRef(null);
    const items = [
        {
            label: 'Reset Password',
            icon: 'pi pi-lock-open',
        },
        {
            label: 'Logout',
            icon: 'pi pi-sign-out',
        }
    ]
    return (
        <div style={{backgroundColor: "#f8f9fa", height: "54px" }} className="p-d-flex p-jc-between p-ai-center p-px-3">
            <div className="p-d-flex">
                <img alt="logo" src={Logo} onError={(e) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="p-mr-2" />
                <Button onClick={() => {setVisible(true)}} icon="pi pi-bars" className="p-button-text" />
            </div>
            <Menu model={items} popup ref={menu} id="popup_menu" />
            <Button icon="pi pi-user" onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup className="p-button-rounded" />
        </div>
    );
}

export default Header;