const axios = require('../node_modules/axios/index')
const {
    newsApiKey,
} = require('./config');

  // data.sources.map((source, sourcesIndex) => {
  //   request.get(`https://newsapi.org/v1/articles?source=${source.id}&apiKey=${newsApiKey}`, (err, response, body) => {
  //     body = JSON.parse(body);

// const URL_BASE = 'https://newsapi.org/v1/sources?language=en';

const getTitle = (endpoint, params) => {
    return axios.get(`https://newsapi.org/v1/articles?source=techcrunch&apiKey=${newsApiKey}`).then(response => {


      const articles = response.data.articles;

      const data = articles.map((article, index) => {
        const title = article.title;
        const description = article.description;

        return `Article number ${index+1} is ${title}.`
      })


      return data;
    })
}

const getTitleAt = (num) => {
  return axios.get(`https://newsapi.org/v1/articles?source=techcrunch&apiKey=${newsApiKey}`).then(response => {

    const articles = response.data.articles;
    const articleChosen = articles[num];


    return articleChosen;
  })
}




module.exports = {
    getTitle,
    getTitleAt,
};
