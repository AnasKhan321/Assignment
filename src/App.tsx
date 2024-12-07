import  { useState } from 'react';
import { SearchBox } from './components/SearchBox';
import { FilterBar } from './components/FilterBar';
import { TodoList } from './components/TodoList';
import { useTodos } from './hooks/useTodos';
import { ListTodo } from 'lucide-react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'completed' | 'pending'>('all');
  const { todos, isLoading, error } = useTodos(searchQuery, filterStatus);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <ListTodo className="w-10 h-10 text-blue-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Todo Search
          </h1>
          <p className="text-gray-600">
            Search and filter your todos
          </p>
        </header>

        <div className="space-y-6">
          <SearchBox 
            query={searchQuery} 
            onQueryChange={setSearchQuery} 
          />
          
          <FilterBar 
            activeFilter={filterStatus}
            onFilterChange={setFilterStatus}
          />

          <TodoList 
            todos={todos}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
    </div>
  );
}

export default App;