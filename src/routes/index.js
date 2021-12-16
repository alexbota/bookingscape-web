import React from 'react'
import { Routes, Route } from "react-router-dom";
import RequireAuth from "../routes/auth-route";

// ELEMENTS
import Home from "../containers/Home"
import Dashboard from '../containers/Dashboard'
import Login from '../containers/Login'

const RoutesProvider = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
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

