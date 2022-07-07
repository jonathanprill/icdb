import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Leaderboard from "./pages/Leaderboard";
import Connect from './pages/Connect';
import Compete from './pages/Compete';
import Login from './pages/Login';
import SignUp from "./pages/SignUp";
import School from "./pages/School";
import Play from "./pages/Play";
import Dashboard from "./pages/Dashboard";

function Landing() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Leaderboard />} />
                <Route path='/school' element={<School />} />
                <Route path='/connect' element={<Connect />} />
                <Route path='/compete' element={<Compete />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/play' element={<Play />} />
                <Route path='/login' element={<Login />} />
                <Route path='/sign-up' element={<SignUp />} />
            </Routes>
        </Router>
    );
}

export default Landing;