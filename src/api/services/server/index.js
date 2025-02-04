import API from "@/api";
import URLs from "@/api/urls";

const { server } = URLs;

export const all = async (filter) => {
  try {
    const response = await API.get(server, {
      params: filter,
    });

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const singleOne = async (id) => {
  try {
    const response = await API.get(`${server}/${id}`);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const createOne = async (data) => {
  try {
    const response = await API.post(server, data);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const deleteOne = async (id) => {
  try {
    const response = await API.delete(`${server}/${id}`);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const updateOne = async (id, data) => {
  try {
    const response = await API.patch(`${server}/${id}`, data);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};

export const checkOne = async (data) => {
  try {
    const response = await API.post(`${server}/check`, data);

    return Promise.resolve(response.data);
  } catch (error) {
    return Promise.reject(error.response.data);
  }
};
