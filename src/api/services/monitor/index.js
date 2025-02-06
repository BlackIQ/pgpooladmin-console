import API from "@/api";
import URLs from "@/api/urls";

const { monitor } = URLs;

export const PGPOOL_SHOW = async (id) => {
  try {
    const response = await API.get(`${monitor}/pgpool/show/${id}`);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const POOL_STATUS = async (id) => {
  try {
    const response = await API.get(`${monitor}/pool/status/${id}`);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const POOL_NODES = async (id) => {
  try {
    const response = await API.get(`${monitor}/pool/nodes/${id}`);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const POOL_PROCESSES = async (id) => {
  try {
    const response = await API.get(`${monitor}/pool/processes/${id}`);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const POOL_POOLS = async (id) => {
  try {
    const response = await API.get(`${monitor}/pool/pools/${id}`);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const POOL_VERSION = async (id) => {
  try {
    const response = await API.get(`${monitor}/pool/version/${id}`);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const POOL_CACHE = async (id) => {
  try {
    const response = await API.get(`${monitor}/pool/cache/${id}`);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};
