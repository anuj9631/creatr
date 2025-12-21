"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import {BarLoader} from 'react-spinners';
import {useStoreUser} from '@/hooks/use-store-user'

const Header = () => {

const {isLoading, isAuthenticated} = useStoreUser();

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-3 flex justify-between">

        <SignedOut>
          <SignInButton />
          <SignUpButton>
            <button className="bg-[#6c47ff] rounded-full px-5 py-2">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>

        {
          isLoading && (
            <div className="fixed bottom-0 left-0 w-full z-40 flex justify-center">
                <BarLoader width={'95%'} color='#D8B4FE'/>
            </div>
          )
        }

      </div>
    </header>
  );
};

export default Header;
