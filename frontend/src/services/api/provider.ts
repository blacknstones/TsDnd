import axios from 'axios';

import { handleResponse, handleError } from './response';
const BASE_URL: string = 'http://localhost:4000';

const getAll = (resource: string) => {
  return axios
    .get(`${BASE_URL}/${resource}`)
    .then(handleResponse)
    .catch(handleError);
};

const getById = (resource: string, id: number) => {
  return axios
    .get(`${BASE_URL}/${resource}/${id}`)
    .then(handleResponse)
    .catch(handleError);
};

const post = (resource: string, model: any) => {
    return axios
      .get(`${BASE_URL}/${resource}`, model)
      .then(handleResponse)
      .catch(handleError);
  };

  const put = (resource: string, model: any) => {
    return axios
      .put(`${BASE_URL}/${resource}`, model)
      .then(handleResponse)
      .catch(handleError);
  };

  const remove = (resource: string, id: number) => {
    return axios
      .delete(`${BASE_URL}/${resource}/${id}`,)
      .then(handleResponse)
      .catch(handleError);
  };

  export const apiProvider =  {
      getAll,
      getById,
      post,
      put,
      remove
  }