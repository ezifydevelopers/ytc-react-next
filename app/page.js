import Header from './components/header';
import Footer from './components/footer';
import HeroSection from './components/Home/HeroSection';
import StaffingSolutions from './components/Home/StaffingSolutions';
import SalaryGuideSection from './components/Home/SalaryGuideSection';
import HealthcareProfessional from './components/Home/HealthcareProfessional';
import YtcHealthcareSection from './components/Home/YtcHealthcareSection';
import ClientSatisfactionSection from './components/Home/ClientSatisfactionSection';
import FAQCard from './components/Home/FaqCard';
import NewsSection from './components/Home/NewsSection';
import ContactSection from './components/Home/ContactSection';
import CustomerTestimonial from './components/Home/CustomerTestimonial';
import Head from 'next/head';
import { HomeVideo } from './components/Home/HomeVideo';

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="canonical" href="https://ytchealthcare.com/" />
      </Head>
      <Header />
      <HeroSection />
      <StaffingSolutions />
      <SalaryGuideSection />
      <HomeVideo />
      <HealthcareProfessional />
      <YtcHealthcareSection />
      <ClientSatisfactionSection />
      <FAQCard />
      <NewsSection />
      <ContactSection />
      <CustomerTestimonial />
      <Footer />
    </div>
  );
}