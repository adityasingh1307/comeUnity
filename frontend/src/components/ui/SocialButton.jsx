export default function SocialButton({
  icon,
  color,
}) {
  return (
    <button
      style={{ color }}
      className="
        w-14
        h-14
        rounded-full
        border
        border-slate-300
        flex
        justify-center
        items-center
        text-2xl
        transition-all
        duration-300
        hover:bg-slate-100
        hover:scale-105
      "
    >
      {icon}
    </button>
  );
}