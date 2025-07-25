import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { 
  Eye, 
  Wand2, 
  FileText, 
  Save, 
  Link, 
  Clock,
  Smartphone,
  Shield,
  Palette,
  Share2,
  BarChart3,
  Settings
} from 'lucide-react';

const Features = () => {
  const featureCategories = [
    {
      title: 'Visualization Tools',
      description: 'Powerful tools to bring color visions to life',
      features: [
        {
          icon: Eye,
          title: 'Real-Time Preview',
          description: 'See paint colors applied instantly with photorealistic accuracy. Our AI technology ensures colors look exactly as they will in real life.'
        },
        {
          icon: Palette,
          title: 'Advanced Color Picker',
          description: 'Access thousands of paint colors from major brands. Upload custom colors or use our color matching technology.'
        },
        {
          icon: Smartphone,
          title: 'Mobile Optimization',
          description: 'Work seamlessly on any device. Take photos on-site and preview colors instantly, even offline.'
        }
      ]
    },
    {
      title: 'AI-Powered Tools',
      description: 'Smart technology that saves time and improves results',
      features: [
        {
          icon: Wand2,
          title: 'AI Color Suggestions',
          description: 'Get intelligent color recommendations based on room lighting, architectural style, and current design trends.'
        },
        {
          icon: Settings,
          title: 'Smart Auto-Detection',
          description: 'Automatically detect walls, trim, and other paintable surfaces. Our AI understands room layouts and surfaces.'
        },
        {
          icon: BarChart3,
          title: 'Usage Analytics',
          description: 'Track which colors perform best with clients and optimize your color presentation strategy.'
        }
      ]
    },
    {
      title: 'Professional Features',
      description: 'Tools designed for serious painting contractors',
      features: [
        {
          icon: FileText,
          title: 'Professional PDF Exports',
          description: 'Generate branded proposals with before/after comparisons, color details, and pricing information.'
        },
        {
          icon: Share2,
          title: 'Client Collaboration',
          description: 'Send secure sharing links to clients. They can view options, leave feedback, and approve selections remotely.'
        },
        {
          icon: Save,
          title: 'Project Management',
          description: 'Organize all your color experiments and client projects in one place. Never lose track of a project again.'
        }
      ]
    },
    {
      title: 'Business Tools',
      description: 'Features that help grow your painting business',
      features: [
        {
          icon: Clock,
          title: 'Lightning Fast Processing',
          description: 'Process and preview colors in seconds. Keep your workflow moving and impress clients with instant results.'
        },
        {
          icon: Link,
          title: 'White-Label Branding',
          description: 'Customize the platform with your logo and colors. Present a professional, branded experience to clients.'
        },
        {
          icon: Shield,
          title: 'Enterprise Security',
          description: 'Bank-level encryption keeps client photos secure. GDPR compliant with automatic backups.'
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to{' '}
              <span className="text-primary">Paint Smarter</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional-grade color visualization tools designed specifically for painting 
              contractors who want to impress clients and close more jobs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-purple"
              >
                Start Free Trial
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Feature Categories */}
        {featureCategories.map((category, categoryIndex) => (
          <section 
            key={categoryIndex} 
            className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.features.map((feature, featureIndex) => {
                  const IconComponent = feature.icon;
                  return (
                    <div 
                      key={featureIndex}
                      className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ))}

        {/* Final CTA */}
        <section className="py-20 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Your Free Trial Today
            </h2>
            <p className="text-xl text-purple-100 mb-8 leading-relaxed">
              See why thousands of painting contractors trust us to grow their business. 
              No credit card required, setup in minutes.
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl"
            >
              Get Started Free
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Features;