import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-subtle">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.15] via-violet-500/[0.15] to-fuchsia-500/[0.15] pointer-events-none" />
      
      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Show. Sell.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-primary animate-gradient-x">
            Succeed.
          </span>
        </h2>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
          Join the thousands of painting contractors who've transformed their business 
          with professional color visualization. Start closing more jobs today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up delay-300">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-primary to-violet-500 text-white hover:shadow-xl px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Try Free for 14 Days
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-2 border-gray-200/80 bg-white/80 backdrop-blur-sm hover:border-primary/20 text-gray-600 hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-xl"
          >
            Book a Demo
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:space-x-8 text-gray-600 text-sm animate-fade-in-up delay-500">
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100/80">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100/80">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span>Setup in under 5 minutes</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-100/80">
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>
            <span>Cancel anytime</span>
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

export default FinalCTA;