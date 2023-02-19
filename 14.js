// map examples

const arr = [5, 1, 3, 2, 6];
function double(x) {
    return x * 2;
}
 function triple(x) {
    return x * 3;
 }
 function binary(x) {
    return x.toString(2);
 }
 const output = arr.map(double);
 console.log(output);
//  [10, 2, 6, 4, 12]
 const output1 = arr.map(triple);
 console.log(output1);
 //  [15, 3, 9, 6, 18]
 const output2 = arr.map(binary);
 console.log(output2);
//  OR
const output3 = arr.map((x) => x.toString(2));
 //  ["101", "1", "11", "10", "110"]