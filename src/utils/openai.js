// src/utils/openai.js
const OpenAI = require('openai');

let openaiClient = null;

async function initializeOpenAI(apiKey) {
  openaiClient = new OpenAI({
    apiKey: apiKey,
  });
}

async function sendAudioToOpenAI(audioData, mimeType) {
  try {
    const buffer = Buffer.from(audioData, 'base64');

    const transcription = await openaiClient.audio.transcriptions.create({
      file: buffer,
      model: "whisper-1",
    });

    console.log('OpenAI transcription:', transcription.text);
    return transcription.text;
  } catch (error) {
    console.error('Error sending audio to OpenAI:', error);
    return null;
  }
}

async function sendTextToOpenAI(text) {
  try {
    const completion = await openaiClient.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: text }],
    });

    console.log('OpenAI completion:', completion.choices[0].message.content);
    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error sending text to OpenAI:', error);
    return null;
  }
}

module.exports = {
  initializeOpenAI,
  sendAudioToOpenAI,
  sendTextToOpenAI,
};
