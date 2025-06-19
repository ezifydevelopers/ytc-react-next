export const metadata = {
    title: "YTC HealthCare Healthcare Facilities",
    description: "YTC HealthCare: Healthcare Facilities",
    alternates: {
      canonical: 'https://ytchealthcare.com/healthcare-facilities/',
    },
    icons: {
      icon: "/favicon.ico", 
    },
  };
  
  export default function FacilitiesLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  