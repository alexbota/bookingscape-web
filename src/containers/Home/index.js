import React from 'react'
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <h1>Welcome to Bookingscape</h1>
            <Button label="Login" onClick={() => navigate("/login")} />
            <Button label="Register" onClick={() => navigate("/register")} />
        </>
    )
}

export default Home