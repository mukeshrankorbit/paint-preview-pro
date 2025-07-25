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
    <section className="relative py-24 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.15] via-violet-500/[0.15] to-fuchsia-500/[0.15]" />

      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-primary/[0.15] via-violet-500/[0.15] to-primary/[0.15] animate-gradient-x" />
      </div>

      {/* Decorative patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/[0.15] to-transparent rounded-[100%] blur-3xl transform -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/[0.15] to-transparent rounded-[100%] blur-3xl transform translate-y-1/2" />
      </div>
      
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-br from-primary/30 to-violet-500/30 rounded-full blur-3xl animate-float opacity-75" />
        <div className="absolute top-3/4 -right-20 w-80 h-80 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 rounded-full blur-3xl animate-float-delayed opacity-75" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-br from-fuchsia-500/30 to-primary/30 rounded-full blur-3xl animate-float transform -translate-x-1/2 opacity-75" />
      </div>

      {/* Mesh overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900/50 to-gray-900/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white mb-6 filter drop-shadow-sm animate-gradient-x">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
                  <div className="dark-glass-card w-24 h-24 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-20 rounded-2xl group-hover:opacity-30 transition-opacity duration-500`} />
                    <IconComponent className="w-12 h-12 text-white group-hover:scale-110 transition-transform duration-500" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
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
          <div className="dark-glass-card cursor-pointer inline-flex items-center px-8 py-4 rounded-full group hover:scale-105 transition-transform duration-500">
            <span className="w-3 h-3 bg-gradient-to-r from-primary to-violet-500 rounded-full mr-3 animate-pulse" />
            <span className="text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 ">
              Start visualizing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;