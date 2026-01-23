import { useEffect, useRef, useState } from "react";

function Section({ id, title, intro, children, rightContent }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref}>
      <div className={`section-inner fade-in ${visible ? "visible" : ""}`}>
        <div className="section-text">
          <h1>{title}</h1>
          {intro && <p className="section-intro">{intro}</p>}
          {children}
        </div>

        {rightContent && (
          <div className="section-right">
            {rightContent}
          </div>
        )}
      </div>
    </section>
  );
}

export default Section;