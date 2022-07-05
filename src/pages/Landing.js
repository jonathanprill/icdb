import React from "react";
import SideNav from '../components/SideNav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DataTable from "../components/Table";
import Reports from './Reports';
import Products from './Products';
import TopNav from "../components/TopNav";

function Landing() {
    return (
        <Router>
            <TopNav/>
            <SideNav />
            <Routes>
                <Route path='/' element={<DataTable />} />
                <Route path='/reports' element={<Reports />} />
                <Route path='/products' element={<Products />} />
            </Routes>
        </Router>
    );
}

export default Landing;