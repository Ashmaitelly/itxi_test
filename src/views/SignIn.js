import React, { useEffect, useCallback } from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
  //navigation hook
  const navigate = useNavigate();
  //set user
  const callbackResponse = useCallback(
    (response) => {
      localStorage.setItem('user', response.credential);
      navigate('/search');
    },
    [navigate]
  );

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/search');
    }
    /* global google */
    try {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_CLIENT_ID,
        callback: callbackResponse,
      });
      google.accounts.id.renderButton(
        document.getElementById('google-signin'),
        {
          theme: 'outline',
          size: 'large',
        }
      );
    } catch (err) {
      navigate(0);
    }
  }, [callbackResponse, navigate]);

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
