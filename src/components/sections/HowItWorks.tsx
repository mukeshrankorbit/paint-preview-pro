import { Upload, Palette, Share2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      number: '01',
      title: 'Upload Photos',
      description: 'Simply upload high-quality photos of any room or exterior space you want to paint.'
    },
    {
      icon: Palette,
      number: '02',
      title: 'Apply Colors',
      description: 'Browse thousands of paint colors and apply them instantly with our AI-powered visualization.'
    },
    {
      icon: Share2,
      number: '03',
      title: 'Share & Close',
      description: 'Share stunning previews with clients via link or PDF and close more jobs faster.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get from photo to proposal in minutes, not hours. Our simple 3-step process 
            makes color visualization effortless.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <div className="relative mb-6">
                  {/* Number badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold z-10 shadow-purple group-hover:animate-bounce-gentle">
                    {step.number}
                  </div>
                  
                  {/* Icon container */}
                  <div className="w-20 h-20 bg-gradient-card rounded-2xl flex items-center justify-center mx-auto group-hover:bg-primary/10 group-hover:shadow-purple transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2">
                    <IconComponent className="w-10 h-10 text-primary group-hover:text-primary-dark transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {step.description}
                </p>

                {/* Enhanced connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/20 to-primary/40 transform translate-x-8 -translate-y-1/2 z-0 group-hover:from-primary/40 group-hover:to-primary/60 transition-all duration-300"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Enhanced call to action */}
        <div className="text-center mt-16 animate-fade-in delay-1000">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-card rounded-full text-primary font-medium shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:scale-105">
            <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse"></span>
            Start visualizing in under 60 seconds
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;