import { useState, useEffect } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFilters from './components/TodoFilters'
import TodoStats from './components/TodoStats'
import './App.css'

function App() {
  // Load todos from localStorage or start with empty array
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    }
    return [];
  });
  
  // Filter and sort state
  const [filter, setFilter] = useState({
    status: 'all',
    category: 'all',
    priority: 'all'
  });
  const [sortBy, setSortBy] = useState('creationDate');

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add new todo
  const addTodo = (todoData) => {
    const newTodo = {
      id: Date.now(),
      text: todoData.text,
      completed: false,
      priority: todoData.priority,
      category: todoData.category,
      dueDate: todoData.dueDate,
      createdAt: new Date().toISOString()
    }
    
    setTodos([...todos, newTodo])
  }

  // Toggle todo completion status
  const toggleTodoCompletion = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  
  // Clear all completed todos
  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  }

  return (
    <div className="todo-container">
      <h1>Advanced Todo List</h1>
      
      <TodoStats todos={todos} />
      
      <TodoForm addTodo={addTodo} />
      
      <TodoFilters 
        filter={filter} 
        setFilter={setFilter} 
        sortBy={sortBy} 
        setSortBy={setSortBy} 
      />
      
      <TodoList 
        todos={todos} 
        toggleTodoCompletion={toggleTodoCompletion}
        deleteTodo={deleteTodo}
        filter={filter}
        sortBy={sortBy}
      />
      
      {todos.some(todo => todo.completed) && (
        <button 
          onClick={clearCompleted}
          className="clear-completed-button"
        >
          Clear Completed Tasks
        </button>
      )}
    </div>
  )
}

export default App
