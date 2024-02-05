/* eslint-disable react/prop-types */
import {
  Button,
  ButtonGroup,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import order from "../../assets/order.jpg";
import { useEffect, useState } from "react";
import { PendingOrders } from "../../api/orders";

function ConsumerHome() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    setOrders(PendingOrders());
  }, []);
  return (
    <>
      <Paper
        elevation={3}
        sx={{
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${order})`,

          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: 3,
          margin: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          borderRadius: 10,
          color: "white",
        }}
      >
        <Typography variant="h3">Create order</Typography>
        <Typography fontWeight={600} fontSize="25px">
          Create an order and wait for our freelancers to bid on it.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "green",
            paddingInline: 8,
            paddingBlock: 3,
            borderRadius: 10,
          }}
        >
          Create
        </Button>
      </Paper>
      <ButtonGroup variant="outlined" fullWidth>
        <Button>Pending Orders</Button>
        <Button>Processing Orders</Button>
        <Button color="success">Completed Orders</Button>
        <Button color="error">Disputed Orders</Button>
      </ButtonGroup>
      <Container>
        <Typography fontWeight={400} fontSize={20}>
          Orders:
        </Typography>
        <Stack
          useFlexGap
          flexWrap="wrap"
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
        >
          {orders.length ? (
            orders.map((order) => <OrderPaper key={order.Id} order={order} />)
          ) : (
            <h1>No orders</h1>
          )}
        </Stack>
      </Container>
    </>
  );
}

const OrderPaper = ({ order }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        width: { xs: "90%", sm: "45%" },
        padding: 5,
      }}
    >
      <Typography variant="h4">{order.name}</Typography>
      <Typography>{order.description}</Typography>
    </Paper>
  );
};

export default ConsumerHome;
