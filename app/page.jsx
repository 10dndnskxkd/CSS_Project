import React from 'react';
import Link from 'next/link';
import WeatherBackground from './Components/page.jsx';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa';
import Navbar from './ui/Navbar';

export default function Home() {
    return (
        <WeatherBackground>
            <div
                style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    height: "100vh", // Ensure the height is 100% of the viewport height
                    width: "100vw",
                    overflow: "hidden", // Prevent scrolling
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <img
                    src="/neamascot.png"
                    alt="NEA mascot"
                    style={{ width: '650px', height: 'auto', marginBottom: '20px' }}
                />
                
                {/* Updated Heading & Paragraph */}
                <h1 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '60px',
                    fontWeight: '700',
                    color: '#white',
                    textAlign: 'center',
                    marginBottom: '10px'
                }}>
                    Safeguard.Nurture.Cherish
                </h1>
                
                <p style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: '18px',
                    fontWeight: '300',
                    color: '#white',
                    textAlign: 'center',
                    maxWidth: '700px',
                    margin: '0 auto'
                }}>
                    To ensure a clean and sustainable environment for Singapore, together with our partners and the community
                </p>

                {/* Social Media Links */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                        marginTop: '20px' // Add some margin to separate from the text
                    }}
                >
                    <Link href="https://www.facebook.com/NEASingapore/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={40} color="white" />
                    </Link>
                    <Link href="https://www.youtube.com/channel/UC-tjEFkd0tT2VpD5vbjyAKA" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={40} color="white" />
                    </Link>
                    <Link href="https://www.x.com/NEAsg" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={40} color="white" />
                    </Link>
                    <Link href="https://www.instagram.com/nea_sg/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={40} color="white" />
                    </Link>
                </div>
            </div>
        </WeatherBackground>
    );
}