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
      <div style={{ paddingLeft: '400px', backgroundColor: '#f5f7fa' }}>
        <h1>Compete PVP</h1>
        <div>
          {/* <ul>
            {pizzas.map((pizza) => (
              <li key={pizza.id}>
                <h3>
                  {pizza.pizzaName}
                </h3>
                <p>{pizza.size}</p>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </>
  );
}

export default Compete;