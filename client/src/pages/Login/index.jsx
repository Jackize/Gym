import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { background, form, gridContainer, WelcomeMessage } from "./Login.style";
import { FacebookRounded, Google} from '@mui/icons-material';
import { GoogleAuthProvider, signInWithPopup, getAuth, FacebookAuthProvider} from 'firebase/auth'
import { AuthContext } from "../../context/AuthProvider";

const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();

export default function Login() {
  const auth = getAuth();
  const {user} = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogin = async (provider) => {
    const res = await signInWithPopup(auth, provider);
    console.log("🚀 ~ file: index.jsx:13 ~ handleLoginWithGoogle ~ res", res);
    
  }

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
              Login to your account
            </Typography>
          </Grid>
          <Grid item>
            <input
              type="text"
              placeholder="Username"
              style={{ width: "300px" }}
            />
          </Grid>
          <Grid item>
            <input
              type="password"
              placeholder="Password"
              style={{ width: "300px" }}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="success">
              Login
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="error" onClick={()=>handleLogin(GoogleProvider)}>
            <Google sx={{marginRight: 1}}/>
                 Login with Google
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={()=>handleLogin(FacebookProvider)}>
            <FacebookRounded sx={{marginRight: 1}}/>
              Login with Facebook
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="h6" color={"InfoText"}>
              You don't have an account? <Link to="/register">Register</Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
