// NextJS ReactJs
import { useState, useEffect } from "react";
import Head from "next/head";

// Redux
import { useSelector } from "react-redux";

// Material UI
import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";

// Components
import { Table, Loading } from "@/components";

// Hooks
import { useDisclosure, useToast } from "@/hooks";

// APIs
import {
  all as allServers,
  deleteOne as deleteServer,
} from "@/api/services/server";

// Forms
import ServerForm from "@/forms/server";

const Index = () => {
  const [servers, serServers] = useState([]);

  const [loading, setLoading] = useState(true);
  const [currentData, setCurrentData] = useState({});

  const { isOpen: dialogOpen, onToggle: handleDialog } = useDisclosure();

  const toast = useToast();

  const { role, _id } = useSelector((state) => state.user);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);

    const filter = {};

    if (role?.value === "user") {
      filter["user"] = _id;
    }

    try {
      const { servers } = await allServers(filter);

      serServers(servers);

      toast("Servers got");
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

      handleConfirm();
      setCurrentData({});
      getData();
    } catch (error) {
      toast(error.message);
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Servers - Postgres Pool Admin | Console</title>
      </Head>
      <Box>
        {!loading ? (
          <Table
            table="server"
            data={servers}
            addText={"Add server"}
            add={() => {
              setCurrentData(null);
              handleDialog();
            }}
            clk={(data) => {
              const d = { ...data };

              setCurrentData(d);
              handleDialog();
            }}
          />
        ) : (
          <Loading />
        )}
      </Box>

      <Dialog
        open={dialogOpen}
        onClose={handleDialog}
        PaperProps={{ sx: { borderRadius: "20px" } }}
      >
        <DialogTitle>{"Server"}</DialogTitle>
        <DialogContent>
          <ServerForm
            currentData={currentData}
            getData={getData}
            handleClose={handleDialog}
            loading={loading}
            setLoading={setLoading}
            updateMode={currentData}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Index;
