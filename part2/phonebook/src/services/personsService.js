import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const del = (id) => {
  const response = axios.delete(`${baseUrl}/${id}`).then(
    (response) => response.config.url
    // console.log('delete response',response.config.url)
  );
  // const response = axios.get(baseUrl).then(response => response.data)
  return response;
};

export default {
  getAll,
  create,
  update,
  del,
};
