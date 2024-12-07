

type FilterStatus = 'all' | 'completed' | 'pending';

interface FilterBarProps {
  activeFilter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
}

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onFilterChange('all')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
          ${activeFilter === 'all' 
            ? 'bg-blue-500 text-white' 
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
      >
        All
      </button>
      <button
        onClick={() => onFilterChange('completed')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
          ${activeFilter === 'completed'
            ? 'bg-green-500 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
      >
        Completed
      </button>
      <button
        onClick={() => onFilterChange('pending')}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
          ${activeFilter === 'pending'
            ? 'bg-yellow-500 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
      >
        Pending
      </button>
    </div>
  );
}