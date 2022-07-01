import React from "react";
import Navbar from '../components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Reports from './Reports';
import Products from './Products';

function Landing() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/reports' element={<Reports />} />
                <Route path='/products' element={<Products />} />
            </Routes>
        </Router>
    );
}

export default Landing;