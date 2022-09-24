
// Greet msg
const greetMsg = document.getElementById('greet-msg');
const date = new Date();
const hours = date.getHours();
if (greetMsg) {
    if (hours >= 0 & hours < 12) greetMsg.innerHTML = 'Good Morning';
    if (hours >= 12 & hours < 18) greetMsg.innerHTML = 'Good Afternoon';
    if (hours >= 18 & hours < 24) greetMsg.innerHTML = 'Good Evening';
}



// Alert Messages

// 1. ORDER
const success_alert_div = document.querySelector('#success-alert')
if (success_alert_div) {
    setTimeout(() => {
        success_alert_div.remove();
    }, 2000)
}

// 2. REGISTER
const register_success_alert_div = document.querySelector('#register-success-alert')
const remove_alert = document.querySelector('#remove-alert')
if (register_success_alert_div) {
    remove_alert.addEventListener('click', () => {
        register_success_alert_div.remove()
    })
}

// 3. LOGIN
const login_alert_div = document.querySelector('#login-success-alert')
if (login_alert_div) {
    setTimeout(() => {
        login_alert_div.remove();
    }, 3000)
}


// FOR RELOADING PAGE WHEN PRESSED BACK BUTTON
var perfEntries = performance.getEntriesByType("navigation");

if (perfEntries[0].type === "back_forward") {
    location.reload(true);
}


