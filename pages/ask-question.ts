
import type { NextApiRequest, NextApiResponse } from 'next'
import query  from '../lib/queryApi'
import admin from 'firebase-admin'
import { adminDb } from '@/firebaseAdmin'

type Data = {
 message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { text, chatId, model, session} = req.body

    if (!text) {
        return res.status(400).json({ message: 'Please provide a prompt!' })
    }

    if (!chatId) {
        return res.status(400).json({message: 'Please provide a valid chat ID' })
    }

    // chatgpt query
    const response = await query(text,chatId,model)

    const message : Message = {
      text: response?.toString() || "ChatGPT was unable to find an answer for that!",
      createdAt: admin.firestore.Timestamp.now(),
      user:{
        _id:"ChatGPT",
        name:"ChatGPT",
        avatar:"https://links.papareact.com/89k",
      }
    }
    await adminDb
    .collection('users').doc(session.user.email)
    .collection('chats').doc(chatId)
    .collection('messages').add(message)

    return res.status(200).json({ message: message.text })
}