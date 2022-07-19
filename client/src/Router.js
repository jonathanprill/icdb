import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Leaderboard from "./pages/Leaderboard";
import Connect from './pages/Connect';
import Compete from './pages/Compete';
import Login from './pages/Login';
import SignUp from "./pages/SignUp";
import School from "./pages/School";
import Play from "./pages/Play";
import Dashboard from "./pages/Dashboard";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
    uri: '/graphql',
});

// retrieve token from localStorage and set the HTTP request headers of every request to include the token
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

// every request retrieves the token and sets the request headers before making the request to the API
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function MyRouter() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Routes>
                    <Route path='/' element={<Connect />} />
                    <Route path='/connect' element={<Connect />} />
                    <Route path='/school' element={<School />} />
                    <Route path='/leaderboard' element={<Leaderboard />} />
                    <Route path='/compete' element={<Compete />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/play' element={<Play />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/sign-up' element={<SignUp />} />
                </Routes>
            </Router>
        </ApolloProvider>
    );
}

export default MyRouter;