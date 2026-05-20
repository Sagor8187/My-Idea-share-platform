import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/component/Navber";
import NextThemeprovider from "@/provider/NextThemeprovider";
import Footer from "@/component/Footer";
import  { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next Idea | Home",
  description: "Share your idea present your telent",
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NextThemeprovider>
            <Navber></Navber>
        {children}
        <Footer></Footer>
        <Toaster />
        </NextThemeprovider>



        </body>
    </html>
  );
}
