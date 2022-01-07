import React, { useState, useEffect } from 'react'
import MainLayout from "../../hoc/Layout";
import moment from 'moment';
import Actionbar from "../../components/Actionbar";
import CalendarTable from "../../components/CalendarTable";
import CalendarMenu from "../../components/CalendarMenu";

const Calendar = () => {
    const [calendar, setCalendar] = useState([]);
    const [value, setValue] = useState(moment);

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
            <CalendarMenu value={value} setValue={setValue} />
            <CalendarTable calendar={calendar} />
            <Actionbar />
        </MainLayout>
    )
}

export default Calendar