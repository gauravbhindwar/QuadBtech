# Day 1: Introduction to React.js

<div align="center">
  <p>
    <img src="https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React v19.0.0" />
    <img src="https://img.shields.io/badge/Vite-6.3.2-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite v6.3.2" />
    <img src="https://img.shields.io/badge/Bun-1.0.15-000000?style=flat-square&logo=bun&logoColor=white" alt="Bun v1.0.15" />
  </p>
</div>

## Why React?

React.js has become one of the most popular JavaScript libraries for building user interfaces for several compelling reasons:

- **Component-Based Architecture**: React breaks down UI into reusable, self-contained components, making development and maintenance more manageable.
- **Virtual DOM**: React uses a virtual representation of the DOM, which optimizes rendering and improves application performance.
- **Declarative Syntax**: Write code that describes what your UI should look like, not the step-by-step process to create it.
- **One-Way Data Flow**: Data flows in a single direction, making applications more predictable and easier to debug.
- **Large Ecosystem**: Extensive libraries, tools, and community support make development faster and more efficient.
- **Backed by Facebook**: Continuous development and maintenance from a major tech company ensures stability and longevity.

## React vs. Traditional JavaScript

| Feature | Traditional JavaScript | React.js |
|---------|------------------------|----------|
| DOM Manipulation | Direct DOM manipulation is verbose and error-prone | Uses Virtual DOM for efficient updates |
| Code Organization | Often mixes UI rendering with business logic | Separates concerns through components |
| Reusability | Requires manual patterns for reuse | Component-based architecture promotes reuse |
| State Management | Global state often leads to complexity | Encapsulated state with predictable updates |
| Rendering Efficiency | Full page re-renders are common | Only updates what needs to change |
| Development Experience | More boilerplate code | JSX provides a concise, HTML-like syntax |

## Setting up a React Project

For this project, we're using **Bun** with Vite as our build tool. Bun is a modern JavaScript runtime that offers faster performance than Node.js and includes a package manager.

### Using Bun with Vite

```bash
# Install Bun globally (if not already installed)
curl -fsSL https://bun.sh/install | bash

# Create a new React project with Vite
bun create vite my-react-app --template react

# Navigate to project directory
cd my-react-app

# Install dependencies
bun install

# Start development server
bun run dev
```

### Benefits of using Bun

- Faster package installations compared to npm/yarn
- Improved development server startup times
- All-in-one JavaScript runtime, bundler, and package manager
- TypeScript support out of the box
- Compatible with the npm ecosystem

## JSX, Components, and Props

### JSX: JavaScript XML

JSX is a syntax extension for JavaScript that looks similar to HTML but provides the full power of JavaScript:

```jsx
const element = <h1>Hello, world!</h1>;
```

JSX allows:
- Embedding expressions in curly braces: `{expression}`
- Using JavaScript variables and functions within markup
- Defining attributes with camelCase naming convention
- Self-closing tags for elements without children

### Components

React applications are built from components, which are reusable pieces of UI:

**Function Components**:
```jsx
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

**Class Components**:
```jsx
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

### Props

Props (short for properties) are how components receive data from their parent:

```jsx
// Parent component passing props
<UserCard name="Riya Sharma" role="UI/UX Designer" />

// Child component receiving props
function UserCard({ name, role }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{role}</p>
    </div>
  );
}
```

Props are:
- Read-only and should not be modified
- Can be any JavaScript value (strings, numbers, objects, functions)
- Allow for component composition and reuse

## Hands-on: Team Member Profile Cards

Our hands-on project for Day 1 is a responsive grid of team member profile cards built with React components. This project demonstrates:

1. **Component Creation**: Building reusable `UserCard` components
2. **Props Usage**: Passing and using data between components
3. **Conditional Rendering**: Fallback UI for failed image loads
4. **Event Handling**: Toggle profile details on click
5. **CSS Styling**: Component-specific styling with CSS
6. **Dark Mode Support**: Implementing both system-based and manual dark mode

### Project Features

- Display of team member cards in a responsive grid layout
- Interactive cards with profile popups
- Fallback UI for failed image loads using initials
- Dynamic skill generation based on the team member's role
- Responsive design for various screen sizes
- Dark mode support using system preferences and toggle

This project provides a practical introduction to React's component model, props, and state management, all built with Bun and Vite for optimal performance.

## Additional Resources

- [React Official Documentation](https://reactjs.org/docs/getting-started.html)
- [Bun Documentation](https://bun.sh/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [JavaScript to React Transition Guide](https://reactjs.org/docs/thinking-in-react.html)
