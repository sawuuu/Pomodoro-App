import { useState } from "react";
import { Button } from "./Button";

export function Modal({ onClose, setTime, notify }) {
  const [customTime, setCustomTime] = useState();

  function customTimeToMilliseconds(time) {
    return parseInt(Math.floor(time * 60000));
  }

  function handleSaveButtonClick() {
    console.log(customTime);
    if (customTime !== undefined && customTime > 0) {
      notify("Saved custom time!", true);
      setTime(customTimeToMilliseconds(customTime));
      onClose();
    } else {
      notify("Custom time must be greater than 0!", false);
      onClose();
    }
  }

  return (
    <div className="w-[300px] h-[300px] flex flex-col justify-center items-center fixed inset-0 m-auto rounded-2xl bg-[#7e98c0] text-black gap-4">
      <button className="absolute top-4 right-4" onClick={onClose}>
        X
      </button>
      <p className="text-xl">Enter minutes</p>
      <input
        min="1"
        max="1439"
        type="number"
        className="w-24 p-2 rounded-sm"
        onChange={(e) => setCustomTime(e.currentTarget.value)}
      />
      <Button text="Save" onClick={handleSaveButtonClick} />
    </div>
  );
}
