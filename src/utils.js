const buildSpeechletResponse = (title, output, repromptText, shouldEndSession, imgUrl = '')  => Object.assign({}, {
    outputSpeech: {
        type: 'PlainText',
        text: output,
    },
    card: {
        type: 'Standard',
        title: `${title}`,
        content: `${output}`,
        image: {
          smallImageUrl: `${imgUrl}`
        }
    },
    reprompt: {
        outputSpeech: {
            type: 'PlainText',
            text: repromptText,
        },
    },
    shouldEndSession,
});

module.exports = {
    buildSpeechletResponse,
}
