import React from 'react';
import { Button } from '@/components/ui/button';
import { heroData } from './data/heroData';
import { Wand2, Sparkles, ArrowRight } from 'lucide-react';

const FeaturesHero = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-subtle">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.15] via-violet-500/[0.15] to-fuchsia-500/[0.15] pointer-events-none" />

      {/* Floating orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/3 rounded-full blur-3xl animate-float delay-500"></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-left space-y-4 flex flex-col justify-center h-full">
            {/* Title */}
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              {heroData.title.split('Paint')[0]}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-primary animate-gradient-x">Paint</span>
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary via-violet-500 to-primary rounded-full animate-grow-width" style={{ animationDelay: '500ms' }} />
              </span>
              {heroData.title.split('Paint')[1]}
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              {heroData.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
              {heroData.buttons.map((button, index) => (
                <Button 
                  key={index}
                  size="lg"
                  variant={button.variant === 'outline' ? 'outline' : 'default'}
                  className={
                    button.variant === 'outline'
                      ? 'group border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl bg-white'
                      : 'group bg-gradient-to-r from-primary to-violet-500 hover:opacity-90 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-purple'
                  }
                >
                  {button.variant === 'outline' ? (
                    <>
                      <Wand2 className="w-5 h-5 mr-2 inline-block transition-transform group-hover:rotate-12" />
                      {button.text}
                    </>
                  ) : (
                    <>
                      {button.text}
                      <ArrowRight className="w-5 h-5 ml-2 inline-block transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-4 items-center pt-8 animate-fade-in-up" style={{ animationDelay: '800ms' }}>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-gray-600">10,000+ Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-gray-600">98% Satisfaction</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-violet-500 rounded-full animate-pulse" />
                <span className="text-gray-600">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Visual */}
          <div className="relative h-full flex items-center justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            {/* Main Image Container */}
            <div className="relative z-10 bg-white rounded-2xl p-2 shadow-xl transform hover:scale-[1.02] transition-transform duration-500 w-full max-w-xl border border-gray-100">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Color Visualization Demo"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero;