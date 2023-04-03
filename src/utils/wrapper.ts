import axios, { Axios, Method } from 'axios';

const checkResponse = (response: any) => response.data;
const catchError = (error: any) => error;

export const axiosLib = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

export const wrapper = (method: Method, url: string, data?: any, query: any = {}) => axiosLib.request({
    method, url, data,
    headers: {
        'accept': 'application/json',
    },
    params: query
}).then(checkResponse).catch(catchError);
