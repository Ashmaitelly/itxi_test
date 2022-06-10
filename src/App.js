import './App.css';
import React from 'react';
import { useEffect } from 'react';

function App() {
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
    <div className="App">
      <div id="google-signin" />
    </div>
  );
}

export default App;
