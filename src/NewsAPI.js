const axios = require('../node_modules/axios/index')
const {
    newsApiKey,
} = require('./config');

// const GET = axios.get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=40a682dcba244bbeb832872deb8b6b78', (err, response, data) => {
//   data = JSON.parse(data)
// }
  // data.sources.map((source, sourcesIndex) => {
  //   request.get(`https://newsapi.org/v1/articles?source=${source.id}&apiKey=${newsApiKey}`, (err, response, body) => {
  //     body = JSON.parse(body);

// axios.get('https://newsapi.org/v1/sources?language=en')
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// const URL_BASE = 'https://newsapi.org/v1/sources?language=en';
//
// const paramify = (params) => Object.keys(params).reduce((_arr, key) => _arr.concat([[key, params[key]].join('=')]), [
//     ['key', newsApiKey].join('='),
// ]).join('&');
//
const getTitle = (endpoint, params) => {
    return axios.get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=40a682dcba244bbeb832872deb8b6b78').then(response => {
      // console.log(response);

      const articles = response.data.articles;

      const data = articles.map(article => {
        const title = article.title;
        const description = article.description;

        return `Article title is ${title}. Description is: ${description}. `
      })


      // console.log(data);
      return data;
    })
}

// console.log(getTitle())

module.exports = {
    getTitle,
};
