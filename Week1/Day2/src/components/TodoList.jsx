import TodoItem from './TodoItem';

function TodoList({ todos, toggleTodoCompletion, deleteTodo, filter, sortBy }) {
  // Apply filters and sorting
  const filteredAndSortedTodos = () => {
    let filtered = [...todos];
    
    // Apply category filter
    if (filter.category !== 'all') {
      filtered = filtered.filter(todo => todo.category === filter.category);
    }
    
    // Apply completion status filter
    if (filter.status === 'active') {
      filtered = filtered.filter(todo => !todo.completed);
    } else if (filter.status === 'completed') {
      filtered = filtered.filter(todo => todo.completed);
    }

    // Apply priority filter
    if (filter.priority !== 'all') {
      filtered = filtered.filter(todo => todo.priority === filter.priority);
    }
    
    // Sort todos
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'priority':
          const priorityOrder = { high: 0, medium: 1, low: 2 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        case 'dueDate':
          if (!a.dueDate) return 1;
          if (!b.dueDate) return -1;
          return new Date(a.dueDate) - new Date(b.dueDate);
        case 'alphabetical':
          return a.text.localeCompare(b.text);
        default: // creation date (id)
          return a.id - b.id;
      }
    });
    
    return filtered;
  };

  const displayTodos = filteredAndSortedTodos();

  if (displayTodos.length === 0) {
    return <p className="empty-message">No tasks match your current filters. Try adjusting your filters or add a new task.</p>;
  }

  return (
    <ul className="todo-list">
      {displayTodos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo}
          toggleCompletion={toggleTodoCompletion}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
