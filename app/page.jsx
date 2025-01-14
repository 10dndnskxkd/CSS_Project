import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaGooglePlay, FaApple } from 'react-icons/fa'; // Import icons

export default function Home() {
    return (
        <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            flexDirection: 'column', // Ensure content is stacked vertically
            height: '100vh', 
            textAlign: 'center', 
            backgroundImage: 'url(/background.jpg)', // Use the correct image file name
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            margin: 0, // Ensure no margin
            padding: 0 // Ensure no padding
        }}>
            <div>
                <img src="/neamascot.png" alt="NEA mascot" style={{ width: '450px', height: 'auto', marginRight: '20px' }} />
                <h2 style={{ fontSize: '36px' }}>Safeguard.Nurture.Cherish</h2> {/* Change font size here */}
                <p style={{ fontSize: '18px' }}>To ensure a clean and sustainable environment for Singapore, together with our partners and the community.</p> {/* Change font size here */}
                <Link href="/DASHBOARD">
                    <button style={{ marginTop: '20px', padding: '15px 30px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#4d947a', color: '#fff', border: 'none', borderRadius: '5px' }}>
                        Dashboard
                    </button>
                </Link>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <Link href="https://www.facebook.com">
                    <FaFacebook size={40} color="#42627d" />
                </Link>
                <Link href="https://www.youtube.com">
                    <FaYoutube size={40} color="#42627d" />
                </Link>
                <Link href="https://www.twitter.com">
                    <FaTwitter size={40} color="#42627d" />
                </Link>
                <Link href="https://www.instagram.com">
                    <FaInstagram size={40} color="#42627d" />
                </Link>
            </div>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <Link href="https://play.google.com/store/apps/details?id=sg.gov.nea&hl=en&pli=1">
                    <FaGooglePlay size={40} color="#42627d" />
                </Link>
                <Link href="https://apps.apple.com/sg/app/myenv/id444435182">
                    <FaApple size={40} color="#42627d" />
                </Link>
            </div>
        </div>
    );
}