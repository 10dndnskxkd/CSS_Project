import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "./ui/Navbar"; // Keep your existing import

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CSS Assmt',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000, padding: '0', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', padding: '10px 20px' }}>
            <img src="/nea.png" alt="NEA logo" style={{ width: '150px', height: 'auto' }} />
            <Navbar />
          </div>
        </div>
        <div style={{ paddingTop: '80px', width: '100vw', height: '100vh', boxSizing: 'border-box' }}> {/* Adjust padding to match the height of the fixed header */}
          {children}
        </div>
      </body>
    </html>
  )
}