import PackageCard from './PackageCard';

const POPULAR_PACKAGES = [
  {
    name: 'react',
    description: 'React is a JavaScript library for building user interfaces.',
    version: '18.2.0',
    publishedBy: 'facebook',
    publishDate: '3 months ago'
  },
  {
    name: 'lodash',
    description: 'Lodash modular utilities.',
    version: '4.17.21',
    publishedBy: 'jdalton',
    publishDate: '1 year ago'
  },
  {
    name: 'express',
    description: 'Fast, unopinionated, minimalist web framework for node.',
    version: '4.18.2',
    publishedBy: 'dougwilson',
    publishDate: '6 months ago'
  }
];

const PopularPackages = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Popular Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {POPULAR_PACKAGES.map((pkg) => (
            <PackageCard
              key={pkg.name}
              name={pkg.name}
              description={pkg.description}
              version={pkg.version}
              publishedBy={pkg.publishedBy}
              publishDate={pkg.publishDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;