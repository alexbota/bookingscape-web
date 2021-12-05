import React from 'react';
import { render } from "react-dom";

// STYLES
import 'primereact/resources/themes/lara-light-teal/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './index.css';

// ROUTING
import { BrowserRouter } from "react-router-dom";
import RoutesProvider from "./routes";

render(
    <BrowserRouter>
        <RoutesProvider />
    </BrowserRouter>,
    document.getElementById('root')
);

