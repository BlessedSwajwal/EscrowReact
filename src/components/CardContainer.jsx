import styled from "@emotion/styled";
import { Grid, Paper, Typography } from "@mui/material";
import talent from "../assets/talent.png";

function CardContainer() {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    lineHeight: "60px",
    elevation: 3,
    padding: 13,
    width: "100%",
  }));
  return (
    <Grid container spacing={2} padding={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Item>
          <img src={talent} alt="talent" height="100px" />
          <Typography variant="h5">Global Talents</Typography>
          <Typography textAlign="left">
            We open the magic portal for you to gain find talents from all over
            the world. A decentralized service where freelancers from all over
            the world are welcome to compete for orders.
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Item>
          <img src={talent} alt="talent" height="100px" />
          <Typography variant="h5">Global Talents</Typography>
          <Typography textAlign="left">
            We open the magic portal for you to gain find talents from all over
            the world. A decentralized service where freelancers from all over
            the world are welcome to compete for orders.
          </Typography>
        </Item>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Item>
          <img src={talent} alt="talent" height="100px" />
          <Typography variant="h5">Global Talents</Typography>
          <Typography textAlign="left">
            We open the magic portal for you to gain find talents from all over
            the world. A decentralized service where freelancers from all over
            the world are welcome to compete for orders.
          </Typography>
        </Item>
      </Grid>
    </Grid>
  );
}

export default CardContainer;
