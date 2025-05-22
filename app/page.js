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
export default function Home() {
  return (
      <div>
          <Header />
          <HeroSection />
          <StaffingSolutions />
          <SalaryGuideSection />
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