import React from 'react';
import Layout from '@/components/layout/Layout';
import FeaturesHero from '@/components/sections/features/FeaturesHero';
import FeatureCategory from '@/components/sections/features/FeatureCategory';
import FeaturesCTA from '@/components/sections/features/FeaturesCTA';
import { featureCategories } from '@/components/sections/features/data/featuresData';

const Features = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <FeaturesHero />
        
        {featureCategories.map((category, index) => (
          <FeatureCategory
            key={index}
            title={category.title}
            description={category.description}
            features={category.features}
            isAlternate={index % 2 !== 0}
          />
        ))}

        <FeaturesCTA />
      </div>
    </Layout>
  );
};

export default Features;