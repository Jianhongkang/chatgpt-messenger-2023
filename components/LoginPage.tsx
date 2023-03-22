// // Mark the component using createContext as a Client Component 
// // by adding 'use client' at the top of the file.
'use client'

import Image from 'next/image';
import { signIn ,signOut,useSession} from 'next-auth/react';


export default function LoginPage() {

  return (
    <>
        <div className='bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center'>
            <Image 
                src='https://links.papareact.com/2i6'
                width={300}
                height={300}
                alt='chatgpt-logo'
            />
            <button 
             className='text-white font-semibold text-3xl animate-pulse'
             onClick={(e) => {
                e.preventDefault()
                signIn('google')}}
                >Sign In with Google to use ChatGPT
             </button>

             <button 
             className='text-white font-semibold text-3xl animate-pulse'
             onClick={(e) =>{
                e.preventDefault()
                signIn('github')}} >
                Sign In with github to use ChatGPT
             </button>

            </div>
        </>
    );
}



