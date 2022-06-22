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
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes/${searchParams.get('id')}`
      )
      .then((res) => {
        setBook(res.data);
        console.log(res.data);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <BookAppBar />

      {loaded && (
        <div className="Flex-Col">
          <PreviewHeader
            title={book.volumeInfo.title}
            language={book.volumeInfo.language}
            authors={book.volumeInfo.authors}
            publisher={book.volumeInfo.publisher}
          />
          <PreviewFooter
            pages={book.volumeInfo.pageCount}
            epub={book.accessInfo.epub.downloadLink}
            pdf={book.accessInfo.pdf.downloadLink}
          />
        </div>
      )}
    </div>
  );
};

export default BookInfo;
