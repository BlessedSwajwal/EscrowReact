/* eslint-disable react/prop-types */
import { Container, Stack, Typography } from "@mui/material";
import OrderPaper from "./OrderPaper";

function OrdersContainer({ orders }) {
  return (
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
  );
}

export default OrdersContainer;
