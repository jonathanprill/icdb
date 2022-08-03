import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import SideNav from '../components/SideNav';
import TopNav from "../components/TopNav";


function Compete() {

  ////////
  const [pizzaList, setPizzaList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/pizzas", {"Access-Control-Allow-Origin": "http://localhost:3001"}).then((response) => {
      console.log(response);
    });
  }, []);
 

  /////////////

  return (
    <>
      <TopNav />
      <SideNav />
      <div style={{ paddingLeft: '400px' }}>
        <h1>Compete</h1>
       
          

      </div>
    </>
  );
}

export default Compete;