const clock = document.getElementById('clock');

setInterval(() => {

    const date = new Date()

    clock.innerHTML = date.toLocaleTimeString();

    
}, 1000);


// Set interval is used to repeat any process after a particular time interval