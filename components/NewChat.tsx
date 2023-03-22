//Mark the component using createContext as a Client Component by adding 'use client' at the top of the file.
// 'use client'

import { PlusIcon } from "@heroicons/react/24/solid"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation"; //Be careful the router path
import {db} from "../firebase";


function NewChat() {
  const router = useRouter()
  const {data:session} = useSession();

  const createNewChat = async() =>{
    const doc = await addDoc(
      collection(db,"users",session?.user?.email!,"chats"),{
        userId:session?.user?.email!,
        createAt: serverTimestamp()

      }
    );
    router.push(`/chat/${doc.id}`)
  }



  return (
    <div onClick={createNewChat} className="border-gray-700 border chatrow">
        <PlusIcon className="w-4 h-4"></PlusIcon>
        <p className=" text-white">New Chat</p>
    </div>

  )
}

export default NewChat