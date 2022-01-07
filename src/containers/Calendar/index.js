import React, { useState, useEffect } from 'react'
import MainLayout from "../../hoc/Layout";
import { MegaMenu } from 'primereact/megamenu';
import moment from 'moment';

const CalendarContainer = () => {
    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment);

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

    useEffect(() => {
        let days = [];
        let daysInMonth = value.clone().daysInMonth();
        while(daysInMonth) {
            days.push(value.clone().date(daysInMonth));
            daysInMonth--;
        }
        setCalendar(days.reverse());
    }, [value])

    return (
        <MainLayout>
            <MegaMenu model={items} />
            <table>
                <thead>
                    <tr>
                        {calendar.map((day) => {
                            return (
                                <React.Fragment key={day.format("MM/DD")}>
                                    <th>
                                        <div>{day.format("dddd").substring(0, 2)}</div>
                                        <div>{day.format("D")}</div>
                                    </th>
                                </React.Fragment>
                            )
                        })}
                    </tr>
                </thead>
            </table>
        </MainLayout>
    )
}

export default CalendarContainer