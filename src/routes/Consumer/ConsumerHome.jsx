/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Container,
  Modal,
  Paper,
  Stack,
  TextField,
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
    </Box>
  );
}

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
      <Typography variant="h4">{order.name}</Typography>
      <Typography>{order.description}</Typography>
    </Paper>
  );
};

const OrderCreateModal = ({ modalOpen, setModalOpen }) => {
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
  return (
    <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
      <Box sx={style} display="flex" flexDirection="column" gap={3}>
        <Typography variant="h5">Create Order</Typography>
        <TextField label="Title*" variant="outlined" name="Name" />
        <TextField label="Description" multiline rows={4} name="Description" />
        <Box width="100%">
          <Typography mb={1.2}>Preferred days to complete:</Typography>
          <input
            name="AllowedDays"
            style={{ padding: 15 }}
            type="number"
            placeholder="Preferred days"
          />
        </Box>
        <Box>
          <Typography mb={1.2}>Budget (in Rs.):</Typography>
          <input
            style={{ padding: 15 }}
            type="number"
            placeholder="Budget*"
            name="Cost"
          />
        </Box>
        <Button
          variant="filled"
          sx={{ backgroundColor: "purple", color: "white", p: 1, fontSize: 16 }}
        >
          Create
        </Button>
      </Box>
    </Modal>
  );
};

export default ConsumerHome;
