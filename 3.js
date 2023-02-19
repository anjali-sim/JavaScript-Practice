/* Event Loop */

/* Example-1 setTimeout*/
console.log("Start");

setTimeout(function cb(){
    console.log("Callback");
}, 5000);

console.log("End");

/* Example-2 DOM APIs */
console.log("Start");

document.getElementById("btn")
.addEventListener("click", function cb(){
    console.log("Callback");
});

console.log("End");

/* Example-3 fetch() */ 
console.log("Start");

setTimeout(function cbT(){
    console.log("CB SetTimeout");
}, 5000);

fetch("https://api.netflix.com")
.then(function cbF() {
    console.log("CB Netflix");
});

console.log("End");