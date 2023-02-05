import React from "react";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  Toolbar,
  Tooltip,
  Typography,
  MenuItem,
  Button,
  Avatar,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import { appBar, AvatarSection, CoverLogo, FitnessIcon, logo, MenuTab } from "./Nav.style";
import { AuthContext } from "../../context/AuthProvider";
import { Link,  useNavigate } from "react-router-dom";

const pages = [["Practice","/practice"], ["Discover","/discover"], ["Dashboar","/dashboar"]];
const settings = ["Setting", "Logout"];

export default function Nav() {
  const { user, setUser } = React.useContext(AuthContext);
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    setAnchorElUser(null);
    setUser(null);
    localStorage.removeItem('accessToken')
    navigate('/login')
  }
  return (
    <AppBar position="static" sx={appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={CoverLogo}>
            <Typography variant="h6" noWrap component="a" href="/" sx={logo}>
              G
              <FitnessCenterIcon sx={FitnessIcon} />M
            </Typography>
          </Box>

          <Box sx={MenuTab}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                component={Link}
                to={page[1]}
                sx={{ my: 2, color: "white", display: "block" }}>
                {page[0]}
              </Button>
            ))}
            <Button
                onClick={handleCloseNavMenu}
                component={Link}
                to={"/settings"}
                sx={{ my: 2, color: "white", display: {xs:"block", md:'none'} }}>
                Settings
              </Button>
          </Box>

          <Box sx={AvatarSection}>
            <Typography variant="h6" color={'#84d226'} sx={{display: { xs: "none", md: "flex" }, my: 2}}>{user.displayName}</Typography>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ display: { xs: "none", md: "flex" }}}>
                <Avatar alt={user.displayName} src={user.photoURL} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}>
                <MenuItem  onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" component={Link} to="/settings">Settings</Typography>
                </MenuItem>
                <MenuItem  onClick={handleLogout}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
