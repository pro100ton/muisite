import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import About from "./components/pages/About";
import Work from "./components/pages/Work";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route path="/" element={<Navigate to="/work" />}/>
                <Route path="work" element={<Work/>}/>
                <Route path="about" element={<About/>}/>
                <Route path="life" element={<About/>}/>
                <Route path="contacts" element={<About/>}/>
            </Routes>
        </React.StrictMode>
    </BrowserRouter>
);
