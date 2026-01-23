import { useEffect, useRef, useState } from "react";

const items = [
  "Designing clean, readable interfaces with clear hierarchy",
  "Building reusable, component-driven UIs in React",
  "Using subtle motion to support UX, not distract",
  "Ensuring layouts work across screen sizes and themes",
  "Writing code that’s easy to understand and maintain"
];

function FocusCard() {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`focus-card ${visible ? "is-visible" : ""}`}
    >
      <h3 className="focus-title">Focus &amp; Approach</h3>

      <ul className="focus-list">
        {items.map((text, index) => (
          <li
            key={text}
            style={{ transitionDelay: `${index * 120}ms` }}
          >
            <span className="focus-icon" />
            {text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FocusCard;