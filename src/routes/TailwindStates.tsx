import { useState } from "react";

export default function TailwindStates() {

  const [isDisabled, setIsDisabled] = useState(true);
  const handleStateButton = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div className="px-4 py-2 h-screen flex justify-center items-center flex-col gap-8 bg-slate-600 focus-within:bg-slate-800 transition">
      <button
        className="px-4 py-2 text-black rounded transition bg-red-500
        hover:bg-yellow-500 hover:text-green
        active:bg-blue-500 active:text-dark"
        onClick={handleStateButton}
      >
        Enable input
      </button>
      <input
        type="text"
        placeholder="username"
        required
        className="p-4 rounded 
        focus:bg-green-500
        focus:text-dark"
      />

      <input
        type="text"
        placeholder="username"
        disabled={isDisabled}
        className="p-4 rounded bg-green-500 text-black
        disabled:bg-red-500 disabled:text-black"
      />
    </div>
  );
}
