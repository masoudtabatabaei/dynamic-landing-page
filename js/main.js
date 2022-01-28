// Dom elements
const time = document.querySelector("#time");
const greeting = document.querySelector("#greeting");
const name = document.querySelector("#name");
const focus = document.querySelector("#focus");

function showTime() {
    let date = new Date();

    let hours = date.getHours() < 10 ? '0'+date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds();

    //AM or PM format
    const amPm = hours >= 12 ? "PM" : "AM";
    
    // 12hr format 
    hours = hours % 12 || 12;

    time.innerHTML = `<span>${hours}</span> : <span>${minutes}</span> : <span>${seconds}</span>&nbsp;<span>${amPm}</span>`;

    setTimeout(showTime, 1000);
}

showTime();