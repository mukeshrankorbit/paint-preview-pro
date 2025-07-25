import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small painting businesses getting started',
      monthlyPrice: 19,
      yearlyPrice: 15,
      features: [
        { name: 'Up to 5 projects per month', included: true },
        { name: 'Basic color library (1,000+ colors)', included: true },
        { name: 'Standard resolution previews', included: true },
        { name: 'Email support', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'PDF exports', included: false },
        { name: 'Client sharing links', included: false },
        { name: 'Custom branding', included: false },
        { name: 'Team collaboration', included: false },
        { name: 'Priority support', included: false }
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Pro Brush',
      description: 'Most popular choice for growing contractors',
      monthlyPrice: 49,
      yearlyPrice: 39,
      features: [
        { name: 'Unlimited projects', included: true },
        { name: 'Premium color library (5,000+ colors)', included: true },
        { name: 'HD resolution previews', included: true },
        { name: 'Priority email & chat support', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'Professional PDF exports', included: true },
        { name: 'Client sharing links', included: true },
        { name: 'Basic custom branding', included: true },
        { name: 'Team collaboration (up to 5 users)', included: false },
        { name: 'Phone support', included: false }
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Elite Crew',
      description: 'For large painting companies and teams',
      monthlyPrice: 99,
      yearlyPrice: 79,
      features: [
        { name: 'Unlimited projects', included: true },
        { name: 'Complete color library (10,000+ colors)', included: true },
        { name: '4K resolution previews', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'Advanced PDF exports with analytics', included: true },
        { name: 'White-label client portals', included: true },
        { name: 'Full custom branding', included: true },
        { name: 'Unlimited team collaboration', included: true },
        { name: '24/7 phone & chat support', included: true }
      ],
      popular: false,
      cta: 'Start Free Trial'
    }
  ];

  const faqItems = [
    {
      question: "Can I change plans anytime?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate any billing adjustments."
    },
    {
      question: "What happens after my free trial?",
      answer: "After your 14-day free trial, you can choose to continue with a paid plan or your account will be paused. No charges until you decide to continue."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee on all plans. If you're not completely satisfied, we'll refund your payment."
    },
    {
      question: "Is there a setup fee?",
      answer: "No setup fees, ever. The price you see is what you pay. No hidden costs or surprise charges."
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Plans That Fit Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-primary animate-gradient-x">Painting Business</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Start with a 14-day free trial. No credit card required. 
              Scale as your business grows.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-gray-100 rounded-xl p-1 mb-8">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  billingCycle === 'monthly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  billingCycle === 'yearly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly
                <span className="ml-2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="pb-5 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
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
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-gray-900">
                        ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-gray-600 ml-1">/month</span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <p className="text-sm text-green-600 font-medium">
                        Save ${(plan.monthlyPrice - plan.yearlyPrice) * 12}/year
                      </p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mt-0.5 mr-3 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-200 ${
                      plan.popular
                        ? 'bg-primary hover:bg-primary-hover text-primary-foreground shadow-purple'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Need a custom enterprise plan? 
                <a href="/contact" className="text-primary hover:underline ml-1">Contact us</a>
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                <span>✓ 14-day free trial</span>
                <span>✓ No setup fees</span>
                <span>✓ Cancel anytime</span>
                <span>✓ 30-day money back guarantee</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative py-20 overflow-hidden bg-gradient-subtle">
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.15] via-violet-500/[0.15] to-fuchsia-500/[0.15] pointer-events-none" />
          {/* Floating orbs */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-float delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/3 rounded-full blur-3xl animate-float delay-500"></div>
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                Pricing <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-primary animate-gradient-x'>Questions?</span> 
              </h2>
              <p className="text-xl text-gray-700">
                Common questions about our pricing and plans
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-gray-100/80 shadow-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Pricing;