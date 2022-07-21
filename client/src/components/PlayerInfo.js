import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import Skeleton from "../components/Skeleton"
import Auth from '../utils/auth';

function PlayerInfo() {
  const { username: userParam } = useParams();
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam }
  });
  const [apiData, setApiData] = useState(null);
  const [apiLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.chess.com/pub/leaderboards')
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response;
    })
    .then(apiData => {
      setApiData(apiData);
      // console.log(apiData.live_blitz[0].name)
    })
    .catch(error => {
      console.error('error fetching', error);
      setError(error);
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  if(apiLoading) return <Skeleton/>;
  if (error) return "Error";



  //////////////

  const user = data?.me || data?.user || {};

    // navigate to personal profile page if username is the logged-in user's
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
      return <Navigate to="/profile" />;
    }
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    // What happens if you navigate to /profile and you aren't logged in?
    if (!user?.username) {
      return (
        <h4>
          You need to be logged in to see this page. Use the navigation links above to sign up or log in!
        </h4>
      );
    }

  return (
      <div>
        <h2>
          {user.username}
        </h2>
        <h5>{apiData.live_blitz[0].name}</h5>
      </div>
  );
}

export default PlayerInfo;