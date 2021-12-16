import React from 'react'
import { Navigate } from 'react-router-dom'
import authHeader from "../services/auth-header";

function RequireAuth({ children }) {
    const auth = !!authHeader().Authorization;
    return auth ? children : <Navigate to="/login" />;
}

export default RequireAuth;
