import SideBar from '@/components/SideBar'
import LoginPage from '@/components/LoginPage'
import './../styles/globals.css'
 import SessionProvider from '../providers/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import ClientProvider from '@/providers/ClientProvider'


export default async function RootLayout({children,}:{
  children:React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  //console.log(session);
  
  return (
    <html >
      <body>
      <SessionProvider session={session}>
          {!session ? (
            <LoginPage />
          ) : (
            <div className='flex'>
              {/* Sidebar */}
              <div className='bg-[#202123] max-w-xs h-screen overflow-auto md:min-w-[16.5rem] '>
                <SideBar />
              </div>

             <ClientProvider/>
              <div className='bg-[#343541] flex-1'> {children}</div>
            </div>
          )}
        </SessionProvider>
     
        </body>
    </html>
  )
}
