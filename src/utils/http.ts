/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios, { AxiosRequestConfig } from 'axios';

const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL_DEV,
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  },
});

export const http = {
  get: <Response = unknown>(url: GetApiPath, config?: AxiosRequestConfig) => {
    return axios.get<Response>(url, config).then((res) => res.data);
  },
  post: <Request = any, Response = unknown>(url: PostApiPath, body?: Request, config?: AxiosRequestConfig) => {
    return axios.post<Response>(url, body, config).then((res) => res.data);
  },
  patch: <Request = any, Response = unknown>(url: PatchApiPath, body?: Request, config?: AxiosRequestConfig) => {
    return axios.patch<Response>(url, body, config).then((res) => res.data);
  },
  delete: <Response = unknown>(url: DeleteApiPath, config?: AxiosRequestConfig) => {
    return axios.delete<Response>(url, config).then((res) => res.data);
  },
};

type GetApiPath =
  | '/categories'
  | `/categories/${number}/documents`
  | `/documents/${number}`
  | `/categories/${number}/documents/questions`;

type PostApiPath = '/categories' | '/documents';

type PatchApiPath = `/categories/${number}`;

type DeleteApiPath = `/categories/${number}`;
