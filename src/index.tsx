import React from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"
import Work from "./components/pages/work/Work";
import About from "./components/pages/about/About";
import Life from "./components/pages/life/Life";
import Contacts from "./components/pages/contacts/Contacts";

const rootId = document.getElementById('root');
if (rootId === null) throw new Error('Root container missing in index.html');

const root = createRoot(rootId);
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
