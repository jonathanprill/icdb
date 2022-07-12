import React from 'react';
import SideNav from '../components/SideNav';
import TopNav from "../components/TopNav";
function Play() {
  return (
    <>
      <TopNav />
      <SideNav />
      <div style={{ paddingLeft: '400px', backgroundColor: '#f5f7fa' }}>
        <h1>Play</h1>
      </div>
    </>
  );
}

export default Play;