export const metadata = {
    title: "YTC HealthCare Blog",
    description: "YTC HealthCare: blogs",
    alternates: {
      canonical: 'https://ytchealthcare.com/blog/',
    },
    icons: {
      icon: "/favicon.ico", 
    },
  };
  
  export default function AboutLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    );
  }
  