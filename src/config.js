const config = {
  host: null, // .e.g 'http://localhost:2368',
  clientId: null, // .e.g 'ghost-frontend',
  clientSecret: null, // .e.g '4837a41df11b',
};

export const setConfig = (options = {}) => {
  config.host = options.host;
  config.clientId = options.clientId;
  config.clientSecret = options.clientSecret;
  console.log('config', config);
}

export default config;
