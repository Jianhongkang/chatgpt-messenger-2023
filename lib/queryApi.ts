

import openai from './chatgpt'

const query= async (
  text:string,
  chatId: string,
  model:string) =>{

    const res = openai.createCompletion({
        model,
        prompt:text,
        temperature: 0.9, //0.9 0.7 0
        top_p: 1,
        max_tokens: 1000, //1000 64 3000
        frequency_penalty: 0.5, // 0 0.5
        presence_penalty: 0
    })
        .then(res => { res.data.choices[0].text
        })
        .catch(
            (err) => {
           `ChatGPT was unable to answer! 
           (Error:${err})`
        })

    return res

     
}

export default query