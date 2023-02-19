const record1 = new Promise((resolve, reject) => {
    resolve('Video 1')
})

const record2 = new Promise((resolve, reject) => {
    resolve('Video 2')
})

const record3 = new Promise((resolve, reject) => {
    resolve('Video 3')
})

//.all() executes all the promise one by one and then the .then and .catch are executed 
Promise.all([
    record1,
    record2,
    record3
]).then((messages) => {
    console.log(messages)
})

Promise.race([
    record1,
    record2,
    record3
]).then((message) => {
    console.log(message)
})
// You can easily execute code with Promise.all when multiple responses are returned
// You can wait for only one result from concurrent pending promises with the help of Promise.race

var promise = new Promise((resolve, reject) => { 
    const x = "geeksforgeeks"; 
    const y = "geeksforgeeks";
    if(x === y) { 
      resolve(); 
    } else { 
      reject(); 
    } }); 
  promise.then(() => { 
  console.log('Success, You are a GEEK');})
  .catch(() => { 
  console.log('Some error has occurred');}); 
  