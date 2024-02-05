/* eslint-disable react/prop-types */
import { Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const OrderPaper = ({ order }) => {
  return (
    <Paper
      key={order.Id}
      elevation={3}
      sx={{
        width: { xs: "90%", sm: "45%" },
        padding: 5,
        backgroundColor: "gray",
        borderRadius: 7,
      }}
    >
      <Link to={`/order/${order.id}`}>
        <Typography variant="h4">{order.name}</Typography>
      </Link>
      <Typography>{order.description}</Typography>
    </Paper>
  );
};

export default OrderPaper;
