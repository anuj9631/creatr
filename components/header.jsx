"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

import { BarLoader } from "react-spinners";
import { useStoreUser } from "@/hooks/use-store-user";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";

const Header = () => {
  const { isLoading, isAuthenticated } = useStoreUser();
  const path = usePathname();

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4">
      <div className="relative backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-6 py-3 flex items-center">

        <Link href={isAuthenticated ? "/feed" : "/"} className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Creatr Logo"
            width={96}
            height={32}
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </Link>

        {/* Navigation for landing page only - Hidden on mobile to save space */}
        {path === "/" && (
          <div className="hidden lg:flex space-x-6 flex-1 justify-center">
            <Link
              href="#features"
              className="text-white font-medium transition-all duration-300 hover:text-purple-300 cursor-pointer"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-white font-medium transition-all duration-300 hover:text-purple-300 cursor-pointer"
            >
              Testimonials
            </Link>
          </div>
        )}
        
        {/* Auth Actions */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">

         <SignedIn>
           {/* Show Dashboard link on feed page */}
            {path === "/feed" && (
              <Link href="/dashboard">
                <Button variant="outline" className="hidden sm:flex" size="sm">
                  <LayoutDashboard className="h-4 w-4" />
                  <span className="hidden md:inline ml-2">Dashboard</span>
                </Button>
              </Link>

            )}
          <UserButton />
        </SignedIn>


        <SignedOut>
          <SignInButton>
            <Button variant="ghost" size="sm">Sign In</Button>
          </SignInButton>
          <SignUpButton>
            <Button variant="primary" size="sm" className="whitespace-nowrap">
              Get Started
            </Button>
          </SignUpButton>
        </SignedOut>
</div>
       

        {isLoading && (
          <div className="fixed bottom-0 left-0 w-full z-40 flex justify-center">
            <BarLoader width={"95%"} color="#D8B4FE" />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
