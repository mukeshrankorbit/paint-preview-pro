import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.15] via-violet-500/[0.15] to-fuchsia-500/[0.15]" />

      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-primary/[0.15] via-violet-500/[0.15] to-primary/[0.15] animate-gradient-x" />
      </div>

      {/* Decorative patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/[0.15] to-transparent rounded-[100%] blur-3xl transform -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-500/[0.15] to-transparent rounded-[100%] blur-3xl transform translate-y-1/2" />
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-gradient-to-br from-primary/30 to-violet-500/30 rounded-full blur-3xl animate-float opacity-75" />
        <div className="absolute top-3/4 -right-20 w-80 h-80 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 rounded-full blur-3xl animate-float-delayed opacity-75" />
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-br from-fuchsia-500/30 to-primary/30 rounded-full blur-3xl animate-float transform -translate-x-1/2 opacity-75" />
      </div>

      {/* Mesh overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900/50 to-gray-900/80" />

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-white mb-6 filter drop-shadow-sm animate-gradient-x">
          Show. Sell. Succeed.
        </h2>
        
        <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in-up delay-200">
          Join the thousands of painting contractors who've transformed their business 
          with professional color visualization. Start closing more jobs today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up delay-300">
          <Button 
            size="lg"
            className="dark-glass-card bg-gradient-to-r from-primary to-violet-500 text-white hover:shadow-xl px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Try Free for 14 Days
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="dark-glass-card border-2 border-white/20 text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:shadow-xl"
          >
            Book a Demo
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:space-x-8 text-gray-300 text-sm animate-fade-in-up delay-500">
          <span className="flex items-center">
            <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-primary to-violet-500 flex items-center justify-center text-white text-xs">✓</span>
            No credit card required
          </span>
          <span className="flex items-center">
            <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-primary to-violet-500 flex items-center justify-center text-white text-xs">✓</span>
            Setup in under 5 minutes
          </span>
          <span className="flex items-center">
            <span className="w-5 h-5 mr-2 rounded-full bg-gradient-to-r from-primary to-violet-500 flex items-center justify-center text-white text-xs">✓</span>
            Cancel anytime
          </span>
        </div>

        {/* Enhanced decorative elements */}
        <div className="relative mt-12">
          <div className="absolute -top-8 left-1/4 w-4 h-4 bg-gradient-to-r from-primary to-violet-500 rounded-full animate-bounce-gentle opacity-75"></div>
          <div className="absolute -top-4 right-1/3 w-2 h-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full animate-bounce-gentle delay-300 opacity-75"></div>
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-gradient-to-r from-fuchsia-500 to-primary rounded-full animate-bounce-gentle delay-700 opacity-75"></div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;