import React from 'react'
import { Routes, Route } from "react-router-dom";
import RequireAuth from "../routes/auth-route";

// ELEMENTS
import Home from "../containers/Home"
import SignIn from '../containers/SignIn'
import SignUp from '../containers/SignUp'
import CalendarContainer from '../containers/Calendar'

const RoutesProvider = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route
            path="/calendar"
            element={
                <RequireAuth>
                    <CalendarContainer />
                </RequireAuth>
            }
        />
    </Routes>
)

export default RoutesProvider

