import { TrendingUp, Heart, Clock, DollarSign, Users, Trophy } from 'lucide-react';

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Painters Love Rank Orbit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your painting business with tools that work as hard as you do. 
            See why contractors across the country are making the switch.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="group">
                <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 h-full">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                        {benefit.description}
                      </p>
                      <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full">
                        <span className="text-xs font-medium text-primary">
                          {benefit.stat}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Success story highlight */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 via-purple-50 to-primary/5 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Trophy className="w-8 h-8 text-primary" />
            </div>
            <blockquote className="text-xl lg:text-2xl font-medium text-gray-900 mb-6">
              "Since using Rank Orbit, I've closed 40% more jobs and my clients love seeing 
              exactly what their space will look like. It's completely changed my business."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-gray-600">MP</span>
              </div>
              <div className="text-left">
                <div className="font-semibold text-gray-900">Mike Peterson</div>
                <div className="text-sm text-gray-600">Peterson Painting Co. • Texas</div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-4 space-x-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400">⭐</span>
              ))}
              <span className="ml-2 text-sm text-gray-600">(4.9/5 from 1,200+ reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPaintersLoveIt;