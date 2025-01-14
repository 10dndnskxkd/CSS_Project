import { Inter } from 'next/font/google'
import './globals.css'
import Link from "next/link";
import Navbar from "./ui/Navbar"; // Updated path

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CSS Assmt',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}