//Mark the component using createContext as a Client Component by adding 'use client' at the top of the file.
'use client'


import { signOut, useSession } from "next-auth/react"
import NewChat from "./NewChat"
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";
//import {db} from "../firebase";


function SideBar() {

  const {data:session} = useSession();

  const [chats, loading, error] = useCollection(
    session && collection(db,"users",session?.user?.email!,"chats")
  );
 // console.log(chats);
  
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat/>
        <div>{/* modelselection */}</div>
  
        {/* map through the chatrows */}
        {/* {chats?.docs.map(chat =>
          <ChatRow key={chat.id} id={chat.id}} />
        )} */}
        </div>
      </div>

      {session && (
      <img 
      src= {session.user?.image!} 
      alt="profile pic" 
      className="h-12 w-12 rounded-full cursor-pointer ma-auto mb-2 hover:opacity-50"
      onClick={(e) => {
        e.preventDefault()
        signOut()}}
      />
    )}
    </div>
  )
}

export default SideBar