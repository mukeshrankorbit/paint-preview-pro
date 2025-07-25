import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1]); // First two FAQs open by default

  const faqs = [
    {
      question: "How accurate are the color previews?",
      answer: "Our AI-powered visualization technology provides 95%+ accuracy in color representation. We account for lighting conditions, surface textures, and paint properties to deliver photorealistic previews that closely match the final painted result.",
      category: "Technology",
      icon: CheckCircle
    },
    {
      question: "Can I use my own paint brand colors?",
      answer: "Absolutely! We support color libraries from all major paint brands including Sherwin-Williams, Benjamin Moore, Behr, PPG, and more. You can also upload custom colors to match your preferred suppliers.",
      category: "Features",
      icon: AlertCircle
    },
    {
      question: "Is there really a free trial with no credit card?",
      answer: "Yes! Start your 14-day free trial without providing any payment information. You'll have full access to all features during the trial period. Only provide payment details when you're ready to continue.",
      category: "Pricing",
      icon: HelpCircle
    },
    {
      question: "How quickly can I create color previews?",
      answer: "Most previews are generated in under 30 seconds. Simply upload a photo, select your paint colors, and our system instantly applies them to walls, trim, or any paintable surface in the image.",
      category: "Technology",
      icon: CheckCircle
    },
    {
      question: "Can clients view and approve colors remotely?",
      answer: "Yes! Generate secure sharing links that clients can access from any device. They can view different color options, leave comments, and approve selections without needing an account.",
      category: "Features",
      icon: AlertCircle
    },
    {
      question: "What photo quality works best?",
      answer: "For best results, use well-lit photos taken during daylight hours. Photos should be at least 1080p resolution. Our AI works with most photo conditions, but good lighting helps ensure the most accurate color representation.",
      category: "Technology",
      icon: CheckCircle
    },
    {
      question: "Do you offer team collaboration features?",
      answer: "Yes! Pro Brush and Elite Crew plans include team features. Share projects with crew members, collaborate on color selections, and maintain consistent branding across your entire painting business.",
      category: "Features",
      icon: AlertCircle
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. You can cancel your subscription at any time from your account settings. There are no cancellation fees, and you'll retain access to your features until the end of your billing period.",
      category: "Pricing",
      icon: HelpCircle
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndexes(prevIndexes => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter(i => i !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Top wave decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-12 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 relative">
            <div className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Help Center</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-primary animate-gradient-x">
                Questions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about Rank Orbit Color Visualizer.
              Can't find what you're looking for? Reach out to our support team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => {
              const IconComponent = faq.icon;
              const isOpen = openIndexes.includes(index);
              return (
                <div 
                  key={index} 
                  className="bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-gray-100/80 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left flex items-start justify-between hover:bg-gray-50/50 transition-colors duration-200"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isOpen ? 'bg-gradient-primary' : 'bg-primary/10'}`}>
                        <IconComponent className={`w-5 h-5 ${isOpen ? 'text-white' : 'text-primary'}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{faq.question}</h3>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  <div 
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="px-8 pb-6 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed pt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center p-8 rounded-2xl bg-white/90 backdrop-blur-sm border-2 border-gray-100/80">
              <p className="text-xl font-semibold text-gray-900 mb-4">
                Still have questions?
              </p>
              <p className="text-gray-600 mb-6">
                Can't find the answer you're looking for? We're here to help!
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 bg-gradient-primary text-white rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </a>
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

export default FAQ;