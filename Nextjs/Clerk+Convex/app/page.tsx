import { Poppins } from 'next/font/google'
import {Snippet} from "@nextui-org/snippet";
import { UserButton} from '@clerk/nextjs';
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['700'],
})

export default function Home() {
  return (
    <div className="relative flex items-center justify-center w-full h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-70"></div>
        
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
        
        {/* Radial gradient for a subtle glow effect */}
        <div className="absolute inset-0 bg-radial-gradient opacity-40"></div>
      </div>
      <h1 className={`${poppins.className} text-6xl sm:text-8xl font-bold text-white z-10 animate-float`}>
        Welcome To
        <div className="text-4xl sm:text-6xl">
        <Snippet>
          Clerk+Convex
        </Snippet>
        </div>
        <div className="text-2xl sm:text-4xl justify-center mx-auto">
          <UserButton/>
        </div>
      </h1>
    </div>
  )
}

