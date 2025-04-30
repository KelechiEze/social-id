'use client';

import Navbar from './components/Navbar/Navbar';
import HomeSection from './components/HomeSection/HomeSection';
import ContactCenter from './components/ContactCenter/ContactCenter';
import ContactComponent from './components/ContactComponent/ContactComponent';
import ServicesComponent from './components/ServicesComponent/ServicesComponent';
import TestimonialsComponent from './components/TestimonialsComponent/TestimonialsComponent';
import StepsComponent from './components/StepsComponent/StepsComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSection />
      <ContactCenter />
      <ServicesComponent />
      <StepsComponent />
      <TestimonialsComponent />
      <ContactComponent />
      <FooterComponent />
    </main>
  );
}
