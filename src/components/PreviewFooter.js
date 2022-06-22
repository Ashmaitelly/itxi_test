import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const PreviewFooter = ({ data }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <Typography variant="subtitle2">Page Count</Typography>

      <Typography variant="subtitle2">Download: PDF EPUB</Typography>
    </Box>
  );
};

export default PreviewFooter;
