/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import order from "../../assets/order.jpg";
import { useEffect, useState } from "react";

import {
  CompletedOrders,
  DisputedOrders,
  PendingOrders,
  ProcessingOrders,
} from "../../api/orders";
import OrderCreateModal from "./OrderCreateModal";
import OrdersContainer from "../../components/OrdersContainer";

function ConsumerHome() {
  const [orders, setOrders] = useState([]);
  const [alignment, setAlignment] = useState("pending");
  const [modalOpen, setModalOpen] = useState(false);
  useEffect(() => {
    if (!alignment) return;
    switch (alignment) {
      case "pending":
        setOrders(PendingOrders());
        break;
      case "processing":
        setOrders(ProcessingOrders());
        break;
      case "completed":
        setOrders(CompletedOrders());
        break;
      case "disputed":
        setOrders(DisputedOrders());
        break;
      default:
        setOrders([]);
    }
  }, [alignment]);
  return (
    <Box p={4}>
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
          onClick={() => setModalOpen(true)}
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
      <OrderCreateModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <ToggleButtonGroup
        variant="filled"
        fullWidth
        color="primary"
        value={alignment}
        exclusive
        onChange={(event, newAlignment) => {
          setAlignment(newAlignment);
        }}
        aria-label="Platform"
      >
        <ToggleButton value="pending">Pending</ToggleButton>
        <ToggleButton value="processing">Processing</ToggleButton>
        <ToggleButton value="completed">Completed</ToggleButton>
        <ToggleButton value="disputed">Disputed</ToggleButton>
      </ToggleButtonGroup>
      <OrdersContainer orders={orders} />
    </Box>
  );
}

export default ConsumerHome;
