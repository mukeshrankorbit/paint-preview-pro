import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      author: "John Smith",
      company: "Smith & Sons Painting",
      location: "Los Angeles, CA",
      content: "Paint Preview Pro has transformed how we present color options to clients. The visualization tool is incredibly accurate and has helped us close more deals.",
      rating: 5,
      avatar: "JS",
      role: "CEO",
      highlight: true
    },
    {
      author: "Sarah Johnson",
      company: "Elite Painters",
      location: "Chicago, IL",
      content: "The ability to show clients exactly how their space will look with different colors has been a game-changer. Our close rate has increased by 40%.",
      rating: 5,
      avatar: "SJ",
      role: "Founder"
    },
    {
      author: "Mike Brown",
      company: "Brown's Professional Painting",
      location: "Houston, TX",
      content: "Outstanding tool for any professional painter. The mobile app makes it easy to visualize colors right at the client's location.",
      rating: 5,
      avatar: "MB",
      role: "Director"
    },
    {
      author: "Emily Davis",
      company: "Modern Paint Solutions",
      location: "New York, NY",
      content: "This platform has revolutionized our client presentations. The real-time visualization features are simply incredible.",
      rating: 5,
      avatar: "ED",
      role: "Owner",
      highlight: true
    },
    {
      author: "David Wilson",
      company: "Premium Paint Co.",
      location: "Miami, FL",
      content: "The best investment we've made for our business. Clients love seeing the color previews, and it makes decision-making so much easier.",
      rating: 5,
      avatar: "DW",
      role: "Manager"
    },
    {
      author: "Rachel Chen",
      company: "Innovative Painting",
      location: "Seattle, WA",
      content: "We've seen a 60% increase in client satisfaction since using this tool. The AI color suggestions are spot-on every time.",
      rating: 5,
      avatar: "RC",
      role: "Lead Designer",
      highlight: true
    },
    {
      author: "Tom Anderson",
      company: "Precision Painters Ltd.",
      location: "Denver, CO",
      content: "The professional PDF exports have elevated our proposal game. Clients are impressed by the before/after visualizations.",
      rating: 5,
      avatar: "TA",
      role: "Operations Manager"
    },
    {
      author: "Maria Garcia",
      company: "Colorful Spaces",
      location: "San Diego, CA",
      content: "The mobile app is a game-changer. Being able to show clients different color options in real-time during consultations is invaluable.",
      rating: 5,
      avatar: "MG",
      role: "Creative Director"
    },
    {
      author: "James Lee",
      company: "Urban Paint Pros",
      location: "Boston, MA",
      content: "The collaboration features have made it easy for our team to work together on projects. Client communication has never been smoother.",
      rating: 5,
      avatar: "JL",
      role: "Project Manager",
      highlight: true
    }
  ];

  // Auto-rotate carousel with pause functionality
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  // Calculate indices for visible cards
  const visibleIndices = [
    activeIndex,
    (activeIndex + 1) % testimonials.length,
    (activeIndex + 2) % testimonials.length
  ];

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] via-violet-500/[0.03] to-fuchsia-500/[0.03]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Customer Stories</span>
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-primary animate-gradient-x">
              Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied painting professionals who are winning more business with our platform.
          </p>
        </div>

        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Carousel Container */}
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * (100 / 3)}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full md:w-1/3 flex-shrink-0 px-6"
                  style={{ opacity: visibleIndices.includes(index) ? 1 : 0.3 }}
                >
                  <Card 
                    className={`
                      h-full bg-white/90 backdrop-blur-sm rounded-2xl transition-all duration-500 
                      hover:shadow-2xl group overflow-hidden
                      ${testimonial.highlight 
                        ? 'border-2 border-primary/20 shadow-lg' 
                        : 'border-2 border-gray-100/80'
                      }
                    `}
                  >
                    <CardHeader className="pb-0 pt-8 px-8">
                      <div className="flex items-center mb-4">
                        <div className={`
                          w-14 h-14 rounded-full flex items-center justify-center shadow-purple 
                          group-hover:shadow-purple-lg transition-all duration-300
                          ${testimonial.highlight 
                            ? 'bg-gradient-to-r from-primary to-violet-500' 
                            : 'bg-gradient-to-r from-primary/90 to-violet-500/90'
                          }
                        `}>
                          <span className="text-white font-bold text-xl">{testimonial.avatar}</span>
                        </div>
                        <div className="ml-4">
                          <div className="font-semibold text-lg text-gray-900">{testimonial.author}</div>
                          <div className="text-sm text-primary">{testimonial.role}</div>
                        </div>
                      </div>
                      <div className="flex items-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-lg">⭐</span>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-4 px-8">
                      <blockquote className="text-gray-700 leading-relaxed relative">
                        <Quote className="absolute -top-2 -left-1 w-8 h-8 text-primary/10 rotate-180" />
                        <p className="relative z-10 pl-6">"{testimonial.content}"</p>
                      </blockquote>
                    </CardContent>
                    <CardFooter className="pt-4 px-8">
                      <div className="text-sm text-gray-500">
                        {testimonial.company} • {testimonial.location}
                      </div>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center items-center mt-10 space-x-3">
            {testimonials.map((_, index) => {
              const isActive = index === activeIndex;
              const isNext = index === (activeIndex + 1) % testimonials.length;
              const isNextNext = index === (activeIndex + 2) % testimonials.length;
              const isVisible = isActive || isNext || isNextNext;
              
              return (
                <div
                  key={index}
                  className={`
                    relative group transition-all duration-300
                    ${isActive ? 'w-4' : 'w-2'} h-2
                    cursor-pointer
                  `}
                  onClick={() => setActiveIndex(index)}
                >
                  {/* Base dot */}
                  <div 
                    className={`
                      absolute inset-0 rounded-full transition-all duration-300
                      bg-gray-200/50 group-hover:bg-gray-300/50
                    `}
                  />
                  
                  {/* Active/Current dot */}
                  <div 
                    className={`
                      absolute inset-0 rounded-full transition-all duration-300
                      bg-gradient-to-r from-primary to-violet-500
                      ${isVisible ? (isActive ? 'opacity-100' : 'opacity-40') : 'opacity-0'}
                      transform-gpu
                      ${isActive ? 'scale-100' : 'scale-90'}
                      group-hover:opacity-100 group-hover:scale-100
                    `}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex justify-center space-x-8">
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100/80">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-gray-600">1,000+ Contractors</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100/80">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-gray-600">50,000+ Projects</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100/80">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            <span className="text-gray-600">98% Satisfaction Rate</span>
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

export default Testimonials;