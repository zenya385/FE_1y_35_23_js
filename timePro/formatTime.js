export function pad(num, digit = 2) {
  return num.toString().padStart(digit, "0");
}

export function formatTime(ms) {
  const milliseconds = ms % 1000;
  const totalSeconds = Math.floor(ms / 1000);
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600);

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(
    milliseconds,
    3
  )}`;
}

// const days = Math.floor(diff / (1000 * 60 * 60 * 24));
// const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
// const minutes = Math.floor((diff / (1000 * 60)) % 60);
// const seconds = Math.floor((diff / 1000) % 60);
// // console.log("formatTime(2000) :>> ", formatTime(2000000111)); // 00:00:02.000
