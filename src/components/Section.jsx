function Section({ id, title, children }) {
  return (
    <section id={id}>
      <h1>{title}</h1>
      <p>{children}</p>
    </section>
  );
}

export default Section;