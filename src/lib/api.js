import qs from 'qs';
import config from '../config';

const constructUrl = (path, params) => {
  const queryParams = qs.stringify({
    ...params,
    client_id: config.clientId,
    client_secret: config.clientSecret,
  });

  return config.host + '/ghost/api/v0.1' + path +  '?' + queryParams;
}

const checkStatus = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    const error = new Error(response.statusText);
    error.response = response;

    throw error;
  }
}

const parseJson = (response) => {
  return response.json();
};

export const request = (path, options = {}) => {
  const url = constructUrl(path, options);

  return fetch(url, options)
    .then(checkStatus)
    .then(parseJson);
}
