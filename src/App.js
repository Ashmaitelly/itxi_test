import './App.css';
import * as React from 'react';
import SignIn from './views/SignIn';
import AuthorSearch from './views/AuthorSearch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/search" element={<AuthorSearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
