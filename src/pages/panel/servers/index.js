// NextJS ReactJs
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";

// Redux
import { useSelector } from "react-redux";

// Material UI
import { Box, Dialog, DialogContent, DialogTitle } from "@mui/material";

// Components
import { Table, Loading } from "@/components";

// Hooks
import { useDisclosure, useToast } from "@/hooks";

// APIs
import { all as allServers } from "@/api/services/server";

// Forms
import ServerForm from "@/forms/server";

const Index = () => {
  const router = useRouter();

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
            upd={(data) => {
              const d = { ...data };

              setCurrentData(d);
              handleDialog();
            }}
            clk={(data) => router.push(`/panel/monitors/${data._id}`)}
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
