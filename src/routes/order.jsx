import { useLoaderData } from "react-router-dom";
import orderImg from "../assets/order.jpg";
import { Box, Typography } from "@mui/material";
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
