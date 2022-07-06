import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataTable from "./pages/Leaderboard";
import Reports from './pages/Reports';
import Products from './pages/Products';
import Login from './pages/Login';

function Landing() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<DataTable />} />
                <Route path='/reports' element={<Reports />} />
                <Route path='/products' element={<Products />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
    );
}

export default Landing;