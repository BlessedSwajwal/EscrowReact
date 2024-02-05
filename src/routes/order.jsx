import { useLoaderData } from "react-router-dom";
import { GetOrder } from "../api/orders";
import orderImg from "../assets/order.jpg";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

export function loader({ params }) {
  var order = GetOrder(params.orderId);
  return { order };
}
// {
//     id: "5fccb406-c368-411f-82ff-05039b2ff17d1f",
//     name: "Build a composite deck in backyard",
//     description:
//       "12x16 feet deck with railing. Low-maintenance composite material. Sturdy construction for entertaining.",
//     cost: 6000,
//     orderStatus: "completed",
//     creatorId: "25d88471-1da1-484c-9966-208212a4b65b",
//     allowedDays: 14,
//     providerId: "00000000-0000-0000-0000-000000000000",
//     acceptedDate: "0001-01-01T00:00:00",
//     deadLine: "0001-01-15T00:00:00",
//     paymentUri: "",
//     bids: [],
//     acceptedBid: "00000000-0000-0000-0000-000000000000",
//   }
function Order() {
  const StyledText = styled(Typography)({
    component: "p",
    fontSize: 16,
    alignSelf: "flex-start",
  });
  const { order } = useLoaderData();
  return (
    <Box
      p={8}
      width="100%"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
    >
      <img
        src={orderImg}
        alt="Online order"
        style={{ objectFit: "fill", height: "250px" }}
      />
      <Typography variant="h5">{order.name}</Typography>
      <StyledText>
        <b>Id:</b> {order.id}
      </StyledText>
      <StyledText>
        <b>Description: </b> {order.description}
      </StyledText>
      <StyledText>
        <b>Proposed Cost: </b>Rs. {order.cost / 100}
      </StyledText>
      <StyledText>
        <b>Order Status: </b>
        {order.orderStatus.toUpperCase()}
      </StyledText>
      <StyledText>
        <b>Proposed Time Period: </b>
        {order.allowedDays} days
      </StyledText>
      <StyledText>
        <b>No. of bids: </b>
        {order.bids.length}
      </StyledText>
      {order.orderStatus != "pending" ? (
        <StyledText>
          <b>Creator Id: </b>
          {order.creatorId}
        </StyledText>
      ) : (
        ""
      )}
    </Box>
  );
}

export default Order;
