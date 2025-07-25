import React from 'react';
import { Eye, Wand2, Clock, ChartBar, Star, CheckCircle2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const WhyPaintersLoveIt = () => {
  const features = [
    {
      icon: Eye,
      title: 'Realistic Previews',
      description: 'Our AI-powered visualization shows exactly how colors will look in real-world lighting.',
      stat: '99.9%',
      statLabel: 'Color Accuracy'
    },
    {
      icon: Wand2,
      title: 'Smart Color Suggestions',
      description: 'Get intelligent color recommendations based on client preferences and trends.',
      stat: '2x',
      statLabel: 'Faster Decisions'
    },
    {
      icon: Clock,
      title: 'Time-Saving Tools',
      description: 'Generate professional proposals and visualizations in minutes, not hours.',
      stat: '75%',
      statLabel: 'Time Saved'
    },
    {
      icon: ChartBar,
      title: 'Business Growth',
      description: 'Close more deals with impressive presentations and professional proposals.',
      stat: '40%',
      statLabel: 'More Projects'
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-subtle">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.15] via-violet-500/[0.15] to-fuchsia-500/[0.15] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Why Choose Rank Orbit</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Painters{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-primary animate-gradient-x">
              Love It
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professional painters who are growing their business with our color visualization platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="relative bg-white/90 backdrop-blur-sm border-2 border-gray-100/80 p-6 rounded-2xl group hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-r from-primary to-violet-500 flex items-center justify-center shadow-purple group-hover:shadow-purple-lg transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {feature.description}
                </p>

                {/* Stats Badge */}
                <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/5 rounded-full">
                  <span className="text-lg font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                    {feature.stat}
                  </span>
                  <span className="text-sm text-gray-600">
                    {feature.statLabel}
                  </span>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Success Story Section */}
        <div className="relative bg-white/90 backdrop-blur-sm border-2 border-gray-100/80 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Success Story</span>
              </span>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Transform Your Painting Business
              </h3>
              <div className="space-y-4 mb-8">
                {[
                  'Close more deals with professional presentations',
                  'Save time with instant color visualizations',
                  'Increase customer satisfaction with accurate previews',
                  'Grow your business with modern tools'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-violet-500 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                    40%
                  </div>
                  <div className="text-sm text-gray-600">More Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                    75%
                  </div>
                  <div className="text-sm text-gray-600">Time Saved</div>
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">
                    95%
                  </div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-r from-primary/10 to-violet-500/10 p-1">
                <div className="w-full h-full bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Success Story" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
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

export default WhyPaintersLoveIt;