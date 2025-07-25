import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/80">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-violet-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-10 h-10 bg-gradient-to-r from-primary to-violet-500 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition duration-500">
                <span className="text-white font-bold text-xl">R</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-violet-500 to-primary animate-gradient-x">Rank Orbit</span>
              <span className="text-xs text-gray-500">Color Visualization Pro</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`relative px-4 py-2 text-base font-semibold rounded-lg transition-all duration-300 group hover:bg-gray-50 ${
                  isActive(item.href)
                    ? 'text-primary'
                    : 'text-gray-600 hover:text-primary'
                }`}
              >
                {/* Hover effect line */}
                <span className="absolute left-1/2 -bottom-[1px] w-0 h-0.5 bg-gradient-to-r from-primary to-violet-500 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="/#how-it-works">
              <Button
                variant="outline"
                className="relative group px-6 py-2.5 rounded-lg border-2 border-primary text-primary bg-white hover:bg-primary hover:text-white transition-colors duration-300 font-medium"
              >
                Visualizer
              </Button>
            </a>
            <Link to="/pricing">
              <Button className="relative group px-6 py-2.5 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-violet-500 to-primary animate-gradient-x"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-violet-500 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110 animate-gradient-x"></div>
                <span className="relative flex items-center text-white font-medium">
                  Start Free Trial
                  <ChevronRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative group p-2 rounded-lg text-gray-600 hover:text-primary"
          >
            <span className="absolute inset-0 bg-gray-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></span>
            <span className="relative">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/80">
            <div className="flex flex-col space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/5'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-gray-200/80">
                <Button className="w-full bg-gradient-to-r from-primary via-violet-500 to-primary animate-gradient-x py-3">
                  <span className="flex items-center justify-center">
                    Start Free Trial
                    <ChevronRight className="w-4 h-4 ml-1.5" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;