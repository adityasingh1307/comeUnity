export default function Checkbox({
  label,
}) {
  return (
    <label className="flex items-center gap-3 mt-5 cursor-pointer">

      <input
        type="checkbox"
        className="w-5 h-5"
      />

      <span className="text-lg text-slate-700">
        {label}
      </span>

    </label>
  );
}