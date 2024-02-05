import { Box, Button, Modal, TextField, Typography } from "@mui/material";

/* eslint-disable react/prop-types */
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

export default OrderCreateModal;
