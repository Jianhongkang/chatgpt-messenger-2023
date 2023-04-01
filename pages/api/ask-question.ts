
import type { NextApiRequest, NextApiResponse } from 'next'
import query  from '../../lib/queryApi'
import admin from 'firebase-admin'
import { adminDb } from '../../firebaseAdmin'

type Data = {
  answer: string | any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
      const { text, chatId, model, session, timestamp } = req.body

      if (!text) {
          return res.status(400).json({ answer:'Please provide a prompt!' })
      }

      if (!chatId) {
          return res.status(400).json({ answer: 'Please provide a valid chat ID' })
      }

      // console.log(req.body)

      // ChatGPT Query
      

      const response = await query(text,chatId,model)
       console.log(response);
          
      const message: Message = {
          text: response|| "ChatGPT was unable to find an answer for that!",
          createdAt: admin.firestore.Timestamp.now().seconds < timestamp.seconds ? timestamp : admin.firestore.Timestamp.now(),
          // createdAt: firestore.Timestamp.now(),
          user: {
              _id: 'ChatGPT',
              name: 'ChatGPT',
              avatar: 'https://links.papareact.com/89k',
          }
      }

      await adminDb
          .collection('users').doc(session.user.email)
          .collection('chats').doc(chatId)
          .collection('messages').add(message)


      return res.status(200).json({ answer: message.text })
  } catch (error: any) {
      console.log(error)
      return res.status(500).json({answer:error.message })
  }
}
