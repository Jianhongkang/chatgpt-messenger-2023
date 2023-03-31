'use client'

import { db } from '../firebase';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { Timestamp, addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import React, { FormEvent, useState } from 'react'
import toast from 'react-hot-toast';
import ModelSelection from './ModelSelection';
import useSWR from 'swr'

type Props = {
    chatId:string;
  }

function ChatInput({chatId}:Props) {
    const [propmt,setPrompt] = useState("");
    const {data:session} = useSession();

    // TODO: useSWR to get model
    //const model = 'text-davinci-003'
    const { data: model } = useSWR('Model', {
        fallbackData: 'text-davinci-003'
    })

    const sendMessage = async (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!propmt) return;

        // Toast notification to say loading
        const notify = toast.loading('ChatGPT is thinking...');

        const input =propmt.trim();
        setPrompt("");
        
       
        const message: Message = {
            text: input,
           // createdAt: serverTimestamp(),
           createdAt: Timestamp.now(),
            user: {
                _id: session?.user?.email!,
                name: session?.user?.name!,
                avatar: session?.user?.image || `https://ui-avatars.com/api?name=${session?.user?.name}`
            }
        }
        await addDoc(
            collection(db,'users',session?.user?.email!,'chats',chatId,'messages'),
            message
            )

       // ASK QUESTION TO OPENAI
       await fetch('/api/ask-question', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                text: input,
                chatId,
                model,
                session,
                timestamp: Timestamp.now()
            })
        }).then(() => {
            // TOAST NOTIFICATION TO SAY SUCCESS
            toast.success('ChatGPT has responded!', {
                id: notify
            })
        }).catch((err) => {
            toast.error(`Backend (Error: ${err.message})`, {
                id: notify
            })
        })
    }


   

  return (
    <div className='bg-gray-700/50 text-gray-400 rounded-lg text-sm'>
       <form onSubmit={sendMessage}  className='p-5 space-x-5 flex'>
         <input 
         className='bg-transparent focus:outline-none flex-1
         disabled:cursor-not-allowed disabled:text-gray-300'
         disabled={!session}
         value={propmt}
         onChange={(e)=> setPrompt(e.target.value)}
         
         type='text' placeholder='please type your question here...'/>
         <button 
         disabled={!propmt || !session}
         type='submit'
         className='bg-[#11a37f] hover:opacity-50 text-white font-bold
         px-4 py-2 rounded disabled:bg-gray-300
         disabled:cursor-not-allowed'>
        <PaperAirplaneIcon className='h-4 w-4 -rotate-45'></PaperAirplaneIcon>
         </button>
       </form> 
       
       <div className='md:hidden'>
            <ModelSelection/>
         </div>
    </div>
  )
}

export default ChatInput


