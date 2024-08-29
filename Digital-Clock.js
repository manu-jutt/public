function updateClock(){

    const now = new Date();
    let hours = now.getHours();
    const meridians = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const mnts = now.getMinutes().toString().padStart(2, 0);
    const scnds = now.getSeconds().toString().padStart(2, 0);
    const miliscnds = now.getMilliseconds().toString().padStart(2, 0);
    const timestring = `${hours}:${mnts}:${scnds} ${meridians}`;
    document.getElementById("clock").textContent = timestring;
}

updateClock();
setInterval(updateClock);