export let host = null; // .e.g 'http://localhost:2368',
export let clientId = null; // .e.g 'ghost-frontend',
export let clientSecret = null; // .e.g '4837a41df11b',

export const config = (options = {}) => {
  host = options.host;
  clientId = options.clientId;
  clientSecret = options.clientSecret;
};
