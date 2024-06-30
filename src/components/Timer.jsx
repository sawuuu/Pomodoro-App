export function Timer({ time }) {
  // convert time to hours:minutes:seconds
  function getFormattedTime(milliseconds) {
    let totalSeconds = parseInt(Math.floor(milliseconds / 1000));
    let totalMinutes = parseInt(Math.floor(totalSeconds / 60));
    let totalHours = parseInt(Math.floor(totalMinutes / 60));

    let seconds = parseInt(totalSeconds % 60);
    let minutes = parseInt(totalMinutes % 60);
    let hours = parseInt(totalHours % 24);

    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedHours = hours < 10 ? `0${hours}` : hours;

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  return (
    <div className="w-[200px] h-[200px] bg-[#11215f] text-2xl rounded-full flex justify-center items-center ">
      {getFormattedTime(time)}
    </div>
  );
}
