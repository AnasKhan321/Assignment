import { CheckCircle2, Circle, User } from 'lucide-react';
import { Todo } from '../types';

interface TodoListProps {
  todos: Todo[];
  isLoading: boolean;
  error: string | null;
}

export function TodoList({ todos, isLoading, error }: TodoListProps) {
  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        {error}
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="animate-pulse bg-white rounded-lg p-4">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          </div>
        ))}
      </div>
    );
  }

  if (todos.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No todos found. Try adjusting your search or filters.
      </div>
    );
  }

  return (
    <div className="space-y-4 max-h-[60vh]  overflow-y-scroll">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-3">
            {todo.completed ? (
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
            ) : (
              <Circle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-grow">
              <p className={`text-gray-900 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                {todo.todo}
              </p>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <User className="w-4 h-4 mr-1" />
                <span>User {todo.userId}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}