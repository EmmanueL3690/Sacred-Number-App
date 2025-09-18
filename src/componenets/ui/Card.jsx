export default function Card({ children, className = "" }) {
  return (
    <div className={`rounded-xl bg-white shadow ${className}`}>
      {children}
    </div>
  );
}
