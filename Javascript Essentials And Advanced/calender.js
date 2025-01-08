
// function f1() {
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
//     const d = new Date().toLocaleDateString('en-US', options);
//     xx = document.querySelector('.first-clock').innerHTML = d
// }
// setInterval(f1, 100)

// function f2() {
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
//     const timeString = `${hours}:${minutes}:${seconds}`;
//     secon = document.querySelector('.second-clock').innerHTML = timeString

// }
// setInterval(f2, 100)


// this code  use from  online source

// Function to update date and time
function updateClock() {
    const now = new Date();
    
    // Update date
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', dateOptions);
    document.querySelector('.first-clock').innerHTML = dateString;

    // Update time
    const timeString = [
        now.getHours().toString().padStart(2, '0'),
        now.getMinutes().toString().padStart(2, '0'),
        now.getSeconds().toString().padStart(2, '0')
    ].join(':');
    document.querySelector('.second-clock').innerHTML = timeString;
}
setInterval(updateClock, 100);
