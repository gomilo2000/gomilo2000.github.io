import profilePic from "../assets/profile.jpg";
import ThemeToggle from "./ThemeToggle";

function Navbar({
  sections,
  active,
  navRefs,
  indicatorRef,
  onClick,
  toggleTheme,
}) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* LEFT: Logo / Name / Theme Toggle */}
        <div className="nav-left">
          <div className="logo-container">
            <div className="profile-circle">
              <img src={profilePic} alt="Profile" />
            </div>
            <span className="name">GORAN MILOSEVIC</span>
          </div>

          <ThemeToggle toggleTheme={toggleTheme} />
        </div>

        {/* RIGHT: Navigation */}
        <div className="nav-right">
          <ul className="nav-links">
            {sections.map((section, i) => (
              <li
                key={section}
                ref={(el) => (navRefs.current[i] = el)}
                className={active === i ? "active" : ""}
                onClick={() => onClick(i)}
              >
                {section}
              </li>
            ))}
          </ul>

          <div className="nav-indicator" ref={indicatorRef} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
