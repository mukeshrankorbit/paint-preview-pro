import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Show Your Clients the{' '}
              <span className="text-primary">Color</span>{' '}
              Before the Paint
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Upload photos, apply colors instantly, and close more jobs. 
              The professional tool that helps painting contractors win more 
              business with stunning visual previews.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-purple transition-all duration-200 transform hover:scale-105"
              >
                Try It Free
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200"
              >
                Book a Demo
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Trusted by 1,000+ painting contractors</p>
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-gray-400">
                <span className="text-sm">⭐⭐⭐⭐⭐ 4.9/5 rating</span>
                <span className="text-sm">✓ 14-day free trial</span>
                <span className="text-sm">✓ No credit card required</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroImage} 
                alt="Color visualizer platform preview"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;