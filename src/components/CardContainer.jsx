import styled from "@emotion/styled";
import { Grid, Paper, Typography } from "@mui/material";
import talent from "../assets/talent.png";
import { PropTypes } from "prop-types";

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

  const CardItem = ({ heading, description }) => (
    <Grid item xs={12} sm={6} md={4}>
      <Item>
        <img src={talent} alt="talent" height="100px" />
        <Typography variant="h5">{heading}</Typography>
        <Typography textAlign="left">{description}</Typography>
      </Item>
    </Grid>
  );

  CardItem.propTypes = {
    heading: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };
  return (
    <Grid container spacing={2} padding={3}>
      <CardItem
        heading="Global Talents"
        description=" We open the magic portal for you to gain find talents from all over
          the world. A decentralized service where freelancers from all over the
          world are welcome to compete for orders."
      />
      <CardItem
        heading="Global Talents"
        description=" We open the magic portal for you to gain find talents from all over
          the world. A decentralized service where freelancers from all over the
          world are welcome to compete for orders."
      />
      <CardItem
        heading="Global Talents"
        description=" We open the magic portal for you to gain find talents from all over
          the world. A decentralized service where freelancers from all over the
          world are welcome to compete for orders."
      />
    </Grid>
  );
}

export default CardContainer;
