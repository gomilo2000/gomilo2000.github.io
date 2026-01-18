import profilePic from "../assets/profile.jpg";

function Navbar({ sections, active, navRefs, indicatorRef, onClick }) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo-container">
          <div className="profile-circle">
            <img src={profilePic} alt="Profile" />
          </div>
          <span className="name">GORAN MILOSEVIC</span>
        </div>

        <div className="nav-links-container">
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