import React from 'react'
import { Routes, Route } from "react-router-dom";
import RequireAuth from "../routes/auth-route";

// ELEMENTS
import Home from "../containers/Home"
import Dashboard from '../containers/Dashboard'
import SignIn from '../containers/SignIn'
import SignUp from '../containers/SignUp'

const RoutesProvider = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route
            path="/dashboard"
            element={
                <RequireAuth>
                    <Dashboard />
                </RequireAuth>
            }
        />
    </Routes>
)

export default RoutesProvider

