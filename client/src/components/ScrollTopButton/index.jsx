import React from 'react'
import { Fab, IconButton } from '@mui/material';
import { KeyboardCapslock } from '@mui/icons-material';
export default function ScrollTopButton() {
    const handleClick = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };
    
      return (
        <Fab color="error" aria-label="back" sx={{position: 'fixed', bottom: 30, right: 30}} onClick={handleClick}>
            <KeyboardCapslock color="info"/>
          </Fab>
      );
}
