import React, { useState, useEffect } from 'react';
import BookAppBar from '../components/BookAppBar';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import '../App.css';

import PreviewHeader from '../components/PreviewHeader';
import PreviewFooter from '../components/PreviewFooter';

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
      <div className="Flex-Col">
        <PreviewHeader />
        <PreviewFooter />
      </div>
    </div>
  );
};

export default BookInfo;
