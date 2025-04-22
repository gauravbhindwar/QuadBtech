function TodoFilters({ filter, setFilter, sortBy, setSortBy }) {
  return (
    <div className="todo-filters">
      <div className="filter-row">
        <div className="filter-group">
          <label>Status:</label>
          <select 
            value={filter.status} 
            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
            className="filter-select"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>Category:</label>
          <select 
            value={filter.category} 
            onChange={(e) => setFilter({ ...filter, category: e.target.value })}
            className="filter-select"
          >
            <option value="all">All</option>
            <option value="personal">Personal</option>
            <option value="work">Work</option>
            <option value="study">Study</option>
            <option value="health">Health</option>
          </select>
        </div>
        
        <div className="filter-group">
          <label>Priority:</label>
          <select 
            value={filter.priority} 
            onChange={(e) => setFilter({ ...filter, priority: e.target.value })}
            className="filter-select"
          >
            <option value="all">All</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
      </div>
      
      <div className="sort-group">
        <label>Sort by:</label>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          className="filter-select"
        >
          <option value="creationDate">Creation Date</option>
          <option value="priority">Priority</option>
          <option value="dueDate">Due Date</option>
          <option value="alphabetical">Alphabetical</option>
        </select>
      </div>
    </div>
  );
}

export default TodoFilters;
