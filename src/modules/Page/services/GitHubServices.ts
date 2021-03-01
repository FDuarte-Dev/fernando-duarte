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

// https://api.github.com/users/USERNAME/projects
function getUserProjects(username: string, callback: (arg: any, err: any) => void) {
  GitHubApiHttpClient.get(`/users/${username}/projects`)
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
    getUser: getUser,
    getUserProjects: getUserProjects
}