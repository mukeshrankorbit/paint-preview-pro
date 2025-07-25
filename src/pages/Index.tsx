
import React from 'react';
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
