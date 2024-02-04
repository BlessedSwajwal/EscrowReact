import { AppBar, Box, Icon, Toolbar, Typography } from "@mui/material";
import logo from "../assets/logo.svg";
import styled from "@emotion/styled";
import { Link, Outlet } from "react-router-dom";

function LandingNavBar() {
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

  return (
    <>
      <AppBar position="sticky">
        <Toolbar sx={{ backgroundColor: "gray" }}>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Box display="flex" gap={3}>
                <Icon>
                  <img src={logo} alt="Logo" />
                </Icon>
                <StyledTitleBox>
                  <h3>Escrow App</h3>
                </StyledTitleBox>
              </Box>
            </Link>
            <Box display="flex" gap={3}>
              {/* <StyledLinks to={`/login`}>SIGN IN</StyledLinks>
              <StyledLinks to={`/login`}>SIGN UP</StyledLinks> */}
              <Link to={`/login`} style={{ textDecoration: "none" }}>
                <StyledLinks>SIGN IN</StyledLinks>
              </Link>
              <Link to={`/register`} style={{ textDecoration: "none" }}>
                <StyledLinks>SIGN UP</StyledLinks>
              </Link>
            </Box>
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
