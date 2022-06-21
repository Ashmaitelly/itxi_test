import React, { useState, useEffect } from 'react';
import BookAppBar from '../components/BookAppBar';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import '../App.css';

import PreviewInfo from '../components/PreviewInfo';

const BookInfo = () => {
  //search params
  const [searchParams] = useSearchParams();
  const [book, setBook] = useState({});
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${searchParams.get('id')}`
      )
      .then((res) => {
        console.log(res.data);
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(book);

  return (
    <div>
      <BookAppBar />
      <div className="Flex-Row">
        <PreviewInfo />
        <Box
          sx={{
            marginTop: 1,
            marginLeft: 1,
            width: '60vw',
            height: '100vh',
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        >
          Hello
        </Box>
      </div>
    </div>
  );
};

export default BookInfo;
