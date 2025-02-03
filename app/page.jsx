import React from 'react';
import Link from 'next/link';
import WeatherBackground from './Components/WeatherBackground.jsx';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import icons
import Navbar from './ui/Navbar';  

export default function Home() {
    return (
        <WeatherBackground>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: '100vh',
                    color: "black",
                    textAlign: 'center',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    margin: 0,
                    padding: 0,
                }}
            >

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', textAlign: 'center' }}>
                    <img
                        src="/neamascot.png"
                        alt="NEA mascot"
                        style={{ width: '650px', height: 'auto', marginRight: '20px' }}
                    />
                    <h2 style={{ fontSize: '36px' }}>Safeguard.Nurture.Cherish</h2>
                    <p style={{ fontSize: '18px' }}>
                        To ensure a clean and sustainable environment for Singapore, together with our partners and the community.
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
