"use client";
import { ThemeProvider } from "next-themes";

export default function NextThemeprovider({children}) {
  return (
    
    <ThemeProvider attribute="class" defaultTheme="light" >
      {children}
    </ThemeProvider>
  )
}
