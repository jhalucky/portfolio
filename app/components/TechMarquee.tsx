import { stack } from "@/app/data/stack";

export default function TechMarquee() {
  const doubled = [...stack, ...stack];
  const half = Math.ceil(stack.length / 2);
  const row1 = [...stack.slice(0, half), ...stack.slice(0, half)];
  const row2 = [...stack.slice(half), ...stack.slice(half)];

  return (
    <div className="marquee-tilt overflow-hidden py-3 select-none">
      {/* Row 1 — left */}
      <div className="overflow-hidden mb-2">
        <div className="marquee-track flex gap-3 w-max">
          {row1.map((t, i) => (
            <span key={i} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
      {/* Row 2 — right (opposite direction) */}
      <div className="overflow-hidden">
        <div className="marquee-track-slow flex gap-3 w-max" style={{ animationDirection: "reverse" }}>
          {row2.map((t, i) => (
            <span key={i} className="tech-tag">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
