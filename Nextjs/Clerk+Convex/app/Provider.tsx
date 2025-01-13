"use client";
import { ClerkProvider, SignUp, SignIn, useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { Authenticated, ConvexReactClient, Unauthenticated } from "convex/react";
import { useState } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

export default function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <ClerkProvider>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        <html lang="en">
          <body>
            <Unauthenticated>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                  <div className="text-center text-2xl font-bold gap-2 flex mb-4">
                  <button className="rounded p-4 mx-auto  bg-red-950" onClick={() => setIsSignUp(true)}>Sign Up</button>
                  <button className="rounded p-4 mx-auto  bg-yellow-950" onClick={() => setIsSignUp(false)}>Sign In</button>
                  </div>
                  {isSignUp ? <SignUp /> : <SignIn />}
                </div>
              </div>
            </Unauthenticated>
            <Authenticated>
              {children}
            </Authenticated>
          </body>
        </html>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
