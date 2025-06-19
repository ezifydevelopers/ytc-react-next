export const metadata = {
    title: "YTC HealthCare Job Opening",
    description: "YTC HealthCare: Job opening",
    alternates: {
      canonical: 'https://ytchealthcare.com/job-openings/',
    },
    icons: {
      icon: "/favicon.ico", 
    },
  };
  
  export default function JobOpeningLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  