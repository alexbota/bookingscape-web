import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from "./Auth";

function RequireAuth({ children }) {
    const auth = useAuth(children);
    return auth ? children : <Navigate to="/login" />;
}

export default RequireAuth;
