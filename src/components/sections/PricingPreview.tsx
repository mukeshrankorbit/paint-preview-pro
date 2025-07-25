import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingPreview = () => {
  const plans = [
    {
      name: 'Starter',
      price: 19,
      description: 'Perfect for small painting businesses',
      features: [
        '5 projects per month',
        'Basic color library',
        'Standard previews',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Pro Brush',
      price: 49,
      description: 'Most popular for growing contractors',
      features: [
        'Unlimited projects',
        'Premium color library',
        'HD previews',
        'Client sharing links',
        'PDF exports',
        'Priority support'
      ],
      popular: true
    },
    {
      name: 'Elite Crew',
      price: 99,
      description: 'For large painting companies',
      features: [
        'Everything in Pro Brush',
        'Team collaboration',
        'White-label branding',
        'API access',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-subtle">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.15] via-violet-500/[0.15] to-fuchsia-500/[0.15] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple Transparent,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-primary animate-gradient-x">
              Pricing
            </span>{' '}
           
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your business. All plans include a 14-day free trial 
            with no credit card required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-2 border-primary/20 shadow-lg transform scale-105' 
                  : 'border-2 border-gray-100/80 hover:border-primary/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary to-violet-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-purple">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-r from-primary to-violet-500 bg-clip-text text-transparent">${plan.price}</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-3 flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-6 rounded-xl font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-primary to-violet-500 hover:opacity-90 text-white shadow-purple'
                    : 'bg-white/80 backdrop-blur-sm border-2 border-gray-200/80 hover:border-primary/30 text-gray-900'
                }`}
              >
                Start Free Trial
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom plan for your enterprise? 
            <a href="/contact" className="text-primary hover:text-primary/80 ml-1 transition-colors">Contact us</a>
          </p>
          <div className="flex items-center justify-center space-x-8">
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100/80">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-gray-600">14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100/80">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-gray-600">No setup fees</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100/80">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
              <span className="text-gray-600">Cancel anytime</span>
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

export default PricingPreview;