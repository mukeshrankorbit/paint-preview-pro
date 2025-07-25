
import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import HowItWorks from '@/components/sections/HowItWorks';
import Features from '@/components/sections/Features';
import WhyPaintersLoveIt from '@/components/sections/WhyPaintersLoveIt';
import Testimonials from '@/components/sections/Testimonials';
import PricingPreview from '@/components/sections/PricingPreview';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';

const Index = () => {
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(window.location.hash.replace('#', ''));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // slight delay to ensure DOM is ready
      }
    }
  }, []);

  return (
    <Layout>
      <div className="min-h-screen">
        <Hero />
        <HowItWorks />
        <Features />
        <WhyPaintersLoveIt />
        <Testimonials />
        <PricingPreview />
        <FAQ />
        <FinalCTA />
      </div>
    </Layout>
  );
};

export default Index;
