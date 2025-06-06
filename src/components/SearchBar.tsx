import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchBar = ({ 
  className = '', 
  placeholder = 'Search packages', 
  onSearch 
}: SearchBarProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex w-full ${className}`}>
      <div className="relative flex-grow">
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border-gray-300 focus:border-black pr-10"
        />
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
      </div>
      <Button 
        type="submit" 
        className="ml-2 bg-[#231f20] text-white rounded-none px-8 font-bold hover:bg-black"
      >
        Search
      </Button>
    </form>
  );
};

export default SearchBar;