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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Paint Smarter
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
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 hover:shadow-card transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Feature highlight */}
        <div className="mt-16 bg-white rounded-2xl p-8 lg:p-12 shadow-card">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Trusted by Professional Contractors
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join thousands of painting professionals who have transformed their business 
                with our color visualization platform. From small residential jobs to large 
                commercial projects, we've got you covered.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-gray-500">Client approval rate</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">3x</div>
                  <div className="text-sm text-gray-500">Faster proposals</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">$500k+</div>
                  <div className="text-sm text-gray-500">Jobs closed monthly</div>
                </div>
              </div>
            </div>
            <div className="lg:text-right">
              <div className="inline-flex items-center space-x-2 text-primary font-medium mb-4">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span>Live Usage Stats</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                  <span className="text-sm text-gray-600">Projects completed today</span>
                  <span className="font-semibold text-primary">1,247</span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                  <span className="text-sm text-gray-600">Colors tested this week</span>
                  <span className="font-semibold text-primary">24,891</span>
                </div>
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                  <span className="text-sm text-gray-600">Active contractors</span>
                  <span className="font-semibold text-primary">2,156</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;