import React from 'react';
import { useEffect } from 'react';

const SignIn = () => {
  const callbackResponse = (response) => {
    console.log(response.credential);
  };

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.CLIENT_ID,
      callback: callbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById('google-signin'), {
      theme: 'outline',
      size: 'large',
    });
  }, []);
  return (
    <div>
      <div id="google-signin" />
    </div>
  );
};

export default SignIn;
