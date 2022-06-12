import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function SignIn() {
  const callbackResponse = (response) => {
    console.log(response.credential);
  };

  React.useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        '943775489068-1t3qu1qjrchtgbontkako5u51020ofid.apps.googleusercontent.com',
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
