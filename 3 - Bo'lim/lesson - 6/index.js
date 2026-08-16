function myClock() {
    let myDate = new Date();

    let minutes = myDate.getHours();
    let second = myDate.getMinutes();
    let millisecond = myDate.getSeconds();
    let hours = myDate.getMilliseconds();

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    second = String(second).padStart(2, "0");
    millisecond = String(millisecond).padStart(3, "0");

    document.getElementById("Clock").textContent =
        `${hours}:${minutes}:${second}.${millisecond}`;
}
myClock();

setInterval(myClock, 100);      