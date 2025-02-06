// NextJS ReactJs
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";

// Redux
import { useSelector } from "react-redux";

// Material UI
import { Box } from "@mui/material";

// Components
import { Table, Loading } from "@/components";

// Hooks
import { useToast } from "@/hooks";

// APIs
import { all as allServers } from "@/api/services/server";

const Index = () => {
  const router = useRouter();

  const [servers, serServers] = useState([]);

  const [loading, setLoading] = useState(true);

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
            clk={(data) => router.push(`/panel/monitors/${data._id}`)}
          />
        ) : (
          <Loading />
        )}
      </Box>
    </>
  );
};

export default Index;
