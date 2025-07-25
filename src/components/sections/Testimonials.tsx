import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      author: "John Smith",
      company: "Smith & Sons Painting",
      location: "Los Angeles, CA",
      content: "Paint Preview Pro has transformed how we present color options to clients. The visualization tool is incredibly accurate and has helped us close more deals.",
      rating: 5,
      avatar: "JS"
    },
    {
      author: "Sarah Johnson",
      company: "Elite Painters",
      location: "Chicago, IL",
      content: "The ability to show clients exactly how their space will look with different colors has been a game-changer. Our close rate has increased by 40%.",
      rating: 5,
      avatar: "SJ"
    },
    {
      author: "Mike Brown",
      company: "Brown's Professional Painting",
      location: "Houston, TX",
      content: "Outstanding tool for any professional painter. The mobile app makes it easy to visualize colors right at the client's location.",
      rating: 5,
      avatar: "MB"
    }
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden animate-fade-in-up">
      {/* Decorative SVG background */}
      <svg 
        className="absolute left-1/2 top-0 -translate-x-1/2 -z-10 opacity-30 blur-2xl" 
        width="900" 
        height="400" 
        viewBox="0 0 900 400" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse 
          cx="450" 
          cy="200" 
          rx="400" 
          ry="120" 
          fill="url(#testimonials-bg-gradient)" 
        />
        <defs>
          <linearGradient 
            id="testimonials-bg-gradient" 
            x1="0" 
            y1="0" 
            x2="900" 
            y2="400" 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fbbf24" />
            <stop offset="1" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied painting professionals who are winning more business with our platform.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group animate-fade-in-up hover:shadow-2xl hover:scale-105 transition-all duration-300" 
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <CardHeader className="pb-0">
                <div className="flex items-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pt-0 pb-4">
                <blockquote className="text-gray-700 mb-4 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
              <CardFooter className="flex items-center pt-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 text-gray-500">
            <span>✓ 1,000+ Contractors</span>
            <span>✓ 50,000+ Projects</span>
            <span>✓ 98% Satisfaction Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;