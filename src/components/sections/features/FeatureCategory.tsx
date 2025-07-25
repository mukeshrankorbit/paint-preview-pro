import React from 'react';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureCategoryProps {
  title: string;
  description: string;
  features: Feature[];
  isAlternate?: boolean;
}

const FeatureCategory: React.FC<FeatureCategoryProps> = ({
  title,
  description,
  features,
  isAlternate = false
}) => {
  return (
    <section className={`relative py-24 overflow-hidden ${isAlternate ? 'bg-gradient-subtle' : 'bg-white'}`}>
      {isAlternate && (
        <>
          {/* Main gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.15] via-violet-500/[0.15] to-fuchsia-500/[0.15] pointer-events-none" />

          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-20 right-10 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-float delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/3 rounded-full blur-3xl animate-float delay-500"></div>
          </div>
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title.split(' ').map((word, i, arr) => (
              <span key={i}>
                {i === arr.length - 2 ? (
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-500 to-primary animate-gradient-x">
                    {word}{' '}
                  </span>
                ) : (
                  word + ' '
                )}
              </span>
            ))}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, featureIndex) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={featureIndex}
                className={`
                  relative group animate-fade-in-up overflow-hidden
                  ${isAlternate ? 'bg-white/90 backdrop-blur-sm border-2 border-gray-100/80' : 'bg-white border-2 border-gray-100'}
                  rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl
                `}
                style={{ animationDelay: `${featureIndex * 100}ms` }}
              >
                <div className="relative z-10">
                  <div className={`
                    w-14 h-14 rounded-2xl flex items-center justify-center mb-6
                    ${isAlternate ? 'bg-gradient-to-r from-primary/10 to-violet-500/10' : 'bg-primary/10'}
                    group-hover:scale-110 transition-transform duration-500
                  `}>
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Card hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.03] to-violet-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureCategory; 