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

// set background and greeting
function setBackgroundAndGreeting() {
    const today = new Date();
    let hours = today.getHours();
    
    if(hours < 12) {
        // morning
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        greeting.textContent = "Good Morning"
        document.body.style.color = "black";
        console.log('morning');
    } else if(hours < 18) {
        // afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = "Good Afternoon";
        console.log('afternoon');
    } else {
        // night
        document.body.style.backgroundImage = "url('../img/night.jpg')";
        greeting.textContent = "Good Night";
        console.log('night');
    }
}

showTime();
setBackgroundAndGreeting();