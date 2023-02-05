import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { background, form, gridContainer, WelcomeMessage } from "./Register.style";
import { FacebookRounded, Google} from '@mui/icons-material';

export default function Register() {
  return (
    <Box sx={background}>
      <Box sx={form} >
        <Grid container spacing={3} sx={gridContainer}>
          <Grid item>
            <Typography sx={WelcomeMessage}>
              Welcome To Workout At Home
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5" fontWeight={500} color='darkred'>
              You want to create an account?
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" color="error">
            <Google sx={{marginRight: 1}}/>
                 Register with Google
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
            <FacebookRounded sx={{marginRight: 1}}/>
              Register with Facebook
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="h6" color={"InfoText"}>
              You already had account? <Link to="/login">Login</Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
