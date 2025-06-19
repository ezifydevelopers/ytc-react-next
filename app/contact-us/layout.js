export const metadata = {
    title: "YTC HealthCare About us",
    description: "YTC HealthCare: Contact Us",
    alternates: {
      canonical: 'https://ytchealthcare.com/contact-us/',
    },
    icons: {
      icon: "/favicon.ico", 
    },
  };
  
  export default function ContactLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  