const axios = require('../node_modules/axios/index')
const {
    newsApiKey,
} = require('./config');

axios.get('https://newsapi.org/v1/sources?language=en')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
// const URL_BASE = 'https://newsapi.org/v1/sources?language=en';
//
// const paramify = (params) => Object.keys(params).reduce((_arr, key) => _arr.concat([[key, params[key]].join('=')]), [
//     ['key', newsApiKey].join('='),
// ]).join('&');
//
// const GET = (endpoint, params) => {
//     return axios.get(URL_BASE + endpoint + '?' + paramify(params));
// }

module.exports = {
    GET,
};
