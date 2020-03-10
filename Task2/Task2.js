let colon;

function getTime() {
    let today = new Date();
    let hours = (today.getHours() < 10) ? '0' + today.getHours() : today.getHours();
    let minutes = (today.getMinutes() < 10) ? '0' + today.getMinutes() : today.getMinutes();
    let seconds = (today.getSeconds() < 10) ? '0' + today.getSeconds() : today.getSeconds();
    colon = (colon === ':') ? ' ' : ':';
    document.getElementById('clocks').innerHTML = hours + colon + minutes + colon + seconds;
}

function startClocks() {
    setInterval(getTime, 500);
    getTime();
}

startClocks();