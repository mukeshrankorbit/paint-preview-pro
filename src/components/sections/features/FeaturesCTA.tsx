import React from 'react';
import { Button } from '@/components/ui/button';
import { ctaData } from './data/ctaData';

const FeaturesCTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {ctaData.title}
        </h2>
        <p className="text-xl text-purple-100 mb-8 leading-relaxed">
          {ctaData.description}
        </p>
        <Button 
          size="lg"
          className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
        >
          {ctaData.buttonText}
        </Button>
      </div>
    </section>
  );
};

export default FeaturesCTA; 