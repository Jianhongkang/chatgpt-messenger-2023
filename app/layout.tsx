
import SideBar from '@/components/SideBar'
import LoginPage from '@/components/LoginPage'
import './../styles/globals.css'
 import SessionProvider from '../providers/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '../pages/api/auth/[...nextauth]'
import ClientProvider from '@/providers/ClientProvider'
import dynamic from 'next/dynamic';

const DynamicContextProvider = dynamic(() => import('../providers/ThemeProvider'), {
  ssr: false
});
export default async function RootLayout({children}:{
  children:React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  //console.log(session);
  
 

  return (
  <html >
    <head/>
    <body>
    
      <SessionProvider session={session}>
          {!session ? (
            <LoginPage />
          ) : (
          <DynamicContextProvider>
            <div className='flex'>
              {/* Sidebar */}
              <div className='bg-[#202123] max-w-xs h-screen overflow-auto md:min-w-[16.5rem] '>
                <SideBar />
              </div>

             <ClientProvider/>

            {/* <div className='bg-[#343541] flex-1'>  */}
          <div className='bg-white dark:bg-[#343541] flex-1 duration-300'>
              {children}
          </div>
            
            </div>
          </DynamicContextProvider>
          )}
        </SessionProvider>
      
     
      </body>
  </html>
  )
}
