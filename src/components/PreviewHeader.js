import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const PreviewHeader = ({ data }) => {
  return (
    <Box>
      <Typography variant="h5" m={1}>
        Bismark Archapelligo (EN)
      </Typography>
      <Typography variant="h6" m={1}>
        by Author
      </Typography>
      <Typography variant="caption">
        Division of History, National Park Service
      </Typography>
    </Box>
  );
};

export default PreviewHeader;
