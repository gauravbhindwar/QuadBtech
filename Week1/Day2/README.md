# Advanced Todo List Application

This project is a feature-rich Todo List application built with React. It demonstrates various React concepts including state management, event handling, controlled components, and conditional rendering.

## Features

- ✅ Create, toggle completion, and delete tasks
- 🔄 Filter tasks by status (all, active, completed)
- 🏷️ Categorize tasks (personal, work, study, health)
- 🚨 Set priority levels (high, medium, low)
- 📅 Add due dates with overdue indicators
- 🔍 Sort tasks by various criteria
- 📊 View task statistics (total, completed, active)
- 💾 Persistent storage using localStorage

## Screenshots

![Todo](https://github.com/user-attachments/assets/dfe63724-854d-47ec-a3db-ad4945630f25)

![Todo With Data](https://github.com/user-attachments/assets/725c34a9-13d1-4670-8d9f-b595ab5d4ed3)


## Technologies Used

- React.js
- HTML/CSS
- localStorage for data persistence
- Vite as the build tool

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```
   cd Week1/Day2
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```
5. Open your browser and navigate to the URL shown in your terminal (typically http://localhost:5173)

## Project Structure

```
src/
├── components/           # React components
│   ├── TodoForm.jsx      # Form for adding new tasks
│   ├── TodoItem.jsx      # Individual todo item
│   ├── TodoList.jsx      # List of todos with filtering
│   ├── TodoFilters.jsx   # Filter and sort controls
│   └── TodoStats.jsx     # Task statistics
├── App.jsx               # Main application component
├── App.css               # Application styles
├── index.css             # Global styles
└── main.jsx              # Entry point
```

## Application Workflow

1. **Adding Tasks**: Enter task details (name, category, priority, due date) and click "Add"
2. **Managing Tasks**: 
   - Click on a task text or "Complete" button to toggle completion
   - Click "Delete" to remove a task
3. **Filtering & Sorting**: Use the filter controls to narrow down tasks by status, category, or priority
4. **Statistics**: View task statistics at the top of the application 

## Learning Concepts

This project demonstrates the following React concepts:

- **useState Hook**: Managing application state
- **useEffect Hook**: Persisting todos to localStorage
- **Event Handling**: Processing user interactions
- **Controlled Components**: Form handling with React state
- **Conditional Rendering**: Displaying content based on state
- **List Rendering**: Rendering lists with the map function
- **Component Composition**: Breaking UI into reusable components

## Expanding the Project

Here are some ideas for further enhancing the application:

- Add task editing functionality
- Implement drag-and-drop for reordering tasks
- Add subtasks or checklist items within a task
- Implement user authentication and cloud storage
- Add dark/light theme toggle
- Create mobile application using React Native

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
