import { useState, useEffect } from "react";

function UserCard({ name, role, image, about, darkMode }) {
  const [imageError, setImageError] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [systemDarkMode, setSystemDarkMode] = useState(false);
  
  // Detect system color scheme
  useEffect(() => {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setSystemDarkMode(prefersDarkMode);
    
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setSystemDarkMode(e.matches);
    };
    
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);
  
  // Determine if dark mode should be applied
  const isDarkMode = darkMode !== undefined ? darkMode : systemDarkMode;
  
  // Generate initials for fallback
  const getInitials = () => {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  };

  // Handle image loading errors
  const handleImageError = () => {
    setImageError(true);
  };
  
  // Toggle profile popup
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };
  
  // Generate fake contact info with better email format
  const email = name.toLowerCase().replace(/\s+/g, '.') + '@example.com';
  const phone = '+91 ' + Math.floor(Math.random() * 9000000000 + 1000000000);
  
  return (
    <>
      <div className={`user-card ${isDarkMode ? 'dark-mode' : ''}`}>
        <div className="user-card-image-container">
          {!imageError ? (
            <img 
              src={image} 
              alt={name} 
              className="user-card-image" 
              onError={handleImageError}
            />
          ) : (
            <div className="user-card-image-fallback">
              {getInitials()}
            </div>
          )}
        </div>
        <div className="user-card-content">
          <h2 className="user-card-name">{name}</h2>
          <div className="user-card-role">{role}</div>
          <p className="user-card-about">{about}</p>
          <button className="user-card-button" onClick={toggleProfile}>View Profile</button>
        </div>
      </div>
      
      {showProfile && (
        <div className={`profile-overlay ${isDarkMode ? 'dark-mode' : ''}`} onClick={toggleProfile}>
          <div className="profile-popup" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={toggleProfile}>×</button>
            <div className="profile-content">
              <div className="profile-header">
                {!imageError ? (
                  <img src={image} alt={name} className="profile-image" />
                ) : (
                  <div className="profile-image-fallback">{getInitials()}</div>
                )}
                <div>
                  <h2 className="profile-name">{name}</h2>
                  <div className="profile-role">{role}</div>
                </div>
              </div>
              
              <div className="profile-section">
                <h3>About</h3>
                <p>{about}</p>
              </div>
              
              <div className="profile-section">
                <h3>Contact Information</h3>
                <p>
                  <span className="contact-label">📧 Email:</span> 
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
                <p>
                  <span className="contact-label">📱 Phone:</span> 
                  <a href={`tel:${phone}`}>{phone}</a>
                </p>
              </div>
              
              <div className="profile-section">
                <h3>Skills</h3>
                <div className="skills-container">
                  {generateRandomSkills(role).map((skill, index) => (
                    <span key={index} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="profile-actions">
                <button className="profile-action-button primary">Connect</button>
                <button className="profile-action-button secondary">Message</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Helper function to generate random skills based on role
function generateRandomSkills(role) {
  const skillSets = {
    "Frontend Developer": ["React", "JavaScript", "HTML5", "CSS3", "Responsive Design", "TypeScript", "Redux"],
    "UI/UX Designer": ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping", "Visual Design"],
    "Backend Developer": ["Node.js", "Express", "MongoDB", "SQL", "REST APIs", "GraphQL", "Microservices"],
    "Product Manager": ["Agile", "User Stories", "Roadmapping", "A/B Testing", "Analytics", "Market Research"],
    "DevOps Engineer": ["Docker", "Kubernetes", "CI/CD", "AWS", "Linux", "Terraform", "Monitoring"],
    "QA Engineer": ["Selenium", "Automated Testing", "Manual Testing", "Test Plans", "Bug Tracking", "Performance Testing"]
  };
  
  const defaultSkills = ["Communication", "Teamwork", "Problem Solving"];
  const roleSkills = skillSets[role] || [];
  
  // Combine role-specific skills with default skills and pick 4-6 random ones
  const allSkills = [...roleSkills, ...defaultSkills];
  const shuffled = allSkills.sort(() => 0.5 - Math.random());
  
  return shuffled.slice(0, Math.floor(Math.random() * 3) + 4);
}

export default UserCard;
