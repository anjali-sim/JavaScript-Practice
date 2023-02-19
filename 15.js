// filter examples

const arr = [5, 1, 3, 2, 6];
function isOdd() {
    return x%2;
}
function isEven() {
    return x%2 === 0;
}

const output = arr.filter(isOdd);
console.log(output);
const output1 = arr.filter(isEven);
console.log(output1);
const output2 = arr.filter(function greaterThan4(x) {
    return x>4;
});
console.log(output2);
const output3 = arr.filter((x) => x>4);
console.log(output3);