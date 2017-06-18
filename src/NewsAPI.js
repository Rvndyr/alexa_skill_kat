const axios = require('../node_modules/axios/index')
const {
    newsApiKey,
} = require('./config');

  // data.sources.map((source, sourcesIndex) => {
  //   request.get(`https://newsapi.org/v1/articles?source=${source.id}&apiKey=${newsApiKey}`, (err, response, body) => {
  //     body = JSON.parse(body);

// const URL_BASE = 'https://newsapi.org/v1/sources?language=en';


// get the list of sources
const getSources = (endpoint, params) => {
  return axios.get('https://newsapi.org/v1/sources?language=en').then(response => {

    const sources = response.data.sources;

    const data = sources.map((source, index) => {
      const name = source.name;

      return `Source ${index+1} is ${name}.`
    })

    console.log(data);
  })
}
console.log(getSources())

const getSourceAt = (num) => {
  return axios.get('https://newsapi.org/v1/sources?language=en').then(response => {
    const sources = response.data.sources;
    const sourceChosen = sources[num];

    return sourceChosen;
  })

}


// get the list of titles
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
    getSources,
    getSourceAt,
};
