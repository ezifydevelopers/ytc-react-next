export const metadata = {
    title: "YTC HealthCare About us",
    description: "YTC HealthCare: Healthcare Careers",
    alternates: {
      canonical: 'https://ytchealthcare.com/healthcare-careers/',
    },
    icons: {
      icon: "/favicon.ico", 
    },
  };
  
  export default function HealthCareLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  