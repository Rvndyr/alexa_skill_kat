const {
  getTitle,
  getTitleAt,
  getSources,
  getSourceAt,
} = require('./NewsAPI');



const initSessionAttributes = () => {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};

    return sessionAttributes;
}

const getWelcomeResponse = () => {
    const cardTitle = 'Articles';
    const speechOutput = 'Welcome to read about it, You can ask me for sources on articles. ';
    // only giving updates on the newsAPI for now -- 6/13/17
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'ask me about sources';
    const shouldEndSession = false;

    return Promise.resolve()
        .then(_ => [
            cardTitle,
            speechOutput,
            repromptText,
            shouldEndSession
        ]);
}
const getSourcesById = () => getSources().then(sources => {
  const cardTitle = 'Article Sources';
  const speechOutput = 'Here is a list of Sources';

  const repromptText = 'Ask me to list Sources to choose an article'
  const shouldEndSession = false;

  return [
    cardTitle,
    speechOutput,
    repromptText,
    shouldEndSession
  ];

})

const getArticleTitle = () => getTitle().then(articles => {
  const cardTitle = 'News Updates';
  const speechOutput = 'Here are the latest articles. ' + articles.join(' ');

  const repromptText = 'Would you like to continue hearing the latest articles?'
  const shouldEndSession = false;

  return [
    cardTitle,
    speechOutput,
    repromptText,
    shouldEndSession
  ];
})

const getSourcesNum = (request) => Promise.resolve().then(_ => {
  const sourceNum = request.intent.slots.SourceNum.value;
  return getSourceAt(sourceNum).then(sourceChosen => {
    const title = sourceChosen.name;
    const cardTitle = `${title}`;
    const speechOutput = `Source title is ${title}.`;

    const repromptText = 'ask me to list sources or cancel';
    const shouldEndSession = false;

    return [
      cardTitle,
      speechOutput,
      repromptText,
      shouldEndSession,
    ];
  })
});

const getArticleNum = (request) => Promise.resolve().then(_ => {
  const articleNum = request.intent.slots.ArticleNum.value;
  return getTitleAt(articleNum).then(articleChosen => {
    const title = articleChosen.title;
    const description = articleChosen.description;
    const imgUrl = articleChosen.urlToImage;
    console.log(imgUrl);
    const cardTitle = `${title}`;
    const speechOutput = `Article title is ${title}. Description is: ${description}`;

    const repromptText = 'ask me to list the articles or cancel';
    const shouldEndSession = false;

    return [
      cardTitle,
      speechOutput,
      repromptText,
      shouldEndSession,
      imgUrl,
    ];
  })
});


const getEndResponse = () => {
    const cardTitle = 'Conversation completed.';
    const speechOutput = 'Thanks for using Alexa Bot';
    const shouldEndSession = true;

    return Promise.resolve()
        .then(_ => [
            cardTitle,
            speechOutput,
            null,
            shouldEndSession
        ]);
}

const intentRequest = (intentRequest, session) => {
    const {intent} = intentRequest;
    const {name: intentName} = intent;

    switch (intentName) {
        case 'articlesTitleIntent':
            return  getArticleTitle(); /* this will get you the news article sources API call */;
        case 'sourcesIdIntent':
            return getSourcesById();  /* list all sources */
        case 'articlesTitleNumIntent':
            return getArticleNum(intentRequest); /* this will get you the specific number for each title 1-10*/
        case 'AMAZON.StopIntent':
        case 'AMAZON.CancelIntent':
            return getEndResponse();
        default:
            return getWelcomeResponse();
    }
}

module.exports = {
    getWelcomeResponse,
    intentRequest,
    initSessionAttributes,
}
