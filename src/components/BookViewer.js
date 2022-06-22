import React, { useEffect, useState, useRef } from 'react';

const BookViewer = ({ id }) => {
  return (
    <iframe
      src={`https://books.google.com.lb/books?id=${id}&pg=PP5&output=embed`}
      style={{ height: '70vh' }}
    ></iframe>
  );
};

export default BookViewer;
