import { Link } from 'react-router-dom';

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
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">R</span>
              </div>
              <span className="font-bold text-xl text-white">Rank Orbit</span>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <span>support@rankorbit.com</span>
              <span>© 2024 Rank Orbit. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;