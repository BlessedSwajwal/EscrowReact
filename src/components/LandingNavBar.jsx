import {
  AppBar,
  Box,
  Button,
  Divider,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import logo from "../assets/logo.svg";
import styled from "@emotion/styled";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/auth";
import { Person } from "@mui/icons-material";

function LandingNavBar() {
  const isLoggedIn = useAuth();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/Consumer");
    } else {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    handleClose();
    window.localStorage.removeItem("auth-token");
    window.dispatchEvent(new Event("storage"));
  };

  const StyledTitleBox = styled(Box)(({ theme }) => ({
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }));

  const StyledLinks = styled(Typography)({
    variant: "h6",
    color: "white",
    textDecoration: "none",
    fontWeight: 700,
  });
  const LoginRegisterBox = () => (
    <Box display="flex" gap={3}>
      <Link to={`/login`} style={{ textDecoration: "none" }}>
        <StyledLinks>SIGN IN</StyledLinks>
      </Link>
      <Link to={`/register`} style={{ textDecoration: "none" }}>
        <StyledLinks>SIGN UP</StyledLinks>
      </Link>
    </Box>
  );

  const Avatar = () => (
    <IconButton>
      <Person
        sx={{
          height: "50px",
          width: "40px",
        }}
      />
    </IconButton>
  );

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ backgroundColor: "gray" }}>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Box display="flex" gap={3} alignItems="center" height="100%">
                <Icon>
                  <img src={logo} alt="Logo" />
                </Icon>
                <StyledTitleBox>
                  <h3>Escrow App</h3>
                </StyledTitleBox>
              </Box>
            </Link>
            {isLoggedIn ? (
              <IconButton onClick={handleClick}>
                <Avatar />
              </IconButton>
            ) : (
              <LoginRegisterBox />
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Menu
        open={menuOpen}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem
          style={{
            paddingInline: "40px",
            paddingBlock: "20px",
          }}
          onClick={handleClose}
        >
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "black" }}
          >
            Profile
          </Link>
        </MenuItem>
        <Divider sx={{ backgroundColor: "black", height: 2 }} />
        <MenuItem
          style={{ paddingInline: "40px", paddingBlock: "20px" }}
          onClick={handleLogout}
        >
          Logout
        </MenuItem>
      </Menu>
      <>
        <Outlet />
      </>
    </>
  );
}

export default LandingNavBar;
