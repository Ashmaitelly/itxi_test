import React, { useEffect } from 'react';
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

  useEffect(() => {
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
    <Container component="main" maxWidth="xs">
      <Typography variant="h3" sx={{ marginTop: 4 }}>
        Book App
      </Typography>
      <Box
        sx={{
          marginTop: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: 1,
          borderRadius: '16px',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        }}
      >
        <Typography variant="h4">Sign In</Typography>
        <Avatar sx={{ m: 2, bgcolor: 'secondary.main' }}></Avatar>
        <div id="google-signin" style={{ marginBottom: '10px' }} />
      </Box>
    </Container>
  );
}
