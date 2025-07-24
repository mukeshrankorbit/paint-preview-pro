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
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
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
              className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-card ${
                plan.popular 
                  ? 'border-primary shadow-purple transform scale-105' 
                  : 'border-gray-200 hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                  <span className="text-gray-600 ml-1">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-3 rounded-lg font-medium transition-all duration-200 ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary-hover text-primary-foreground shadow-purple'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
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
            <a href="/contact" className="text-primary hover:underline ml-1">Contact us</a>
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span>✓ 14-day free trial</span>
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;