import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { styles } from './index.style';
import './firebase/config'
import { Box } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Box  sx={styles}>
    <RouterProvider router={router} />
  </Box>,
)
