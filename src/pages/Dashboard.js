import React from 'react';
import SideNav from '../components/SideNav';
import TopNav from "../components/TopNav";
import Auth from '../utils/auth';
import Typography from '@mui/material/Typography';
import LoginCard from '../components/LoginCard';

function Dashboard() {
    return (
        <>
            <TopNav />
            <SideNav />
            <div style={{ paddingLeft: '250px' }}>
                {Auth.loggedIn() ? (
                    <button>User is logged in Here is there dashboard</button>
                ) : (
                    <div>
                        <LoginCard></LoginCard>
                    </div>
                )}
            </div>
        </>
    );
}

export default Dashboard;