import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/material/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { LogosClose } from '../components/Icons';


function Login() {
  return (
    < div style={{ backgroundColor: '#f5f7fa' }}>
      <Link sx={{
        maxWidth: 90,
        mx: 'auto', // margin left & right
        display: 'flex',
        flexDirection: 'column',
      }} href="/">
        <LogosClose style={{ margin: '20px auto -20px auto', height: "5em", width: '5em' }} />
      </Link>
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
              <b>Welcome Back!</b>
            </Typography>
            <Typography level="body2">Sign in to continue</Typography>
          </div>
          <TextField
            // html input attribute
            name="email"
            type="email"
            placeholder="johndoe@email.com"
            // pass down to FormLabel as children
            label="Email"
          />
          <TextField
            name="password"
            type="password"
            placeholder="password"
            label="Password"
          />
          <Button
            sx={{
              mt: 1, // margin top
            }}
          >
            Log in
          </Button>
          <Typography
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don't have an account?
            <Link sx={{ px: '5px' }} href="/sign-up">Sign up</Link>
          </Typography>

        </Sheet>
      </CssVarsProvider>
    </div>
  );
}

export default Login;