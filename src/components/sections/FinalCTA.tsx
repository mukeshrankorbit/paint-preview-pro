import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-purple-600 to-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Show. Sell. Succeed.
        </h2>
        
        <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-3xl mx-auto">
          Join the thousands of painting contractors who've transformed their business 
          with professional color visualization. Start closing more jobs today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            size="lg"
            className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 transform hover:scale-105"
          >
            Try Free for 14 Days
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
          >
            Book a Demo
          </Button>
        </div>

        <div className="flex items-center justify-center space-x-8 text-purple-200 text-sm">
          <span>✓ No credit card required</span>
          <span>✓ Setup in under 5 minutes</span>
          <span>✓ Cancel anytime</span>
        </div>

        {/* Decorative elements */}
        <div className="relative mt-12">
          <div className="absolute -top-8 left-1/4 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
          <div className="absolute -top-4 right-1/3 w-2 h-2 bg-white/30 rounded-full animate-pulse delay-300"></div>
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-white/25 rounded-full animate-pulse delay-700"></div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;