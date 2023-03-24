//Mark the component using createContext as a Client Component by adding 'use client' at the top of the file.
'use client'


import { signOut, useSession } from "next-auth/react"
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query } from "firebase/firestore";
import { db } from "@/firebase";
import ChatRow from "./ChatRow";
import NewChat from "./NewChat";

type Props = {};

function SideBar() {

  const {data:session} = useSession();

  const [chats, loading, error] = useCollection(
    session && 
      collection(db,"users",session?.user?.email!,"chats"))
     // orderBy("createdAt", "asc");
   
  // const [chats, loading, error] = useCollection(
  //   query(
  //     collection(db, "users", session?.user?.email!, "chats"),
  //     orderBy("createdAt", "asc")
  //   ) 
      
  // );  
 // console.log(chats);
 
  
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat/>

           {/* map through the chatrows */}
          {chats?.docs.map(chat =>(
            <ChatRow key={chat.id} id={chat.id} />
          ))}

        

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