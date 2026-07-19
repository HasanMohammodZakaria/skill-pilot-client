import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import { ThemeProvider } from "next-themes";


import ConditionalChrome from "./components/conditionalChrome";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SkillPilot ",
  description: "Your AI-Powered Career & Learning Companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="dark"
       suppressHydrationWarning

    >
      <body className= {`${spaceGrotesk.variable} ${inter.variable} font-body antialiased `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
         <ConditionalChrome>{children}</ConditionalChrome>  
        
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
            theme="dark"
          />
           
        </ThemeProvider>
        
        </body>
    </html>
  );
}
