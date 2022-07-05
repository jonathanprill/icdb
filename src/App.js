import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loading';
import Landing from './pages/Landing';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  })

  return (
    <>
      {isLoading === true ? <Loading /> : <Landing />}
    </>
  );
}

export default App;