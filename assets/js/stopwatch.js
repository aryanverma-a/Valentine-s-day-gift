let stopwatch;
let startTime;

startTime = new Date("2023-01-21T00:00:00").getTime();
stopwatch = setInterval(updateStopwatch, 1);

function updateStopwatch() {
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;

    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const milliseconds = elapsedTime % 1000;

    const formattedTime =
        `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;

    document.getElementById("stopwatch").innerHTML = formattedTime;
}