import axios, { AxiosError, AxiosResponse } from 'axios';

export const ApiHttpClient = axios.create({
    baseURL: process.env.REACT_APP_HOST_WS_PATH,
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


export const GitHubApiHttpClient = axios.create({
    baseURL: 'https://api.github.com',
    responseType: 'json'
});

GitHubApiHttpClient.interceptors.response.use(
    (response: AxiosResponse) => {
        return Promise.resolve(response);
    },
    (error: AxiosError) => {
        console.error(error.message);
        return Promise.reject({ ...error });
    }
);
