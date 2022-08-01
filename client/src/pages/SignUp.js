import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations'
import Auth from '../utils/auth';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/material/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { LogosClose, LogosAltair } from '../components/Icons';

function SignUp() {
    const [formState, setFormState] = useState({ username: '', email: '', city: '', password: '' });

    // the useMutation() Hook creates and prepares a JavaScript function that wraps around our mutation code and returns it to us. In our case, it returns in the form of the addUser function that's returned. We also get the ability to check for errors.
    const [addUser, { error }] = useMutation(ADD_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
    
        setFormState({
            ...formState,
            [name]: value,
        });
    };
    // functionality for capturing form field data from a user and storing it in state using the useState() Hook from React
    

    // submit form (notice the async!)
    const handleFormSubmit = async event => {
        event.preventDefault();

        // use try/catch instead of promises to handle errors
        try {
            // execute addUser mutation and pass in variable data from form
            const { data } = await addUser({
                variables: { ...formState }
            });
            console.log(data);


            // take the token and set it to localStorage
            // to use it to check if user is logged in when other component are going to be used
            Auth.login(data.addUser.token);

        } catch (e) {
            console.error(e);
        }
    };




    return (
        <div>
            <Link sx={{
                maxWidth: 90,
                mx: 'auto', // margin left & right
                display: 'flex',
                flexDirection: 'column',
            }} href="/">
                <LogosAltair style={{ margin: '40px auto -20px auto', height: "5em", width: '5em' }} />
            </Link>
            {error && <p className='failed text-color'>Sign in failed, please try again.</p>}
            <CssVarsProvider>
                <Sheet
                    sx={{
                        maxWidth: 400,
                        mx: 'auto', // margin left & right
                        my: 5, // margin top & botom
                        py: 3, // padding top & bottom
                        px: 2, // padding left & right
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 4,
                        borderRadius: 'sm',
                        boxShadow: 'md',
                    }}
                    
                >
                    <div>
                        <Typography level="h4" component="h1">
                            <b>Welcome!</b>
                        </Typography>
                        <Typography level="body2">Sign Up</Typography>
                    </div>
                    <TextField
                        // html input attribute
                        name="email"
                        type="email"
                        placeholder="johndoe@email.com"
                        // pass down to FormLabel as children
                        label="Email"
                        value={formState.email}
                        onChange={handleChange}
                    />
                    <TextField
                        // html input attribute
                        name="username"
                        type="username"
                        placeholder="GMHikaru"
                        // pass down to FormLabel as children
                        label="Chess.com Username"
                        value={formState.username}
                        onChange={handleChange}
                    />
                    <TextField
                        // html input attribute
                        name="city"
                        type="city"
                        placeholder="Austin"
                        // pass down to FormLabel as children
                        label="City"
                        value={formState.city}
                        onChange={handleChange}
                    />
                    <TextField
                        name="password"
                        type="password"
                        placeholder="password123"
                        label="Password"
                        value={formState.password}
                        onChange={handleChange}
                    />
                    <Button
                        sx={{
                            mt: 1, // margin top
                        }}
                        onClick={handleFormSubmit}
                    >
                        Sign Up
                    </Button>
                </Sheet>
            </CssVarsProvider>
        </div>
    );
}

export default SignUp;