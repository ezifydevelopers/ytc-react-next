import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Chatbot from './components/Chatbot';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "YTC HealthCare",
  description: "YTC HealthCare: Your Healthcare Staffing Provider",
  alternates: {
    canonical: 'https://ytchealthcare.com',
  },
  icons: {
    icon: "/favicon.ico", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
