export function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-28 h-10 bg-[#6b71ed] text-xl rounded-md transition-all hover:bg-[#e2e2e2] hover:scale-105 hover:text-black"
    >
      {text}
    </button>
  );
}
