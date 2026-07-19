export default function Input({
  label,
  type = "text",
  placeholder,
  icon,
}) {
  return (
    <div className={label ? "mt-6" : "mt-2"}>
      {label && (
        <label className="font-semibold text-slate-700 text-lg">
          {label}
        </label>
      )}

      <div
        className="
          mt-2
          flex
          items-center
          h-12
          px-4
          border
          border-slate-300
          rounded-xl
          transition
          focus-within:border-sky-500
          focus-within:ring-2
          focus-within:ring-sky-100
        "
      >
        <span className="text-gray-400 text-lg mr-3">
          {icon}
        </span>

        <input
          type={type}
          placeholder={placeholder}
          className="
            w-full
            outline-none
            text-lg
            placeholder:text-gray-400
          "
        />
      </div>
    </div>
  );
}