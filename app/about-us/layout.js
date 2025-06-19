export const metadata = {
  title: "YTC HealthCare About us",
  description: "YTC HealthCare: About Us",
  alternates: {
    canonical: 'https://ytchealthcare.com/about-us/',
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
