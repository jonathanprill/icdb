import React from 'react';
import SideNav from '../components/SideNav';
import TopNav from "../components/TopNav";
import Auth from '../utils/auth';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


function Dashboard() {
    return (
        <>
            <TopNav />
            <SideNav />
            <div style={{ padding: '50px 300px', backgroundColor:'#f5f7fa' }}>
                {Auth.loggedIn() ? (
                    <button>User is logged in Here is there dashboard</button>
                ) : (
                    <div>
                        <h3>User Not Logged In</h3>
                        <Link to="/login">Login Here</Link>
                    </div>
                )}
            </div>
        </>
    );
}

export default Dashboard;