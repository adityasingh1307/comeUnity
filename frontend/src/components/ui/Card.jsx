export default function Card({ children }) {
  return (
    <div className="w-full max-w-[560px] bg-white rounded-[28px] shadow-xl px-10 py-8">
      {children}
    </div>
  );
}