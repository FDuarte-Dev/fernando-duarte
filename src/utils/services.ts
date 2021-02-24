import axios, { AxiosError, AxiosResponse } from 'axios';

export const ApiHttpClient = axios.create({
    baseURL: process.env.REACT_APP_HOST_WS_PATH,
    responseType: 'json'
});
export const ConsulHttpClient = axios.create({
    baseURL: process.env.REACT_APP_CONSUL_PATH,
    responseType: 'json'
});

ApiHttpClient.interceptors.response.use(
    (response: AxiosResponse) => {
        return Promise.resolve(response);
    },
    (error: AxiosError) => {
        console.error(error.message);
        return Promise.reject({ ...error });
    }
);

ConsulHttpClient.interceptors.response.use(
    (response: AxiosResponse) => {
        return Promise.resolve(response);
    },
    (error: AxiosError) => {
        console.error(error.message);
        return Promise.reject({ ...error });
    }
);