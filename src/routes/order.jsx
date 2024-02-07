/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";
import orderImg from "../assets/order.jpg";
import { Box, Button, IconButton, Modal, Typography } from "@mui/material";
import styled from "@emotion/styled";
import axios from "axios";
import { useState } from "react";
import { GetPaymentUrl } from "../api/orders";

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
          <BidComponent
            key={b.bidId}
            bid={b}
            orderStatus={order.orderStatus}
            orderId={order.id}
          />
        ))}
      </Box>
    </Box>
  );
}

function BidComponent({ bid, orderStatus, orderId }) {
  const [paymentModalOpen, setPaymentModalOpen] = useState(false);
  function handlePayClicked() {
    setPaymentModalOpen(true);
  }
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
          onClick={handlePayClicked}
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

      <PaymentModal
        modalOpen={paymentModalOpen}
        setModalOpen={setPaymentModalOpen}
        orderId={orderId}
        bidId={bid.bidId}
      />
    </Box>
  );
}

function PaymentModal({ modalOpen, setModalOpen, orderId, bidId }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: 10,
    p: 4,
  };

  async function handleKhaltiPayment() {
    var url = await GetPaymentUrl(orderId, bidId, "khalti");
    setModalOpen(false);
    const newWindow = window.open(url, "_blank");
    if (newWindow) newWindow.opener = null;
    console.log(url);
  }

  async function handleStripePayment() {
    var url = await GetPaymentUrl(orderId, bidId, "stripe");
    setModalOpen(false);
    const newWindow = window.open(url, "_blank");
    if (newWindow) newWindow.opener = null;
    console.log(url);
  }

  return (
    <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
      <Box
        sx={style}
        display="flex"
        flexDirection="column"
        gap={3}
        width="40vw"
      >
        <Button
          onClick={handleKhaltiPayment}
          sx={{
            backgroundColor: "#6b516b",
            color: "white",
            "&:hover": {
              backgroundColor: "lightblue",
            },
          }}
        >
          <img
            src="https://seeklogo.com/images/K/khalti-logo-F0B049E67E-seeklogo.com.png"
            alt="Khalti logo"
            width="100px"
            height="50px"
            style={{
              objectFit: "contain",
            }}
          />
          <Box width={20}></Box>
          <Typography variant="button">Pay with Khalti</Typography>
        </Button>
        <Button
          onClick={handleStripePayment}
          sx={{
            backgroundColor: "gray",
            color: "white",
            "&:hover": {
              backgroundColor: "purple",
            },
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
            alt="Stripe logo"
            width="100px"
            height="50px"
            style={{
              objectFit: "contain",
            }}
          />
          <Box width={20}></Box>
          <Typography variant="button">Pay with Stripe</Typography>
        </Button>
      </Box>
    </Modal>
  );
}

export default Order;
