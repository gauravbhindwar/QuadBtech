function TodoItem({ todo, toggleCompletion, deleteTodo }) {
  // Function to format date for display
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };
  
  // Function to check if todo is overdue
  const isOverdue = () => {
    if (!todo.dueDate || todo.completed) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const dueDate = new Date(todo.dueDate);
    return dueDate < today;
  };

  return (
    <li className={`todo-item priority-${todo.priority} ${todo.completed ? 'completed' : ''} ${isOverdue() ? 'overdue' : ''}`}>
      <div className="todo-content">
        <span 
          onClick={() => toggleCompletion(todo.id)}
          className="todo-text"
        >
          {todo.text}
        </span>
        
        <div className="todo-details">
          <span className="todo-category">{todo.category}</span>
          {todo.dueDate && (
            <span className="todo-due-date">
              Due: {formatDate(todo.dueDate)}
            </span>
          )}
        </div>
      </div>
      
      <div className="todo-actions">
        <button 
          onClick={() => toggleCompletion(todo.id)}
          className="complete-button"
        >
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button 
          onClick={() => deleteTodo(todo.id)}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
