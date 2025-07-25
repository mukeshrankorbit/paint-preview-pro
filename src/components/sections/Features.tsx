import { 
  Eye, 
  Wand2, 
  FileText, 
  Save, 
  Link, 
  Clock,
  Smartphone,
  Shield
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Eye,
      title: 'Real-Time Preview',
      description: 'See paint colors applied instantly with photorealistic accuracy. No guesswork, just results.'
    },
    {
      icon: Wand2,
      title: 'AI Color Suggestions',
      description: 'Get intelligent color recommendations based on room lighting, style, and current trends.'
    },
    {
      icon: FileText,
      title: 'Professional PDF Exports',
      description: 'Generate branded proposals with before/after comparisons and detailed color information.'
    },
    {
      icon: Save,
      title: 'Save Projects',
      description: 'Keep all your color experiments organized and accessible across all your devices.'
    },
    {
      icon: Link,
      title: 'Client Share Links',
      description: 'Send clients a private link to view and approve color choices from anywhere.'
    },
    {
      icon: Clock,
      title: 'Lightning Fast',
      description: 'Process and preview colors in seconds, not minutes. Keep your workflow moving.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Optimized',
      description: 'Work seamlessly on any device - tablet, phone, or desktop. Always ready when you are.'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your client photos and projects are encrypted and stored securely. GDPR compliant.'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Paint{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-primary animate-gradient-x">
              Smarter
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional-grade tools designed specifically for painting contractors who want to 
            impress clients and close more jobs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 h-full border-2 border-gray-100/80 shadow-card hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-2 group-hover:border-primary/30">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 shadow-purple group-hover:shadow-purple-lg group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Enhanced feature highlight */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 lg:p-12 shadow-card-hover border-2 border-gray-100/80 animate-fade-in relative overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 pointer-events-none"></div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-primary">Trusted by Industry Leaders</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Trusted by{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-primary">
                  Professional Contractors
                </span>
                {' '}Across the Globe
              </h3>
              
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Join thousands of painting professionals who have transformed their business 
                with our color visualization platform. From small residential jobs to large 
                commercial projects, we've got you covered.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">95%</div>
                  <div className="text-sm text-gray-600 mt-1">Client approval rate</div>
                </div>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">3x</div>
                  <div className="text-sm text-gray-600 mt-1">Faster proposals</div>
                </div>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">$500k+</div>
                  <div className="text-sm text-gray-600 mt-1">Jobs closed monthly</div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex -space-x-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gradient-primary flex items-center justify-center shadow-purple">
                      <span className="text-sm font-medium text-white">P{i + 1}</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-gray-600">
                  Joined by <span className="font-semibold text-primary">2,000+</span> professional painters
                </div>
              </div>
            </div>

            <div className="lg:text-right space-y-6">
              <div className="inline-flex items-center space-x-2 text-primary font-medium mb-2">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span>Real-Time Platform Statistics</span>
              </div>

              <div className="space-y-4">
                <div className="bg-white/50 rounded-2xl p-4 border border-gray-100/80 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Projects completed today</span>
                    <span className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">1,247</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-gradient-primary h-1.5 rounded-full w-[85%] animate-grow-width"></div>
                  </div>
                </div>

                <div className="bg-white/50 rounded-2xl p-4 border border-gray-100/80 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Colors tested this week</span>
                    <span className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">24,891</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-gradient-primary h-1.5 rounded-full w-[92%] animate-grow-width"></div>
                  </div>
                </div>

                <div className="bg-white/50 rounded-2xl p-4 border border-gray-100/80 hover:shadow-lg transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Active contractors</span>
                    <span className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">2,156</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-gradient-primary h-1.5 rounded-full w-[78%] animate-grow-width"></div>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center justify-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mt-6">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-primary">Platform Status: Operational</span>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/3 rounded-full blur-2xl"></div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>
    </section>
  );
};

export default Features;