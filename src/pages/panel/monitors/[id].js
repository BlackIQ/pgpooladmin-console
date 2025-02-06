// NextJS ReactJs
import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// Material UI
import {
  Box,
  Grid2 as Grid,
  Typography,
  Chip,
  CardContent,
  Card,
  Dialog,
  DialogContent,
  DialogTitle,
  useTheme,
} from "@mui/material";

// Components
import { Loading } from "@/components";

// Hooks
import { useDisclosure, useToast } from "@/hooks";

// APIs
import { singleOne } from "@/api/services/server";
import { POOL_NODES, POOL_VERSION } from "@/api/services/monitor";

const Index = () => {
  const router = useRouter();

  const theme = useTheme();

  const { id } = router.query;

  const [loading, setLoading] = useState(true);

  const { isOpen: dialogOpen, onToggle: handleDialog } = useDisclosure();

  const [currentNode, setCurrentNode] = useState({});

  const [server, setServer] = useState([]);

  const [poolNodes, setPoolNodes] = useState([]);
  const [poolVersion, setPoolVersio] = useState([]);

  const toast = useToast();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);

    try {
      // Server Stuff
      const { server: serverResult } = await singleOne(id);

      setServer(serverResult);

      toast("Server got");

      // Pool Stuff
      const { result: poolNodesResult } = await POOL_NODES(id);
      const { result: poolVersionResult } = await POOL_VERSION(id);

      setPoolNodes(poolNodesResult);
      setPoolVersio(poolVersionResult);

      toast("Aggrigated data is ready");
    } catch (error) {
      toast(error.message);
    }

    setLoading(false);
  };

  return (
    <>
      {!loading ? (
        <Box>
          <Head>
            <title>
              Dashboard | {server.alias} - Postgres Pool Admin | Console
            </title>
          </Head>
          <Box>
            <Box
              sx={{
                background: "#333",
                padding: 3,
                borderRadius: 2,
              }}
            >
              <Typography
                variant="h5"
                fontWeight="bold"
                sx={{ color: "white", letterSpacing: 1, mb: 3 }}
              >
                Server Alias: {server.alias}
              </Typography>
              <Chip
                label={`Version: ${poolVersion[0]?.pool_version}`}
                color="info"
                size="medium"
                sx={{
                  color: theme.palette.getContrastText(theme.palette.info.main),
                  fontWeight: "bold",
                }}
              />
            </Box>
            <br />
            <Grid container spacing={2}>
              {poolNodes.map((node) => (
                <Grid item key={node.node_id} xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      border: `2px solid`,
                      background: "#333",
                      borderColor: `${
                        node.pg_status === "up"
                          ? node.role === "primary"
                            ? "success.main"
                            : "info.main"
                          : "error.main"
                      }`,
                      borderRadius: 2,
                      boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                      cursor: "pointer",
                      "&:hover": {
                        boxShadow: `${
                          node.pg_status === "up"
                            ? node.role === "primary"
                              ? theme.palette.success.main
                              : theme.palette.info.main
                            : theme.palette.error.main
                        } 0px 1px 4px 0px`,
                      },
                    }}
                    onClick={() => {
                      setCurrentNode(node);
                      handleDialog();
                    }}
                  >
                    <CardContent>
                      <Typography variant="h6" fontWeight="bold" gutterBottom>
                        {node.hostname}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Port: {node.port}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color:
                            node.pg_status === "up"
                              ? node.role === "primary"
                                ? "success.main"
                                : "info.main"
                              : "error.main",
                        }}
                        gutterBottom
                      >
                        Role: {node.role.toUpperCase()}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        PG Status:{" "}
                        <Chip
                          label={node.pg_status.toUpperCase()}
                          color={node.pg_status === "up" ? "success" : "error"}
                          size="small"
                        />
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Load Balancer:{" "}
                        <Chip
                          label={
                            node.load_balance_node === "true"
                              ? "Enabled"
                              : "Disabled"
                          }
                          color={
                            node.load_balance_node === "true"
                              ? "info"
                              : "default"
                          }
                          size="small"
                        />
                      </Typography>
                      <Typography variant="body2">
                        Last Change: {node.last_status_change}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      ) : (
        <Loading />
      )}

      {/* <Dialog
        open={dialogOpen}
        onClose={handleDialog}
        PaperProps={{ sx: { borderRadius: "20px" } }}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Node details</DialogTitle>
        <DialogContent>
          {currentNode != {} ? (
            <Box>
              {Object.entries(currentNode).map(([key, value]) => (
                <Typography key={key}>
                  {key}: {value}
                </Typography>
              ))}
            </Box>
          ) : (
            <Loading />
          )}
        </DialogContent>
      </Dialog> */}

      <Dialog
        open={dialogOpen}
        onClose={handleDialog}
        PaperProps={{ sx: { borderRadius: "20px" } }}
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle>Node Details: {currentNode.hostname}</DialogTitle>
        <DialogContent>
          {currentNode && Object.keys(currentNode).length > 0 ? (
            <Box>
              {Object.entries(currentNode).map(([key, value]) => {
                // Format the data for more readable display
                if (key === "select_cnt") {
                  return (
                    <Typography key={key} variant="body2" gutterBottom>
                      <b>{key.replaceAll("_", " ").toUpperCase()}</b>:{" "}
                      {Number(value).toLocaleString()}
                    </Typography>
                  );
                }
                return (
                  <Typography key={key} variant="body2" gutterBottom>
                    <b>{key.replaceAll("_", " ").toUpperCase()}</b>: {value}
                  </Typography>
                );
              })}
            </Box>
          ) : (
            <Loading />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Index;
