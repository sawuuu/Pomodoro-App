import { useState, useEffect } from "react";
import { Button } from "./components/Button";
import { Timer } from "./components/Timer";
import { createPortal } from "react-dom";
import { Modal } from "./components/Modal";

function App() {
  const getStartValue = () => localStorage.getItem("time") || 900000;
  const bellSound = new Audio("/bell-ring.mp3");
  const [time, setTime] = useState(getStartValue);
  const [isStarted, setIsStarted] = useState(false);
  const [isModalShown, setIsModalShown] = useState(false);

  const modal = createPortal(
    <Modal onClose={() => setIsModalShown(false)} setTime={setTime} />,
    document.body
  );

  useEffect(() => {
    if (time === 0) {
      setIsStarted(false);
      bellSound.volume = 0.3;
      bellSound.play();
      return;
    }

    localStorage.setItem("time", time);

    let timeInterval;
    if (isStarted) {
      timeInterval = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime - 1000 <= 0) {
            clearInterval(timeInterval);
            return 0;
          }
          return prevTime - 1000;
        });
      }, 1000);
    } else {
      clearInterval(timeInterval);
    }

    return () => clearInterval(timeInterval);
  }, [isStarted, time]);

  return isModalShown ? (
    modal
  ) : (
    <div className="min-w-[1440px] mt-16 p-8 flex flex-col items-center">
      <div className="min-w-[1440px] mt-16 p-8 flex flex-col items-center">
        <h1 className="text-5xl text-center mb-7">Pomodoro</h1>
        <div className="flex gap-3 mb-8">
          <Button text="Short time" onClick={() => setTime(900000)} />
          <Button text="Long time" onClick={() => setTime(2700000)} />
          <Button text="custom" onClick={() => setIsModalShown(true)} />
        </div>
        <Timer time={time} />
        <div className="flex gap-3 mt-8">
          <Button text="Start" onClick={() => setIsStarted(true)} />
          <Button text="Stop" onClick={() => setIsStarted(false)} />
        </div>
      </div>
    </div>
  );
}

export default App;
