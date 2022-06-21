import React, { useEffect } from 'react';
import BookAppBar from '../components/BookAppBar';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const BookInfo = () => {
  //search params
  const [searchParams] = useSearchParams();
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${searchParams.get(
          'id'
        )}` + `/?key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        console.log(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <BookAppBar />
      BookInfo
    </div>
  );
};

export default BookInfo;
