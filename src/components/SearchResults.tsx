import React from 'react';
import { SearchResult } from '../types';

interface SearchResultsProps {
  results: SearchResult[];
  isLoading: boolean;
}

export function SearchResults({ results, isLoading }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="w-full space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No results found. Try adjusting your search terms.
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {results.map((result) => (
        <article key={result.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            {result.title}
          </h2>
          <p className="text-gray-600 mb-3">{result.excerpt}</p>
          <div className="flex items-center text-sm text-gray-500">
            <span className="capitalize bg-gray-100 px-2 py-1 rounded">
              {result.category}
            </span>
            <span className="mx-2">•</span>
            <time>{result.date}</time>
          </div>
        </article>
      ))}
    </div>
  );
}