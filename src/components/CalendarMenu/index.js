import React from "react";
import { MegaMenu } from 'primereact/megamenu';

const CalendarMenu = ({ value, setValue }) => {

    const items = [
        {
            icon: 'pi pi-angle-left',
            command: () => { setValue(value.clone().subtract(1, "year")) }
        },
        { label: value.year() },
        {
            icon: 'pi pi-angle-right',
            command: () => { setValue(value.clone().add(1, "year")) }
        },
        {
            label: 'Jan',
            command: () => { setValue(value.clone().month(0)) }
        },
        {
            label: 'Feb',
            command: () => { setValue(value.clone().month(1)) }
        },
        {
            label: 'Mar',
            command: () => { setValue(value.clone().month(2)) }
        },
        {
            label: 'Apr',
            command: () => { setValue(value.clone().month(3)) }
        },
        {
            label: 'May',
            command: () => { setValue(value.clone().month(4)) }
        },
        {
            label: 'Jun',
            command: () => { setValue(value.clone().month(5)) }
        },
        {
            label: 'Jul',
            command: () => { setValue(value.clone().month(6)) }
        },
        {
            label: 'Aug',
            command: () => { setValue(value.clone().month(7)) }
        },
        {
            label: 'Sep',
            command: () => { setValue(value.clone().month(8)) }
        },
        {
            label: 'Oct',
            command: () => { setValue(value.clone().month(9)) }
        },
        {
            label: 'Nov',
            command: () => { setValue(value.clone().month(10)) }
        },
        {
            label: 'Dec',
            command: () => { setValue(value.clone().month(11)) }
        },
    ];

    return (
        <MegaMenu model={items} />
    )
}

export default CalendarMenu