import {
  AppBar,
  Box,
  Icon,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import logo from "../assets/logo.svg";
import styled from "@emotion/styled";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../hooks/auth";
import { Person } from "@mui/icons-material";

function LandingNavBar() {
  const isLoggedIn = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/Consumer");
    }
  }, [isLoggedIn, navigate]);

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
            {console.log(isLoggedIn)}
            {isLoggedIn ? <Avatar /> : <LoginRegisterBox />}
          </Box>
        </Toolbar>
      </AppBar>
      <>
        <Outlet />
      </>
    </>
  );
}

export default LandingNavBar;
