import React from "react";
import {StyledTable} from "./styled";

const CalendarTable = ({ calendar }) => {
    return (
        <div style={{ overflowX: "scroll" }}>
            <StyledTable>
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
                <tbody>
                <tr>

                </tr>
                </tbody>
            </StyledTable>
        </div>
    )
}

export default CalendarTable