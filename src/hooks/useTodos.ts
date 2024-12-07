import { useState, useEffect } from 'react';
import { Todo, TodosResponse } from '../types';

export function useTodos(searchQuery: string, filterStatus: 'all' | 'completed' | 'pending') {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        const response = await fetch('https://dummyjson.com/todos');
        const data: TodosResponse = await response.json();
        
        let filteredTodos = data.todos;
        
        // Apply search filter
        if (searchQuery) {
          filteredTodos = filteredTodos.filter(todo =>
            todo.todo.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
        
        // Apply status filter
        if (filterStatus !== 'all') {
          filteredTodos = filteredTodos.filter(todo =>
            filterStatus === 'completed' ? todo.completed : !todo.completed
          );
        }
        
        setTodos(filteredTodos);
      } catch (err) {
        setError('Failed to fetch todos. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, [searchQuery, filterStatus]);

  return { todos, isLoading, error };
}