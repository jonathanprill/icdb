import React, { useState, useEffect } from 'react';
import './App.css';
import Loading from './components/Loading';
import MyRouter from './Router';

function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000);
  })

  return (
    <>
      {isLoading === true ? <Loading /> : <MyRouter />}
    </>
  );
}

export default App;