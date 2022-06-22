import React, { useState, useEffect } from 'react';
import BookAppBar from '../components/BookAppBar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios';
import BookCard from '../components/BookCard';
import Grid from '@mui/material/Grid';

export default function AuthorSearch() {
  //search state
  const [search, setSearch] = useState('');
  //books array state
  const [books, setBooks] = useState([]);
  //set search on load
  useEffect(() => {
    setSearch(localStorage.getItem('search') || '');
  }, []);
  //get books from API with useffect
  useEffect(() => {
    if (search !== '') {
      localStorage.setItem('search', search);
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=inauthor:"${search.replace(
            ' ',
            '+'
          )}"&filter=free-ebooks` +
            `&key=${process.env.REACT_APP_API_KEY}` +
            '&orderBy=newest&maxResults=40'
        )
        .then((res) => {
          setBooks(res.data.items);
          console.log(res.data.items);
        })
        .catch((err) => console.log(err));
    } else {
      setBooks([]);
    }
  }, [search]);

  return (
    <div className="Flex-Col">
      <BookAppBar />
      <Box mt={2} mb={2}>
        <TextField
          id="outlined-basic"
          label="Author Search"
          variant="outlined"
          style={{ width: '70%' }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>

      <Grid container spacing={2}>
        {books &&
          books.map((book) => (
            <Grid item key={book.etag}>
              <BookCard data={book} key={book.id} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
}
