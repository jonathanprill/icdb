import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/material/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { LogosClose } from '../components/Icons';
import LoginCard from '../components/LoginCard';


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
      <LoginCard/>
    </div>
  );
}

export default Login;