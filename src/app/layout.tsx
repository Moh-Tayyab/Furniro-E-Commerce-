import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google"; // Corrected import path
import "./globals.css";



// Google Fonts configuration
const inter = Inter({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "E-Commerce Website",
  description: "E-commerce website built with Next.js, React, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${inter.className} bg-primary1 max-w-7xl container mx-auto`} // Added correct font classes
      >
        
        {children}
       
      </body>
    </html>
  );
}
