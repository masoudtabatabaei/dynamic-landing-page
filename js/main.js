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


// get name
function getName() {
    if(localStorage.getItem('name') === null) {
        name.textContent = "[Enter Name]";
    } else {
        name.textContent = localStorage.getItem('name');
    }
}


// get focus
function getFocus() {
    if(localStorage.getItem('focus') === null) {
        focus.textContent = "[Enter Focus]";
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}


// set name 
function setName(e) {
    if(e.type === "keypress") {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name' , e.target.textContent);
            name.blur();
        }
    } else {
        localStorage.setItem('name' , e.target.textContent);
    }
}

name.addEventListener('keypress' , setName);
name.addEventListener('blur' , setName);


function setFocus(e) {
    if(e.type === "keypress") {
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus' , e.target.textContent);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus' , e.target.textContent);
    }
}

focus.addEventListener("keypress" , setFocus);
focus.addEventListener("blur" , setFocus);


showTime();
setBackgroundAndGreeting();
getName();
getFocus();