export const metadata = {
    title: "YTC HealthCare Healthcare Staffing",
    description: "YTC HealthCare: Your Healthcare Staffing Provider",
    alternates: {
      canonical: 'https://ytchealthcare.com/healthcare-staffing/',
    },
    icons: {
      icon: "/favicon.ico", 
    },
  };
  
  export default function StaffingLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  