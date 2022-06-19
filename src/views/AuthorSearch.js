import React from 'react';
import BookAppBar from '../components/BookAppBar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function AuthorSearch() {
  return (
    <div>
      <BookAppBar />
      <Box mt={2}>
        <TextField
          id="outlined-basic"
          label="Author Search"
          variant="outlined"
        />
      </Box>
    </div>
  );
}
