function TodoStats({ todos }) {
  const calculateStats = () => {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const active = total - completed;
    
    const highPriority = todos.filter(todo => todo.priority === 'high' && !todo.completed).length;
    
    const overdue = todos.filter(todo => {
      if (!todo.dueDate || todo.completed) return false;
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const dueDate = new Date(todo.dueDate);
      return dueDate < today;
    }).length;
    
    return { total, completed, active, highPriority, overdue };
  };
  
  const stats = calculateStats();
  
  return (
    <div className="todo-stats">
      <div className="stat-item">
        <span className="stat-label">Total:</span>
        <span className="stat-value">{stats.total}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Completed:</span>
        <span className="stat-value">{stats.completed}</span>
      </div>
      <div className="stat-item">
        <span className="stat-label">Active:</span>
        <span className="stat-value">{stats.active}</span>
      </div>
      {stats.highPriority > 0 && (
        <div className="stat-item urgent">
          <span className="stat-label">High Priority:</span>
          <span className="stat-value">{stats.highPriority}</span>
        </div>
      )}
      {stats.overdue > 0 && (
        <div className="stat-item overdue">
          <span className="stat-label">Overdue:</span>
          <span className="stat-value">{stats.overdue}</span>
        </div>
      )}
    </div>
  );
}

export default TodoStats;
