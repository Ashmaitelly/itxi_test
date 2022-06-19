import React from 'react';
import BookAppBar from '../components/BookAppBar';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import axios from 'axios';
import BookCard from '../components/BookCard';
import Grid from '@mui/material/Grid';

export default function AuthorSearch() {
  //search state
  const [search, setSearch] = React.useState('');
  //books array state
  const [books, setBooks] = React.useState([]);
  //get books from API with useffect
  React.useEffect(() => {
    if (search !== '') {
      setSearch(search.replace(' ', '+'));
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=inauthor:"${search}"&filter=free-ebooks` +
            `&key=${process.env.REACT_APP_API_KEY}` +
            '&maxResults=40'
        )
        .then((res) => console.log(res.data.items))
        .catch((err) => console.log(err));
    } else {
      setBooks([]);
    }
  }, [search]);

  return (
    <div>
      <BookAppBar />
      <Box mt={2} mb={2}>
        <TextField
          id="outlined-basic"
          label="Author Search"
          variant="outlined"
          style={{ width: '70%' }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>

      <Grid container spacing={2} sx={{ margin: '0 auto' }}>
        {/* 5 items start */}
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        <Grid item>
          <BookCard />
        </Grid>
        {/* item end */}
      </Grid>
    </div>
  );
}
