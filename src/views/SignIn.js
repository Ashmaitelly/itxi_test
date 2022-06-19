import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function SignIn() {
  //navigation hook
  const navigate = useNavigate();
  //set user
  const callbackResponse = (response) => {
    localStorage.setItem('user', response.credential);
    navigate('/search');
  };

  React.useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/search');
    }
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_CLIENT_ID,
      callback: callbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById('google-signin'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography variant="h3">Book App</Typography>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
          <div id="google-signin" />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
