import React, { useEffect, useState, useRef } from 'react';

const BookViewer = ({ id }) => {
  // Initialize loaded state as false
  const [loaded, setLoaded] = useState(false);
  const canvasRef = useRef();
  // Create alert message if book not found in Google Database
  function alertNotFound() {
    alert('could not embed the book!');
  }
  // Add a Google Books script tag and event listener if the tag has loaded
  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://www.google.com/books/jsapi.js';
    scriptTag.addEventListener('load', () => setLoaded(true));
    scriptTag.id = 'google-script';
    document.body.appendChild(scriptTag);
  }, []);
  useEffect(() => {
    if (!loaded) return;
    else {
      if (window.viewer) {
        let viewer = new window.google.books.DefaultViewer(canvasRef.current);
        viewer.load(id, alertNotFound);
      } else {
        window.google.books.load();
        window.google.books.setOnLoadCallback(() => {
          let viewer = new window.google.books.DefaultViewer(canvasRef.current);
          window.viewer = viewer;
          viewer.load(id, alertNotFound);
        });
      }
    }
  }, [loaded]);

  return (
    <div>
      {loaded ? (
        <div>
          <div ref={canvasRef} id="viewerCanvas"></div>
        </div>
      ) : (
        'Script not loaded'
      )}
    </div>
  );
};

export default BookViewer;
