import React from 'react';
import SideNav from '../components/SideNav';
import TopNav from "../components/TopNav";
function Compete() {
  return (
    <>
      <TopNav />
      <SideNav />
      <div style={{ paddingLeft: '400px', backgroundColor: '#f5f7fa' }}>
        <h1>Compete PVP</h1>
      </div>
    </>
  );
}

export default Compete;