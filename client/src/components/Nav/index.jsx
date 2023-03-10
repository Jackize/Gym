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
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import {
  activeTab,
  appBar,
  AvatarSection,
  CoverLogo,
  FitnessIcon,
  logo,
  MenuTab,
} from "./Nav.style";
import { AuthContext } from "../../context/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const pages = [
  ["Practice", "/"],
  ["Discover", "/discover"],
  ["Dashboar", "/dashboard"],
];
const settings = ["Setting", "Logout"];

export default function Nav() {
  const { user, setUser } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const auth = getAuth();

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
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully");
      })
      .catch(function (error) {
        console.error("An error occurred while signing out:", error);
      });
    setAnchorElUser(null);
    setUser(null);
    localStorage.removeItem("accessToken");
    navigate("/login");
  };
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
                component={NavLink}
                to={page[1]}
                sx={{
                my: 2,
                color: "white",
              }}
                exact="true"
                style={({ isActive }) => (isActive ? activeTab : undefined)}>
                {page[0]}
              </Button>
            ))}
            <Button
              to={"/settings"}
              component={NavLink}
              sx={{
                my: 2,
                color: "white",
                display: { xs: "block", md: "none" },
              }}
              exact="true"
              style={({ isActive }) => (isActive ? activeTab : undefined)}>
              Settings
            </Button>
          </Box>

          <Box sx={AvatarSection}>
            <Typography
              variant="h6"
              color={"#84d226"}
              sx={{ display: { xs: "none", md: "flex" }, my: 2 }}>
              {user.displayName}
            </Typography>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ display: { xs: "none", md: "flex" } }}>
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
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center" component={Link} to="/settings" color={'black'}>
                  Settings
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
