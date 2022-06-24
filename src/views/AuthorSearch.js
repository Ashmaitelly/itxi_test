import React, { useState, useEffect } from 'react';
import BookAppBar from '../components/BookAppBar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios';
import BookCard from '../components/BookCard';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

export default function AuthorSearch() {
  //search state
  const [search, setSearch] = useState('');
  //books array state
  const [books, setBooks] = useState([]);
  //page numbers
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState([]);
  const [bIndex, setBIndex] = useState(0);
  const [clicked, setClicked] = useState(1);
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
            '&orderBy=newest&maxResults=40' +
            `&startIndex=${bIndex}`
        )
        .then((res) => {
          setBooks(res.data.items);
          setTotal(res.data.totalItems);
        })
        .catch((err) => console.log(err));
    } else {
      setBooks([]);
    }
  }, [search, bIndex, total]);
  //set pages useEffect
  useEffect(() => {
    setClicked(1);
    let temp = [];
    for (let i = 1; i <= Math.ceil(total / 40); i++) {
      temp.push(i);
    }
    setPages(temp);
  }, [total]);

  return (
    <div className="Flex-Col">
      <BookAppBar />
      <Box mt={2} mb={2}>
        <TextField
          id="outlined-basic"
          label="Search for an author…"
          variant="outlined"
          style={{ width: '70%' }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent="center"
        alignItems="flex-start"
      >
        {books &&
          books.map((book) => (
            <Grid item key={book.etag}>
              <BookCard data={book} key={book.id} />
            </Grid>
          ))}
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {/* map here */}
        {pages.map((page, index) => (
          <Typography
            key={index}
            className="Clickable"
            variant="h6"
            mx={1}
            my={2}
            style={{ color: clicked === page ? '#00f' : '#000' }}
            onClick={() => {
              setBIndex(page * 40 - 40);
              setClicked(page);
              window.scrollTo(0, 0);
            }}
          >
            {`${page}`}
          </Typography>
        ))}
      </Grid>
    </div>
  );
}
