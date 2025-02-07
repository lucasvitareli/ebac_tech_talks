AOS.init();

const dataDoEvento = new Date("Dec 12, 2025, 19:00:00 ");
const timeStampEvent = dataDoEvento.getTime();

const timeCount = setInterval(function() {
    const now = new Date();
    const timeStampNow = now.getTime();

    const timeStampGap = timeStampEvent - timeStampNow;

    const daysMs = 1000 * 60 * 60 * 24;
    const hoursMs = 1000 * 60 * 60;
    const minutesMs = 1000 * 60;
    
    const daysCountDown = Math.floor(timeStampGap / (daysMs));
    const hoursCountDown = Math.floor(timeStampGap % (daysMs) / (hoursMs));
    const minutesCountDown = Math.floor(timeStampGap % (hoursMs) / (minutesMs));
    const secondsCountDown = Math.floor(timeStampGap % (minutesMs) / 1000);
    
    
    document.getElementById("timer").innerHTML = `${daysCountDown}d ${hoursCountDown}h ${minutesCountDown}m ${secondsCountDown}s`;

    if (timeStampGap <= 0) {
        clearInterval(timeCount);
        
        document.querySelector(".container__text").
        innerHTML = "Evento expirado!", 

        document.querySelector(".container__text").
        style.color = "red";  }

}, 1000);
