import { useRef } from "react";
import "./CodeCanvas.css";

export default function CodeCanvas() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const resetTransform = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      ref={cardRef}
      className="code-canvas"
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTransform}
    >
      <pre>
{`const developer = {
  name: "Goran",
  focus: ["Frontend", "Mobile"],
  mindset: "Clean, thoughtful UI"
};`}
      </pre>
    </div>
  );
}
