import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Life from "./components/pages/Life";
import Contacts from "./components/pages/Contacts";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<Navigate to="/work" />}/>
                <Route path="work" element={<Work/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="life" element={<Life/>}/>
                <Route path="contacts" element={<Contacts/>}/>
            </Routes>
        </React.StrictMode>
    </BrowserRouter>
);
