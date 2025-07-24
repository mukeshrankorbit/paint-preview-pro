import { Button } from '@/components/ui/button';
import colorDemo from '@/assets/color-picker-demo.gif';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-subtle py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Show Your Clients the{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow">Color</span>{' '}
              Before the Paint
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in delay-200">
              Upload photos, apply colors instantly, and close more jobs. 
              The professional tool that helps painting contractors win more 
              business with stunning visual previews.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in delay-300">
              <Button 
                variant="premium"
                size="lg"
                className="px-8 py-4 text-lg"
              >
                Try It Free
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg"
              >
                Book a Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200 animate-fade-in delay-500">
              <p className="text-sm text-gray-500 mb-4">Trusted by 1,000+ painting contractors</p>
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-gray-400">
                <span className="text-sm flex items-center">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="ml-1">4.9/5 rating</span>
                </span>
                <span className="text-sm flex items-center">
                  <span className="text-green-500 mr-1">✓</span>
                  14-day free trial
                </span>
                <span className="text-sm flex items-center">
                  <span className="text-green-500 mr-1">✓</span>
                  No credit card required
                </span>
              </div>
            </div>
          </div>

          {/* Hero Animation */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10 group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow"></div>
              <img 
                src={colorDemo} 
                alt="Live color visualization demo - watch colors transform rooms instantly"
                className="relative w-full h-auto rounded-2xl shadow-2xl border border-white/20 hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-bounce-gentle"></div>
            <div className="absolute top-1/2 -left-8 w-12 h-12 bg-primary/15 rounded-full blur-md animate-float delay-700"></div>
            
            {/* Badge overlay */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg animate-scale-in">
              <span className="text-sm font-medium text-gray-800">✨ AI-Powered</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>
    </section>
  );
};

export default Hero;