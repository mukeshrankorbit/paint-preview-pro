import React from 'react';
import { Button } from '@/components/ui/button';
import { ctaData } from './data/ctaData';

function getGradientTitle(title: string) {
  const words = title.trim().split(' ');
  if (words.length < 2) return title;
  const main = words.slice(0, -2).join(' ');
  const gradient = words.slice(-2).join(' ');
  return (
    <>
      <span className="text-gray-900">{main} </span>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-primary animate-gradient-x">{gradient}</span>
    </>
  );
}

const FeaturesCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Main gradient background */}
      <div className="absolute inset-0 " />
      {/* Floating orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/3 rounded-full blur-3xl animate-float delay-500"></div>
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          {getGradientTitle(ctaData.title)}
        </h2>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed">
          {ctaData.description}
        </p>
        <Button 
          size="lg"
          className="bg-gradient-to-r from-primary to-violet-500 hover:opacity-90 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-purple"
        >
          {ctaData.buttonText}
        </Button>
      </div>
    </section>
  );
};

export default FeaturesCTA; 