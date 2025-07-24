import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  return (
    <section className="relative py-20 bg-gradient-cta overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
          Show. Sell. Succeed.
        </h2>
        
        <p className="text-xl text-primary-light mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
          Join the thousands of painting contractors who've transformed their business 
          with professional color visualization. Start closing more jobs today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up delay-300">
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 hover:shadow-xl px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Try Free for 14 Days
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-xl"
          >
            Book a Demo
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-8 text-primary-light text-sm animate-fade-in-up delay-500">
          <span className="flex items-center">
            <span className="text-green-300 mr-1">✓</span>
            No credit card required
          </span>
          <span className="flex items-center">
            <span className="text-green-300 mr-1">✓</span>
            Setup in under 5 minutes
          </span>
          <span className="flex items-center">
            <span className="text-green-300 mr-1">✓</span>
            Cancel anytime
          </span>
        </div>

        {/* Enhanced decorative elements */}
        <div className="relative mt-12">
          <div className="absolute -top-8 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-bounce-gentle"></div>
          <div className="absolute -top-4 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-bounce-gentle delay-300"></div>
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-white/25 rounded-full animate-bounce-gentle delay-700"></div>
        </div>
      </div>
      
      {/* Background animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float delay-500"></div>
      </div>
    </section>
  );
};

export default FinalCTA;