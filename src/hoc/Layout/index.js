import React, { useState } from 'react'
import Header from '../../components/Header'
import SidebarMenu from "../../components/Sidebar";

export default function Layout({ children }) {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <Header setVisible={setVisible} />
            <SidebarMenu visible={visible} setVisible={setVisible} />
            <div>{children}</div>
        </>
    )
}