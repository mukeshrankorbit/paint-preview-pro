import { Link } from 'react-router-dom';
import { Mail, Send } from 'lucide-react';

const Footer = () => {
  const footerSections = {
    product: {
      title: 'Product',
      links: [
        { name: 'Features', href: '/features' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Free Trial', href: '#' },
        { name: 'Demo', href: '#' }
      ]
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' }
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Help Center', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'API', href: '#' },
        { name: 'Tutorials', href: '#' }
      ]
    },
    contact: {
      title: 'Contact',
      links: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Support', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' }
      ]
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300 overflow-hidden">
      {/* Gradient overlay for glass effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-r from-primary/10 to-violet-500/10 blur-2xl" />
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-l from-fuchsia-500/10 to-primary/10 blur-2xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Subscribe Section */}
          <div className="md:col-span-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-violet-500 rounded-lg flex items-center justify-center shadow-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-2xl text-white tracking-tight">Stay Updated</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-xs">Subscribe to our newsletter for the latest updates, tips, and exclusive offers.</p>
              <form className="flex items-center bg-white/10 backdrop-blur-sm rounded-xl p-2 shadow-inner max-w-md">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 bg-transparent outline-none border-none text-gray-100 placeholder-gray-400 px-4 py-2 text-sm"
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-1 bg-gradient-to-r from-primary to-violet-500 hover:opacity-90 text-white font-semibold px-5 py-2 rounded-lg shadow transition-all duration-200"
                >
                  Subscribe <Send className="w-4 h-4 ml-1" />
                </button>
              </form>
            </div>
          </div>

          {/* Footer Links */}
          <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {Object.entries(footerSections).map(([key, section]) => (
              <div key={key}>
                <h3 className="font-bold text-lg uppercase tracking-wider mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-primary animate-gradient-x">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="group relative text-gray-400 hover:text-primary transition-colors duration-200 text-sm font-medium"
                      >
                        <span className="group-hover:underline group-hover:decoration-primary group-hover:decoration-2 transition-all duration-200">
                          {link.name}
                        </span>
                        <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-primary to-violet-500 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-violet-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="font-bold text-2xl text-white tracking-tight">Rank Orbit</span>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <span className="flex items-center gap-2"><Mail className="w-4 h-4" /> support@rankorbit.com</span>
              <span>© 2024 Rank Orbit. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;