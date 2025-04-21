import { useState, useEffect } from "react";
import UserCard from "./components/UserCards";
import "./App.css";

const users = [
  {
    name: "Gaurav Kumar",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    about: "Loves building React apps and learning new tech."
  },
  {
    name: "Riya Sharma",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    about: "Designs user-friendly and aesthetic interfaces."
  },
  {
    name: "Vikram Singh",
    role: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    about: "Node.js expert with a passion for efficient APIs."
  },
  {
    name: "Priya Patel",
    role: "Product Manager",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    about: "Turns complex requirements into successful products."
  },
  {
    name: "Rahul Gupta",
    role: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    about: "Automation wizard who ensures smooth deployments."
  },
  {
    name: "Neha Verma",
    role: "QA Engineer",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    about: "Finding bugs before they reach production is her superpower."
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  
  // Detect system preference on initial load
  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDarkMode);
    
    // Listen for changes in system preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setDarkMode(e.matches);
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  
  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <header className="app-header">
        <h1>Our Talented Team</h1>
        <p className="app-subtitle">Meet the exceptional professionals driving innovation and excellence</p>
      </header>
      <div className="user-grid">
        {users.map((user, index) => (
          <UserCard key={index} {...user} darkMode={darkMode} />
        ))}
      </div>
    </div>
  );
}

export default App;
