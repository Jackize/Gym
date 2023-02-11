import { Box, Typography } from '@mui/material';
import React from 'react';
import { useRouteError } from 'react-router-dom';
import { background } from './Error.style';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <Box  sx={background}>
        <Box >
          <Typography variant='h1'>Oops</Typography>
          <Typography variant='body1'>Sorry, an unexpected error has occurred</Typography>
          <Typography variant='h5'>Status: {error.status} </Typography>
          <Typography variant='h6'>Message: {error.error.message}</Typography>
        </Box>
      </Box>
    </>
  );
}
