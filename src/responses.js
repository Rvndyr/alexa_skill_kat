const {
  getArticles,
} = require('./actions');



const initSessionAttributes = () => {
    // If we wanted to initialize the session to have some attributes we could add those here.
    const sessionAttributes = {};

    return sessionAttributes;
}

const getWelcomeResponse = () => {
    const cardTitle = 'Whats New?';
    const speechOutput = 'Welcome to read about it, You can ask me for updates on articles. ';
    // only giving updates on the newsAPI for now -- 6/13/17
    // If the user either does not reply to the welcome message or says something that is not
    // understood, they will be prompted again with this text.
    const repromptText = 'Ask me about New articles';
    const shouldEndSession = false;

    return Promise.resolve()
        .then(_ => [
            cardTitle,
            speechOutput,
            repromptText,
            shouldEndSession
        ]);
}


const getNewsArticles = () => getArticles().then(articles => {
  const cardTitle = 'News Updates';
  const speechOutput = 'Here are the latest articles ' + articles;

  const repromptText = 'Would you like to continue hearing the latest articles?'
  const shouldEndSession = false;

  return [
    cardTitle,
    speechOutput,
    repromptText,
    shouldEndSession
  ];
})


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
        case 'newsArticlesIntent':
            return  getNewsArticles(); /* this will get you the news article sources API call */;
        case ''
            return
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
