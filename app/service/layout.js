export const metadata = {
    title: "YTC HealthCare Service",
    description: "YTC HealthCare: Your Healthcare Staffing Provider",
    alternates: {
      canonical: 'https://ytchealthcare.com/service/',
    },
    icons: {
      icon: "/favicon.ico", 
    },
  };
  
  export default function ServiceLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  