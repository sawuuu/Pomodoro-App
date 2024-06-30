import { useState } from "react";
import { Button } from "./Button";

export function Modal({ onClose, setTime }) {
  const [customTime, setCustomTime] = useState();

  function customTimeToMilliseconds(time) {
    return parseInt(Math.floor(time * 60000));
  }

  function handleSaveButtonClick() {
    if (customTime !== undefined) {
      setTime(customTimeToMilliseconds(customTime));
    }
  }

  return (
    <div className="w-[300px] h-[300px] flex flex-col justify-center items-center fixed inset-0 m-auto rounded-2xl bg-[#7e98c0] text-black gap-4">
      <button className="absolute top-4 right-4" onClick={onClose}>
        X
      </button>
      <p className="text-xl">Enter minutes</p>
      <input
        type="number"
        className="w-24"
        onChange={(e) => setCustomTime(e.currentTarget.value)}
      />
      <Button
        text="Save"
        onClick={() => {
          handleSaveButtonClick();
        }}
      />
    </div>
  );
}
