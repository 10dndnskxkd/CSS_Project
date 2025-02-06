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
                    // display: 'flex',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    // flexDirection: 'column',
                    // height: '100vh',
                    // textAlign: 'center',
                    // margin: 0,
                    // padding: 0,

                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundAttachment: "fixed",
                    minHeight: "100vh",
                    width: "100vw"
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
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
                        color: '#222',
                        textAlign: 'center',
                        marginBottom: '10px'
                    }}>
                        Safeguard.Nurture.Cherish
                    </h1>
                    
                    <p style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: '18px',
                        fontWeight: '300',
                        color: '#444',
                        textAlign: 'center',
                        maxWidth: '700px',
                        margin: '0 auto'
                    }}>
                        To ensure a clean and sustainable environment for Singapore, together with our partners and the community
                    </p>

                    <Link href="/DASHBOARD">
                        <button
                            style={{
                                marginTop: '20px',
                                padding: '15px 30px',
                                fontSize: '16px',
                                cursor: 'pointer',
                                backgroundColor: '#4d947a',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                            }}
                        >
                            Dashboard
                        </button>
                    </Link>
                </div>

                {/* Social Media Links */}
                <div
                    style={{
                        marginTop: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '20px',
                    }}
                >
                    <Link href="https://www.facebook.com/NEASingapore/" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={40} color="#000000" />
                    </Link>
                    <Link href="https://www.youtube.com/channel/UC-tjEFkd0tT2VpD5vbjyAKA" target="_blank" rel="noopener noreferrer">
                        <FaYoutube size={40} color="#000000" />
                    </Link>
                    <Link href="https://www.x.com/NEAsg" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={40} color="#000000" />
                    </Link>
                    <Link href="https://www.instagram.com/nea_sg/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={40} color="#000000" />
                    </Link>
                </div>
            </div>
        </WeatherBackground>
    );
}
