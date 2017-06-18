const axios = require('../node_modules/axios/index')
const {
    newsApiKey,
} = require('./config');

// get the list of sources
const getSources = (endpoint, params) => {
  return axios.get('https://newsapi.org/v1/sources?language=en').then(response => {

    const sources = response.data.sources;
    // console.log('-------')
    const obj = [];
    const data = sources.map((source, index) => {
      const name = source.name;
      // console.log(source.name);
      obj.push(source.name)
      return `Source ${index+1} is ${name}.`
    })

    // console.log(obj)

    return data;
    // console.log(data);
  })
}
// console.log(getSources())

const getSourceAt = (num) => {
  return axios.get('https://newsapi.org/v1/sources?language=en').then(response => {
    const sources = response.data.sources;
    const sourceChosen = sources[num];
// console.log(sourceChosen)
    return sourceChosen;
  })
}
// console.log(getSourceAt())

// get the list of titles
const getTitle = (sourceId) => {
    return axios.get(`https://newsapi.org/v1/articles?source=${sourceId}&apiKey=${newsApiKey}`).then(response => {


      const articles = response.data.articles;

      const data = articles.map((article, index) => {
        const title = article.title;
        const description = article.description;

        return `Article number ${index+1} is ${title}.`
      })


      return data;
    })
}

const getTitleAt = (num, sourceId) => {
  return axios.get(`https://newsapi.org/v1/articles?source=${sourceId}&apiKey=${newsApiKey}`).then(response => {

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
