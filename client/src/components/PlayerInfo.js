import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Skeleton from "../components/Skeleton"
import Auth from '../utils/auth';

function PlayerInfo() {


  const { username: userParam } = useParams();
  const { data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });
  const [apiData, setApiData] = useState(null);
  const [apiLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const user = data?.me || data?.user || {};

  useEffect(() => {
    fetch('https://api.chess.com/pub/player/' + user.username)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response;
      })
      .then(apiData => {
          setApiData(apiData);
      })
      .catch(error => {
        console.error('error fetching', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, [user.username])

  if (apiLoading) return <Skeleton />;
  if (error) return "Error";

  return (
    <div>
      <h2>{user.username}</h2>
      {/* <h4>{apiCountryData.name}</h4> */}
      <h5>Name: {apiData.name}</h5>
      <img src={apiData.avatar} alt="Profile" />

    </div>
  );
}

export default PlayerInfo;