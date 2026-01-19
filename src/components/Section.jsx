function Section({ id, title, children, rightContent }) {
  return (
    <section id={id}>
      <div className={`section-inner ${rightContent ? "has-right" : ""}`}>
        <div className="section-text">
          <h1>{title}</h1>
          <p>{children}</p>
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
