
// Mark the component using createContext as a Client Component 
// by adding 'use client' at the top of the file.
'use client'

//import { Session } from 'next-auth'

import { type Session } from 'next-auth';
import { SessionProvider as Provider } from 'next-auth/react'

type Props = {
    children: React.ReactNode,
    session: Session | null
};


 const SessionProvider: React.FC<Props> = ({ children, session }) => {
  return (
    <Provider session={session}>
     {children}
    </Provider>
    
  )
}

export default SessionProvider
