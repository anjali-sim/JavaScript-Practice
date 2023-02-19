// Callbacks Example
console.log(1);
console.log(2);

setTimeout(() => {
    console.log('callback function fired')
}, 2000);

console.log(3);
console.log(4);

// Output The setTimeout doesn't block the further code to execute
// 1 
// 2
// 3
// 4
// callback function fired

// nested setTimeouts
setTimeout(() => {
    console.log('3');
    setTimeout(() => {
        console.log('2');
        setTimeout(() => {
            console.log('1');
        },1000);
    },1000);
},1000);

// Output 3 2 1 in gap of 1 second