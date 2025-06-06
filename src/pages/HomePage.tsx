import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PopularPackages from '@/components/PopularPackages';

const HomePage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero section with gradient background */}
      <section 
        className="relative py-20 md:py-32 text-center text-white"
        style={{
          backgroundImage: `url(https://static-production.npmjs.com/abf53a31b2da4657a1a004ee9358551c.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-red-500 to-orange-500 opacity-90"></div>
        <div className="relative container mx-auto px-4 z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Build amazing things</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            We're GitHub, the company behind the npm Registry and npm CLI. We 
            offer those to the community for free, but our day job is building and 
            selling useful tools for developers like you.
          </p>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Take your JavaScript development up a notch</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Get started today for free, or step up to npm Pro to enjoy a premium 
            JavaScript development experience, with features like private packages.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <Link to="/signup">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-6 rounded-full text-lg">
                Sign up for free
              </Button>
            </Link>
            <Link to="/products/pro">
              <Button variant="outline" className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold px-8 py-6 rounded-full text-lg">
                Learn about Pro
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Open source section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <img 
            src="https://static-production.npmjs.com/attachments/ck3uweazy72ye8874y9kkxnx1-gak.png" 
            alt="npm logo" 
            className="mx-auto mb-16 w-24"
          />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8 max-w-3xl mx-auto">
            Bring the best of open source to you, your team, and your company
          </h2>
          
          <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-700">
            Relied upon by more than 17 million developers worldwide, npm is 
            committed to making JavaScript development elegant, productive, and 
            safe. The free npm Registry has become the center of JavaScript code 
            sharing, and with more than two million packages, the largest software 
            registry in the world. Our other tools and services take the Registry, and 
            the work you do around it, to the next level.
          </p>
        </div>
      </section>

      {/* Popular packages section */}
      <PopularPackages />
      
      {/* Create an account section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Create an account</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/signup">
              <Button className="bg-npm-red hover:bg-red-700 text-white font-bold px-8 py-3 rounded-md">
                Sign up for npm
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;