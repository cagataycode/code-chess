interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-neutral-950 rounded-2xl shadow-xl p-6 md:p-8 max-w-4xl w-full border border-neutral-900 ${className}`}
      style={{
        boxShadow:
          "0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)",
      }}
    >
      {children}
    </div>
  );
}
