import { AxiosResponse, AxiosError } from 'axios';
import { GitHubApiHttpClient } from '../../../../../utils/services';

function getUserRepositories(username: string, callback: (arg: any, err: any) => void) {
  GitHubApiHttpClient.get(`/users/${username}/repos`)
  .then((response: AxiosResponse) => {
    if (callback) {
      callback(response, null);
    }
  })
  .catch((error: AxiosError) => {
    if (callback) {
      callback(null, error);
    }
  })
}

function getRepoLanguages(fullName: string, callback: (arg: any, err: any) => void) {
  GitHubApiHttpClient.get(`/repos/${fullName}/languages`)
  .then((response: AxiosResponse) => {
    if (callback) {
      callback(response, null);
    }
  })
  .catch((error: AxiosError) => {
    if (callback) {
      callback(null, error);
    }
  })
}

function getRepoReadME(fullName: string, callback: (arg: any, err: any) => void) {
  GitHubApiHttpClient.get(`/repos/${fullName}/readme`)
  .then((response: AxiosResponse) => {
    if (callback) {
      callback(response, null);
    }
  })
  .catch((error: AxiosError) => {
    if (callback) {
      callback(null, error);
    }
  })
}

export const GitHubServices = {
    getUserRepositories,
    getRepoLanguages,
    getRepoReadME
}