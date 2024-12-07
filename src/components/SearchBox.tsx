import React from 'react';
import { Search } from 'lucide-react';

interface SearchBoxProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export function SearchBox({ query, onQueryChange }: SearchBoxProps) {
  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search todos..."
        className="w-full px-4 py-3 pl-12 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
    </div>
  );
}