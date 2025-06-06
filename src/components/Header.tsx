import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import NpmLogo from './NpmLogo';
import SearchBar from './SearchBar';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
    // In a real implementation, this would navigate to search results
  };

  return (
    <header>
      {/* Top navigation */}
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 h-1"></div>
      <div className="hidden md:flex items-center justify-end bg-white py-2 px-4 space-x-4 text-sm">
        <Link to="/products/pro" className="text-gray-800 hover:text-black">Pro</Link>
        <Link to="/products/teams" className="text-gray-800 hover:text-black">Teams</Link>
        <Link to="/products" className="text-gray-800 hover:text-black">Pricing</Link>
        <Link to="/documentation" className="text-gray-800 hover:text-black">Documentation</Link>
      </div>

      {/* Main header with search */}
      <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-gray-200">
        <div className="flex items-center flex-grow">
          <Link to="/" className="mr-4">
            <NpmLogo />
          </Link>
          <div className="relative flex-grow hidden md:block">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>
        
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-2">
          <Link to="/signup">
            <Button variant="outline" className="border-gray-300 hover:border-black">
              Sign Up
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="outline" className="border-gray-300 hover:border-black">
              Sign In
            </Button>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleMobileMenu}
            className="text-gray-700"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile search bar */}
      <div className="md:hidden px-4 py-2 bg-white border-b border-gray-200">
        <SearchBar placeholder="Search packages" />
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <nav className="flex flex-col px-4 py-2">
            <Link to="/products/pro" className="py-2 text-gray-800 hover:text-black">Pro</Link>
            <Link to="/products/teams" className="py-2 text-gray-800 hover:text-black">Teams</Link>
            <Link to="/products" className="py-2 text-gray-800 hover:text-black">Pricing</Link>
            <Link to="/documentation" className="py-2 text-gray-800 hover:text-black">Documentation</Link>
            <div className="flex space-x-2 py-2">
              <Link to="/signup" className="w-1/2">
                <Button variant="outline" className="w-full border-gray-300 hover:border-black">
                  Sign Up
                </Button>
              </Link>
              <Link to="/login" className="w-1/2">
                <Button variant="outline" className="w-full border-gray-300 hover:border-black">
                  Sign In
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;