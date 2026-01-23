function Section({ id, title, intro, children, rightContent }) {
  return (
    <section id={id} className="section">
      <div className="section-inner">
        <div className="section-left">
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