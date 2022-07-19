import React, { useEffect, useState } from 'react';
import SideNav from '../components/SideNav';
import TopNav from "../components/TopNav";
function Play() {

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch('https://api.github.com/users/octocat/repos')
  //   .then(response => {
  //     if (response.ok) {
  //       return response.json()
  //     }
  //     throw response;
  //   })
  //   .then(data => {
  //     setData(data);
  //     console.log(data[1].html_url)
  //   })
  //   .catch(error => {
  //     console.error('error fetching', error);
  //     setError(error);
  //   })
  //   .finally(() => {
  //     setLoading(false)
  //   })
  // }, [])

  // if(loading) return "loading";
  // if (error) return "Error";

  return (
    <>
      <TopNav />
      <SideNav />
      <div style={{ paddingLeft: '400px' }}>
        <h1>Play</h1>
       
          

      </div>
    </>
  );
}

export default Play;