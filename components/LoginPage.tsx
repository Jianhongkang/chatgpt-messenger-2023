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
             className=' font-semibold text-base flex max-w-[500px] items-center 
             justify-start px-5 py-3 space-x-2  rounded-lg bg-white mb-4
             hover:bg-gray-700/30 cursor-pointer transition-all duration-200 ease-out'
             onClick={(e) => {
                e.preventDefault()
                signIn('google')}}
                >
                <img  src='https://authjs.dev/img/providers/google.svg'></img>
                <p>Sign In with Google</p>    
             </button>

             <button 
             className=' font-semibold text-base flex max-w-[500px] items-center 
             justify-start px-5 py-3 space-x-2  rounded-lg bg-white
             hover:bg-gray-700/30 cursor-pointer transition-all duration-200 ease-out'
             onClick={(e) =>{
                e.preventDefault()
                signIn('github')}} >
                <img  src='https://authjs.dev/img/providers/github.svg'></img>
                <p>Sign In with Github </p>
             </button>

            </div>
        </>
    );
}



