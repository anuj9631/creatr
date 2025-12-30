import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ConvexClientProvider } from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { shadesOfPurple } from "@clerk/themes";
import Header from '@/components/header'
import Image from "next/image";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Content Platform",
  description: "Content Creation powered by AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          forcedTheme="dark"   
          disableTransitionOnChange
        >
          <ClerkProvider
           appearance={{
            baseTheme: shadesOfPurple,
           }}
          >
            <ConvexClientProvider>

              <Header />
              <main className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
                {children}
              </main>
           <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-6 w-full text-gray-400 mt-10">
  <div className="flex flex-col md:flex-row justify-between gap-10 border-b border-gray-500/20 pb-6">

    <div className="max-w-md">
      <Image
        src="/logo.png"
        alt="Creatr logo"
        width={140}
        height={36}
        priority
        className="cursor-pointer"
      />

      <p className="mt-4 text-sm leading-relaxed hidden md:block">
        Creatr is an AI-powered content creation platform built for modern creators.
      </p>
    </div>

    <div className="flex flex-col sm:flex-row gap-14 md:gap-20">

      <div>
        <h2 className="font-semibold mb-3 text-gray-300">Company</h2>
        <ul className="text-sm space-y-1.5">
          <li><a href="/" className="hover:text-white cursor-pointer">Home</a></li>
          <li><a href="/" className="hover:text-white cursor-pointer">About</a></li>
          <li><a href="/footer" className="hover:text-white cursor-pointer">Contact</a></li>
          <li><a href="/privacy" className="hover:text-white cursor-pointer">Privacy Policy</a></li>
        </ul>
      </div>

      <div className="max-w-sm">
        <h2 className="font-semibold text-gray-300 mb-3">
          Subscribe to our newsletter
        </h2>

        <div className="flex items-center gap-2 pt-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-500/30 bg-slate-900 placeholder-gray-500
                       focus:ring-2 focus:ring-indigo-600 outline-none
                       w-full h-9 rounded px-3 text-sm cursor-text"
          />
          <button
            className="bg-indigo-600 hover:bg-indigo-500 transition
                       w-24 h-9 rounded text-sm text-white font-medium cursor-pointer"
          >
            Subscribe
          </button>
        </div>
      </div>

    </div>
  </div>

  <p className="pt-3 pb-3 text-center text-xs md:text-sm">
    © 2025 <a href="/" className="hover:text-white cursor-pointer">AnujDev</a>. All rights reserved.
  </p>
</footer>


            </ConvexClientProvider>
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
