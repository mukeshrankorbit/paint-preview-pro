import React from 'react';
import { Upload, Palette, Share2, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      number: '01',
      title: 'Upload Photos',
      description: 'Simply upload high-quality photos of any room or exterior space you want to paint.',
      gradient: 'from-primary/80 to-violet-500/80'
    },
    {
      icon: Palette,
      number: '02',
      title: 'Apply Colors',
      description: 'Browse thousands of paint colors and apply them instantly with our AI-powered visualization.',
      gradient: 'from-violet-500/80 to-fuchsia-500/80'
    },
    {
      icon: Share2,
      number: '03',
      title: 'Share & Close',
      description: 'Share stunning previews with clients via link or PDF and close more jobs faster.',
      gradient: 'from-fuchsia-500/80 to-primary/80'
    }
  ];

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden bg-gradient-subtle">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.15] via-violet-500/[0.15] to-fuchsia-500/[0.15] pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-primary animate-gradient-x">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get from photo to proposal in minutes, not hours. Our simple 3-step process 
            makes color visualization effortless.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-8 lg:gap-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index} 
                className="relative text-center group animate-fade-in-up" 
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative mb-8">
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-violet-500/30 rounded-2xl blur-xl group-hover:scale-110 transition-transform duration-500" />

                  {/* Number badge with gradient */}
                  <div className={`absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center text-sm font-bold text-white z-10 shadow-lg animate-float`}>
                    {step.number}
                  </div>

                  {/* Icon container with glass effect */}
                  <div className="bg-white/90 backdrop-blur-sm w-24 h-24 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 relative border-2 border-gray-100/80">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-20 rounded-2xl group-hover:opacity-30 transition-opacity duration-500`} />
                    <IconComponent className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Animated connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex absolute top-24 left-full w-full -translate-x-1/2 items-center">
                    <div className="w-full h-[2px] bg-gradient-to-r from-primary/30 via-violet-500/30 to-primary/30 transform group-hover:scale-105 transition-transform duration-500" />
                    <ArrowRight className="w-6 h-6 text-primary/50 animate-slide-x" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Enhanced call to action */}
        <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
          <div className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-sm rounded-full border-2 border-gray-100/80 group hover:scale-105 transition-transform duration-500 cursor-pointer">
            <span className="w-3 h-3 bg-gradient-to-r from-primary to-violet-500 rounded-full mr-3 animate-pulse" />
            <span className="text-lg font-medium text-gray-900">
              Start visualizing
            </span>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/3 rounded-full blur-3xl animate-float delay-500"></div>
      </div>
    </section>
  );
};

export default HowItWorks;