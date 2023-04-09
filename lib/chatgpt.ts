//const { Configuration, OpenAIApi } = require("openai");

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY_HERE,
  });
  const openai = new OpenAIApi(configuration);

export default openai;

