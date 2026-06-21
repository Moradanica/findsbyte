export default function FlickeringDots({ count = 40 }) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 2 + 1; // 1–3px
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 4 + 2;

        return (
          <span
            key={i}
            className="absolute rounded-full bg-cyan-400 flicker"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              opacity: 0.15,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              boxShadow: "0 0 6px rgba(0,212,255,0.6)",
            }}
          />
        );
      })}
    </div>
  );
}