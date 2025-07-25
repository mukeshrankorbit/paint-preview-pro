import { TrendingUp, Heart, Clock, DollarSign, Users, Trophy, Star, CheckCircle } from 'lucide-react';

const WhyPaintersLoveIt = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Close Jobs Faster',
      description: 'Reduce decision time from weeks to minutes with instant visual proof.',
      stat: '3x faster closings'
    },
    {
      icon: Heart,
      title: 'Impress Clients',
      description: 'Stand out from competitors with professional, modern proposals.',
      stat: '95% approval rate'
    },
    {
      icon: Clock,
      title: 'Save Time',
      description: 'No more physical samples or multiple site visits needed.',
      stat: '10+ hours saved/week'
    },
    {
      icon: DollarSign,
      title: 'Increase Revenue',
      description: 'Win more premium jobs and charge higher prices with confidence.',
      stat: '25% revenue boost'
    },
    {
      icon: Users,
      title: 'Happy Customers',
      description: 'Eliminate color regrets and disappointed clients forever.',
      stat: '98% satisfaction'
    },
    {
      icon: Trophy,
      title: 'Professional Edge',
      description: 'Position yourself as the tech-savvy contractor who delivers results.',
      stat: '50% more referrals'
    }
  ];

  return (
    <div className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-12 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <section className="relative overflow-hidden py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <div className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-primary">Why Choose Rank Orbit</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Painters Love{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-primary animate-gradient-x">
                Rank Orbit
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your painting business with tools that work as hard as you do. 
              See why contractors across the country are making the switch.
            </p>
            <div className="flex items-center justify-center mt-8 space-x-8">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-600">Easy to Use</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-600">Fast Results</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-sm text-gray-600">Professional Tools</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-100/80 hover:shadow-card transition-all duration-500 hover:-translate-y-2 h-full group-hover:border-primary/30">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-purple group-hover:shadow-purple-lg group-hover:scale-110 transition-all duration-300 mb-6">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="absolute top-0 right-0">
                        <div className="inline-flex items-center px-3 py-1 bg-gradient-primary rounded-full">
                          <span className="text-xs font-medium text-white">
                            {benefit.stat}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced success story highlight */}
          <div className="mt-20 bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border-2 border-gray-100/80 shadow-card-hover animate-fade-in relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="grid lg:grid-cols-5 gap-8 items-center">
                <div className="lg:col-span-3 text-left">
                  <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                    <Star className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-primary">Success Story</span>
                  </div>
                  <blockquote className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8 relative leading-relaxed">
                    <span className="text-7xl text-primary/20 absolute -top-6 -left-4 font-serif">"</span>
                    Since using Rank Orbit, I've closed 40% more jobs and my clients love seeing 
                    exactly what their space will look like. It's completely changed my business.
                    <span className="text-7xl text-primary/20 font-serif">"</span>
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-purple">
                      <span className="text-xl font-medium text-white">MP</span>
                    </div>
                    <div>
                      <div className="font-semibold text-xl text-gray-900">Mike Peterson</div>
                      <div className="text-gray-600">Peterson Painting Co. • Texas</div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <div className="bg-white/50 rounded-2xl p-6 border border-gray-100/80">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-lg font-semibold text-gray-900">Project Success Rate</span>
                      <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-primary h-2 rounded-full w-[98%] animate-grow-width"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-3xl drop-shadow-lg">⭐</span>
                    ))}
                  </div>
                  <div className="text-center text-gray-600 font-medium">
                    4.9/5 from 1,200+ verified reviews
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

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-12 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </div>
  );
};

export default WhyPaintersLoveIt;