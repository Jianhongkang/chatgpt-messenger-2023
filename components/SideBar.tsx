//Mark the component using createContext as a Client Component by adding 'use client' at the top of the file.
'use client'


import { signOut, useSession } from "next-auth/react"
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, deleteDoc, doc, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";
import NewChat from "./NewChat";
import ModelSelection from "./ModelSelection";
import { MoonIcon, SunIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";


type Props = {};

const SideBar: React.FC<Props> = ({ }) => {

  const {data:session} = useSession();

  //List the newchat in asc order
  const [chats, loading, error] = useCollection(
    session && query(
      collection(db, "users", session?.user?.email!, "chats")
    )
  );
  if (!loading && !error && chats) {
      const sortedChats = chats.docs.map
      ((doc) => doc.data()).sort((a, b) => a.createdAt - b.createdAt);
  }
  
// delete all chats function
  const deleteAllChats = async () => {
  const userChatsRef = collection(db, "users", session?.user?.email!, "chats");
  const userChatsSnapshot = await getDocs(userChatsRef);

  userChatsSnapshot.forEach(async (chatDoc: { id: string; }) => {
    await deleteDoc(doc(db, "users", session?.user?.email!, "chats", chatDoc.id));
  });
};


const [isDarkMode, setIsDarkMode] = useState(true)

const toggleTheme = () => {
  setIsDarkMode(!isDarkMode)
  document.documentElement.classList.toggle('dark')
}


  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat/>
        <div className="hidden sm:inline">
          <ModelSelection/>
        </div>

        {/* map through the chatrows */}
        <div className="flex flex-col space-y-2 my-2">
             {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats</p>
              </div>
             )}
             
             {chats?.docs.map(chat =>(
            <ChatRow key={chat.id} id={chat.id} />
          ))}
        </div>
        </div>
      </div>

      {/* Clear history Part */}
      <div onClick={deleteAllChats} className="chatrow">
        <TrashIcon className="h-5 w-5"/>
        <p>Clear history </p>
      </div> 

      {/* Theme Mode Part */}
     
      {/* //TODO: Fix the theme mode(default is dark mode) */}
      
      <div className="chatrow" onClick={toggleTheme}>
        {isDarkMode ? <MoonIcon className='h-5 w-5' /> : <SunIcon className='h-5 w-5' />}
        <p className='flex-1'>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</p>
      </div> 
    
     {/* Logout part */}
      <div onClick={(e) => { e.preventDefault(); signOut();} }
      className="chatrow">
      {session && (
        <img
          src={session.user?.image!}
          alt="profile pic"
          className="h-5 w-5 rounded-full cursor-pointer hover:opacity-50"
          />
       )}
      <p>Log out</p>
      </div>

    </div>
  )
}

export default SideBar