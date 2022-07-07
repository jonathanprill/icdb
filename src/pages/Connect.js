import React from 'react';
import SideNav from '../components/SideNav';
import TopNav from "../components/TopNav";
function Connect() {
  return (
    <>
      <TopNav />
      <SideNav />
      <div style={{ paddingLeft: '400px' }}>
        <h1>Connect</h1>
      </div>
    </>
  );
}

export default Connect;