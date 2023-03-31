import type { NextApiRequest, NextApiResponse } from 'next'
import openai from '../../lib/chatgpt'

// Define the Option type, which represents an object with a value and label property
type Option = {
    value: string
    label: string
}

// Define the Data type, which represents an object with a modelOptions property that is an array of Option objects
type Data = {
    modelOptions: Option[]
}

// Define the handler function, which takes a NextApiRequest object and a NextApiResponse object with a Data type parameter
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // Call the OpenAI API's listModels method to get a list of available language models
    const models = await openai.listModels().then(res => res.data.data)

    // Map over the models and create an Option object for each one, using the model's ID as both the value and label properties
    const modelOptions = models.map(model => ({
        value: model.id,
        label: model.id
    }))

    // Return a response with a status code of 200 and a JSON object containing the modelOptions array
    return res.status(200).json({ modelOptions })
}
