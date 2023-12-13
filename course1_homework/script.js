document.addEventListener("DOMContentLoaded", function () {
    initializeWatch();
    setInterval(updateTime, 1000);
});

function initializeWatch() {
    setRotation("second", 0);
    setRotation("minute", 0);
    setRotation("hour", 0);
    updateTime();
}

function updateTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    
    const secRotation = 6 * seconds;
    const minRotation = 6 * minutes;
    const hrRotation = 30 * hours + minutes / 2;

    setRotation("second", secRotation);
    setRotation("minute", minRotation);
    setRotation("hour", hrRotation);

    console.clear();
    console.log("hr rotation:", hrRotation);
    console.log("minute rotation:", minRotation);
    console.log("seconds rotation:", secRotation);
}

function setRotation(hand, rotation) {
    const handElement = document.getElementById(hand);
    handElement.style.transform = `rotate(${rotation}deg)`;
}
