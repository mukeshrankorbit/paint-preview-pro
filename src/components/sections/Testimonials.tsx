const Testimonials = () => {
  const testimonials = [
    {
      content: "Rank Orbit has completely transformed how I present color options to clients. I'm closing 60% more jobs now because clients can actually see what they're getting. The AI suggestions are spot-on too!",
      author: "Sarah Mitchell",
      company: "Mitchell Painting Services",
      location: "California",
      rating: 5,
      avatar: "SM"
    },
    {
      content: "As a contractor with 20+ years experience, I was skeptical about new tech. But this tool pays for itself every month. My clients love the instant previews and I love the professional proposals it generates.",
      author: "David Rodriguez",
      company: "Rodriguez Brothers Painting",
      location: "Texas",
      rating: 5,
      avatar: "DR"
    },
    {
      content: "The time savings alone make this worth every penny. What used to take me 3 site visits now takes 1. Plus, clients are way more confident in their color choices when they can see the results first.",
      author: "Jennifer Lee",
      company: "Precision Paint Co.",
      location: "Florida",
      rating: 5,
      avatar: "JL"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Contractors Are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of painting professionals who have transformed their business 
            with our color visualization platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="bg-card border border-gray-200 rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-500 transform hover:-translate-y-2 group-hover:border-primary/20 h-full"
            >
              {/* Rating stars */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">⭐</span>
                ))}
              </div>

              {/* Testimonial content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author info */}
              <div className="flex items-center">
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
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced trust indicators */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:animate-bounce-gentle">1,000+</div>
              <div className="text-sm text-gray-600">Active Contractors</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:animate-bounce-gentle">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:animate-bounce-gentle">50k+</div>
              <div className="text-sm text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center group hover:scale-110 transition-transform duration-300">
              <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent group-hover:animate-bounce-gentle">98%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;