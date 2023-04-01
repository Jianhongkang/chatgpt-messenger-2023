

import openai from './chatgpt'

const query = async (text: string, chatId: string, model: string) => {
  try {
    const res = await openai.createCompletion({
      model,
      prompt: text,
      temperature: 0.9,
      top_p: 1,
      max_tokens: 4000,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });

    return res.data.choices[0].text;
  } catch (error) {
    console.error(`ChatGPT was unable to answer! (Error: ${error})`);
    return undefined;
  }
};

export default query;
