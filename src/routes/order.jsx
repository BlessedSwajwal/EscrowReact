/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import orderImg from "../assets/order.jpg";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import axios from "axios";

export async function loader({ params }) {
  const authToken = localStorage.getItem("auth-token");
  const apiUrl = `${import.meta.env.VITE_API_URL}/Order/${params.orderId}`;

  try {
    let res = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    let order = res.data;
    return { order };
  } catch (error) {
    console.log(error);
  }
}
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
      <Box alignSelf="flex-start">
        {order.bids.length > 0 ? (
          <Typography fontSize={22} fontWeight={600}>
            BIDS:
          </Typography>
        ) : (
          ""
        )}
        {order.bids.map((b) => (
          <BidComponent key={b.id} bid={b} orderStatus={order.orderStatus} />
        ))}
      </Box>
    </Box>
  );
}

// {
//   "id": "334c1a8d-8e05-4755-8965-c0e00014ff7c",
//   "name": "Build a composite deck in backyard",
//   "description": "12x16 feet deck with railing. Low-maintenance composite material. Sturdy construction for entertaining.",
//   "cost": 6000,
//   "orderStatus": "created",
//   "creatorId": "5e23a4e5-2564-4f3b-9069-4fcb68eab0f5",
//   "allowedDays": 14,
//   "providerId": "00000000-0000-0000-0000-000000000000",
//   "acceptedDate": "0001-01-01T00:00:00",
//   "deadLine": "0001-01-15T00:00:00",
//   "paymentUri": "Order Status: CREATED",
//   "bids": [
//     {
//       "bidId": "1fd54ac5-3a81-4581-b3ad-84191c372228",
//       "bidderId": "309422f6-e639-4b7e-999e-27ef9ae9b370",
//       "proposedAmount": 2000,
//       "comment": "Will be using A1 materials.",
//       "bidStatus": "PENDING"
//     }
//   ],
//   "acceptedBid": "00000000-0000-0000-0000-000000000000"
// }

function BidComponent({ bid, orderStatus }) {
  return (
    <Box
      key={bid.bidId}
      borderColor={"brown"}
      border="solid"
      p={3}
      borderRadius={10}
      mb={2}
    >
      <Typography>Bidder Id: {bid.bidderId}</Typography>
      <Typography>Proposed Amount: Rs. {bid.proposedAmount / 100}</Typography>
      <Typography>Comments: {bid.comment}</Typography>
      <Typography>Status: {bid.bidStatus.toUpperCase()}</Typography>

      {orderStatus == "created" ? (
        <Button
          variant="filled"
          sx={{
            backgroundColor: "green",
            color: "white",
            "&:hover": {
              backgroundColor: "purple",
            },
          }}
        >
          Accept Bid
        </Button>
      ) : (
        ""
      )}
    </Box>
  );
}

export default Order;
