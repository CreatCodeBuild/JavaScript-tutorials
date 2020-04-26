/*

让我们来看看原生支持 for of 的数据结构

*/

function inlineWrite() {
    for (let x of arguments) {
        process.stdout.write(`${x} | `)
    }
}


// Array
let a = [1, 2, 3];
inlineWrite(" Array:")
for (let x of a) {
    inlineWrite(x);
}
console.log();

// String
let s = "123四五六";
inlineWrite("String:")
for (let x of s) {
    inlineWrite(x);
}
console.log();

// TypedArray
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray
const typedArray = new Int8Array(10);
typedArray[0] = 32;
console.log('typedArray:', typedArray);
for(let x of typedArray) {
    inlineWrite(x)
}
console.log();



// Map
let m = new Map();
m.set(1, "a"); m.set(2, "b"); m.set(3, "c");
inlineWrite("   Map:")
for (let x of m) {
    // x is an 2 length Array: [key, value] becuase there is no tuple in JavaScript
    inlineWrite(`${x[0]}->${x[1]}`);
}
console.log();

// Set
let set = new Set();
set.add(1); set.add(2); set.add(3);
inlineWrite("   Set:")
for (let x of set) {
    inlineWrite(x);
}
console.log();


// Iteration Protocol
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
