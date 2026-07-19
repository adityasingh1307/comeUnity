import { FaArrowRight } from "react-icons/fa";

export default function Button({
  text,
  type = "button",
  onClick,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        w-150
        h-12
        mt-6
        rounded-full
        bg-gradient-to-r
        from-sky-500
        to-blue-500
        text-white
        text-xl
        font-semibold
        flex
        justify-center
        items-center
        gap-3
        transition-all
        duration-300
        hover:shadow-lg
        hover:scale-[1.015]
      "
    >
      {text}

      <FaArrowRight />
    </button>
  );
}