import './App.css';
import * as React from 'react';
import SignIn from './views/SignIn';
import AuthorSearch from './views/AuthorSearch';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookInfo from './views/BookInfo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/search" element={<AuthorSearch />} />
          <Route path="/book" element={<BookInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
