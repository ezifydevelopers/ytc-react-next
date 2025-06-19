export const metadata = {
    title: "YTC HealthCare Homecare staffing provider",
    description: "YTC HealthCare: Your Healthcare Staffing Provider",
    alternates: {
      canonical: 'https://ytchealthcare.com/homecare-staffing-services/',
    },
    icons: {
      icon: "/favicon.ico", 
    },
  };
  
  export default function HomeCareLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  