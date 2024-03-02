const Dotenv = require('dotenv-webpack');


module.exports = {
  reactStrictMode: true,
  images:{
    domains:['bayut-production.s3.eu-central-1.amazonaws.com']
},
webpack: (config, { isServer }) => {
  if (!isServer) {
    config.plugins.push(new Dotenv({ silent: true }));
  }
  return config;
},
}
