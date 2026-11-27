export default function Marquee({ items }) {
  const loop = [...items, ...items]; // duplicated for a seamless loop
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  );
}