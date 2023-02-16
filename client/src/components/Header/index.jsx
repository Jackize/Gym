import { ChevronLeft } from '@mui/icons-material';
import { Box, Grid, IconButton, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ScrollTopButton from '../ScrollTopButton';
import { form, header } from './Header.style';

export default function Header({children, title, backgroundImage}) {
    const navigate = useNavigate()
    const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };
    return (
      <>
        <Box
          sx={{...header, backgroundImage: `url(${backgroundImage})`}}>
          <IconButton size="large" sx={{right: '210px', backgroundColor: '#b726266b', '&:hover': {background: '#b72626'}}} onClick={()=>(navigate('/'))}>
            <ChevronLeft color="info"/>
          </IconButton>
          <Typography
            variant="body1"
            color={"white"}
            fontWeight={"bolder"}
            fontSize={"1.3rem"}
            gutterBottom>
            {title}
          </Typography>
        </Box>
        <Box sx={form}>
          <Grid container gap={2} justifyContent="center">
              {children}
          </Grid>
        </Box>
        {showScrollTop && <ScrollTopButton />}
      </>
    );
}
