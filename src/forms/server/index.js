// Components
import { Form, Confirm } from "@/components";

// Hooks
import { useToast, useDisclosure } from "@/hooks";

// APSs
import {
  createOne as createServer,
  updateOne as updateServer,
  deleteOne as deleteServer,
} from "@/api/services/server";

// Redux
import { useSelector } from "react-redux";
import { Box, Button, Divider, Typography } from "@mui/material";

const ServerForm = ({
  currentData,
  updateMode,
  setLoading,
  getData,
  loading,
  handleClose,
}) => {
  const toast = useToast();

  const { _id } = useSelector((state) => state.user);

  const { isOpen: confirmOpen, onToggle: handleConfirm } = useDisclosure();

  // const [formData, setFormData] = useState({});

  const addData = async (callback) => {
    setLoading(true);

    if (callback.port <= 0 || callback.port > 65535) {
      toast("Port number must be between 1 and 65535.");
      setLoading(false);
      return;
    }

    try {
      callback.user = _id;

      await createServer(callback);

      toast("Server created");
      handleClose();

      getData();
    } catch (error) {
      toast(error.message);
    }

    setLoading(false);
  };

  const updateData = async (callback) => {
    setLoading(true);

    if (callback.port <= 0 || callback.port > 65535) {
      toast("Port number must be between 1 and 65535.");
      setLoading(false);
      return;
    }

    try {
      await updateServer(callback._id, callback);

      toast("Server updated");
      handleClose();

      getData();
    } catch (error) {
      toast(error.message);
    }

    setLoading(false);
  };

  const deleteData = async () => {
    setLoading(true);

    try {
      await deleteServer(currentData._id);

      toast("Server deleted");
      handleClose();

      getData();
    } catch (error) {
      toast(error.message);
    }

    setLoading(false);
  };

  return (
    <>
      <Form
        name="server"
        callback={updateMode ? updateData : addData}
        disables={[]}
        btnStyle={{
          fullWidth: false,
          disabled: loading,
          color: "primary",
        }}
        def={updateMode ? currentData : {}}
        button={updateMode ? "Update" : "Create"}
      />

      {updateMode && (
        <Box sx={{ mt: 3 }}>
          <Typography color="error" variant="h6" gutterBottom>
            Delete
          </Typography>
          <Divider color="error" sx={{ mb: 1 }} />
          <Typography variant="body2" color="error" sx={{ mb: 1 }} gutterBottom>
            Here you can delete the server you created. Remember that metrics
            are still available at out databases. If you planned to use this
            server again, you can <b>Inactive</b> the server.
          </Typography>
          <Button
            variant="contained"
            color="error"
            size="medium"
            onClick={handleConfirm}
            sx={{
              borderRadius: 1,
            }}
            disableElevation
          >
            Delete
          </Button>
        </Box>
      )}

      <Confirm
        onConfirm={deleteData}
        isOpen={confirmOpen}
        handleOpen={handleConfirm}
      />
    </>
  );
};

export default ServerForm;
