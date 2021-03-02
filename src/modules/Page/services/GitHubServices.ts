import { AxiosResponse, AxiosError } from 'axios';
import { GitHubApiHttpClient } from '../../../utils/services';

// https://api.github.com/users/USERNAME
function getUser(username: any, callback: (arg: any, err: any) => void) {
  GitHubApiHttpClient.get(`/users/${username}`)
    .then((response: AxiosResponse) => {
      if (callback) {
        callback(response, null);
      }
    })
    .catch((error: AxiosError) => {
      if (callback) {
        callback(null, error);
      }
    });
}

// https://api.github.com/users/USERNAME/repos
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

// https://api.github.com/repos/FDuarte-Dev/fernando-duarte/languages
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

export const GitHubServices = {
    getUser,
    getUserRepositories,
    getRepoLanguages
}