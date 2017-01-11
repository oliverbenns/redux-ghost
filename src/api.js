import qs from 'qs';
import config from './config';

const constructUrl = (path, params, type) => {
  const queryParams = qs.stringify({
    client_id: config.clientId,
    client_secret: config.clientSecret
  });

  return config.host + '/ghost/api/v0.1' + path +  '?' + queryParams;
}

export default {
  constructUrl
}
