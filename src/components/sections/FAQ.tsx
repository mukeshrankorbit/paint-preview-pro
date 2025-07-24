import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How accurate are the color previews?",
      answer: "Our AI-powered visualization technology provides 95%+ accuracy in color representation. We account for lighting conditions, surface textures, and paint properties to deliver photorealistic previews that closely match the final painted result."
    },
    {
      question: "Can I use my own paint brand colors?",
      answer: "Absolutely! We support color libraries from all major paint brands including Sherwin-Williams, Benjamin Moore, Behr, PPG, and more. You can also upload custom colors to match your preferred suppliers."
    },
    {
      question: "Is there really a free trial with no credit card?",
      answer: "Yes! Start your 14-day free trial without providing any payment information. You'll have full access to all features during the trial period. Only provide payment details when you're ready to continue."
    },
    {
      question: "How quickly can I create color previews?",
      answer: "Most previews are generated in under 30 seconds. Simply upload a photo, select your paint colors, and our system instantly applies them to walls, trim, or any paintable surface in the image."
    },
    {
      question: "Can clients view and approve colors remotely?",
      answer: "Yes! Generate secure sharing links that clients can access from any device. They can view different color options, leave comments, and approve selections without needing an account."
    },
    {
      question: "What photo quality works best?",
      answer: "For best results, use well-lit photos taken during daylight hours. Photos should be at least 1080p resolution. Our AI works with most photo conditions, but good lighting helps ensure the most accurate color representation."
    },
    {
      question: "Do you offer team collaboration features?",
      answer: "Yes! Pro Brush and Elite Crew plans include team features. Share projects with crew members, collaborate on color selections, and maintain consistent branding across your entire painting business."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Absolutely. You can cancel your subscription at any time from your account settings. There are no cancellation fees, and you'll retain access to your features until the end of your billing period."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about Rank Orbit Color Visualizer
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <p className="text-gray-600 leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center text-primary hover:text-primary-hover font-medium"
          >
            Contact our support team
            <ChevronDown className="w-4 h-4 ml-1 transform -rotate-90" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;