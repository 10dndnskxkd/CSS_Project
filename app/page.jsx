import React from 'react';
import Link from 'next/link';
import WeatherBackground from './Components/WeatherBackground.jsx';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaGooglePlay, FaApple } from 'react-icons/fa'; // Import icons

export default function Home() {
    return (
        <WeatherBackground>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column', // Ensure content is stacked vertically
                    height: '100vh',
                    color: "black",
                    textAlign: 'center',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    margin: 0, // Ensure no margin
                    padding: 0, // Ensure no padding
                }}
            >
                
                <div>
                    <img
                        src="/neamascot.png"
                        alt="NEA mascot"
                        style={{ width: '650px', height: 'auto', marginRight: '20px' }}
                    />
                    <h2 style={{ fontSize: '36px' }}>Safeguard.Nurture.Cherish</h2> {/* Change font size here */}
                    <p style={{ fontSize: '18px' }}>
                        To ensure a clean and sustainable environment for Singapore, together with our partners and the community.
                    </p>{' '}
                    {/* Change font size here */}
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
                    <Link href="https://www.facebook.com" target="_blank" re="noopener noreferrer">
                        <FaFacebook size={40} color="#42627d" />
                    </Link>
                    <Link href="https://www.youtube.com" target="_blank" re="noopener noreferrer">
                        <FaYoutube size={40} color="#42627d" />
                    </Link>
                    <Link href="https://www.twitter.com" target="_blank" re="noopener noreferrer">
                        <FaTwitter size={40} color="#42627d" />
                    </Link>
                    <Link href="https://www.instagram.com" target="_blank" re="noopener noreferrer">
                        <FaInstagram size={40} color="#42627d" />
                    </Link>
                </div>
            </div>
        </WeatherBackground>
    );
}
