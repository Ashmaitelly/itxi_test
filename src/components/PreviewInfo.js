import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const PreviewInfo = ({ data }) => {
  return (
    <Box
      sx={{
        marginTop: 1,
        width: '40vw',
        height: '100vh',
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Typography variant="h6" m={1}>
        Bismark Archapelligo
      </Typography>
      <Typography m={1}>by Author</Typography>
      <Box
        component="img"
        sx={{
          maxWidth: { xs: 200 },
          maxHeight: { xs: 200 },
        }}
        alt="The house from the offer."
        src="http://books.google.com/books/content?id=2rNDFc2kgUsC&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE72onG7D5vk_ZC7EdpP64E81YCxemIeh1nolEJh3fR-7K-dNJSvGx7A6SrDMkl73TIs23DfjZVvcKqZpidq4p0eI6-Hx3ojTwawJ72Y3dWZFi4lsJrvcEoC8vrSpMuWkZJWW1Is3&source=gbs_api"
      />
      <Typography m={1}>Page Count: 166</Typography>
      <Typography m={1}>Publisher: United press publishing</Typography>
      <Typography m={1}>Language</Typography>
    </Box>
  );
};

export default PreviewInfo;
